"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";

import Masonry from "masonry-layout";
// import works from "/works/_index.json"

// import { Masonry } from 'masonic'
import Image from "next/image";
import styles from "./SMainGridA.module.scss";
import ICO_Download from "./iconography/ICO_Download";
import GridItem from "./GridItem";


export interface WorkItem {
  hidden: boolean;
  src: string;
  aspectRatio: number;
  title: string;
  tags: string[];
  video: boolean;
  videoSrc: string;
  publish?: boolean;
}

export default function SMainGridA() {
  const [works, setWorks] = useState<WorkItem[]>([]);
  const masonryRef = useRef<Masonry | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [columnWidth, setColumnWidth] = useState<number>(0);

  const debounceRef = useRef<number | null>(null);
  const firstLayoutDoneRef = useRef(false);

  // const targetCols = 6;
  const gutter = 10;
  const minWidth = 360;

  // 1) Load data
  useEffect(() => {
    fetch("/works/_index.json")
      .then((res) => res.json())
      // .then((data) => setWorks([...data].reverse()));
      .then((data) =>
        setWorks(data.filter((item: WorkItem) => item.publish === true))
      );
  }, []);

  useLayoutEffect(() => {
    if (!gridRef.current) return;
    const w = gridRef.current.getBoundingClientRect().width;
    if (!w) return;
    setContainerWidth(w);

    const cols = Math.max(1, Math.floor(w / minWidth));
    const cw = (w - (cols - 1) * gutter) / cols;
    setColumnWidth(cw);
    // no deps -> run once at mount for initial paint
  }, []);

  // 2) Track container width
  useEffect(() => {
    if (!gridRef.current) return;

    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      setContainerWidth(w);
    });

    ro.observe(gridRef.current);

    return () => ro.disconnect();
  }, [works.length]);

  // 3) Compute column width on resize
  useEffect(() => {
    if (!containerWidth) return;

    // Clear any pending debounce
    if (debounceRef.current) clearTimeout(debounceRef.current);

    // Wait 150ms after the last resize before updating column width
    debounceRef.current = window.setTimeout(() => {
      const cols = Math.max(
        1,
        Math.floor((containerWidth + gutter) / (minWidth + gutter))
      );
      const cw = (containerWidth - (cols - 1) * gutter) / cols;
      setColumnWidth(cw);
    }, 100);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [containerWidth, gutter, minWidth]);

  // 4) Initialize masonry
  useEffect(() => {
    if (!gridRef.current || works.length === 0 || !columnWidth) return;

    // Destroy existing masonry instance if it exists

    masonryRef.current?.destroy?.();
    masonryRef.current = new Masonry(gridRef.current, {
      itemSelector: "[data-masonry-item]",
      columnWidth, // columnWidth is the width of the column
      gutter,
      percentPosition: false,
      transitionDuration: "300ms",
      resize: false,
      // initLayout: false,
    });

    // masonryRef.current.layout?.();
    // Cleanup function
    return () => masonryRef.current?.destroy?.();
  }, [works]);

  // 5) When columnWidth changes, tell Masonry & relayout
  useEffect(() => {
    if (!masonryRef.current || !columnWidth) return;

    const m = masonryRef.current!;
    m.options!.columnWidth = columnWidth;
    // m.options.transitionDuration = 300;

    // m.reloadItems?.();
    m.layout?.();
  }, [columnWidth]);

  return (
    <section className={`${styles.section} usection usection-spacing-lg`}>
      <div className={`${styles.container} umx`} style={{ paddingTop: "12px" }}>
        <div className={styles.grid} ref={gridRef}>
          {/* <div className={`${styles.gridSizer}`} ref={gridSizerRef} />
          <div className={`${styles.gutterSizer}`} ref={gutterSizerRef} /> */}
          {works.map((work, index) => (

            <GridItem columnWidth={columnWidth} work={work} index={index} key={index}/>




        
          ))}
        </div>
      </div>
    </section>
  );
}
