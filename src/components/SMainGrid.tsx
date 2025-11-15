"use client"

import { useEffect, useState, useRef } from 'react';

import styles from "./SMainGrid.module.scss";
// import works from "/works/_index.json"

import { Masonry } from 'masonic'
import Image from 'next/image';

interface WorkItem {
  src: string;
  aspectRatio: number;
  title: string;
  tags: string[];
  video: boolean;
  videoSrc: string;
}

export default function SMainGrid() {

    const [works, setWorks] = useState<WorkItem[]>([]);

    useEffect(() => {
      fetch("/works/_index.json")
        .then(res => res.json())
        .then(data => setWorks([...data].reverse()));
    }, []);



  return (
<section className={`${styles.section} usection`}>
  <div className={`${styles.container} umx`}
  style={{paddingTop: "12px"}}>

<Masonry 
items={works} 
columnGutter={12}
rowGutter={12}
columnWidth={320}
overscanBy={5}
render={MasonryItem} />

  </div>
</section>
  );
}

const MasonryItem = ({ data, index }: { data: WorkItem; index: number }) => {


    return (
        <div className={styles.item} key={index}>

        <div className={styles.imageContainer} style={{aspectRatio: data.aspectRatio }} key={index}>
          {data.video ? (
            <video 
              src={data.videoSrc} 
              autoPlay={true} 
              loop={true} 
              muted={true} 
              playsInline={true}
              preload="auto"
            />
          ) : (
            <Image src={data.src} fill={true} alt=""  /> 
          )}
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.title}>{data.title}</div>
                <div className={styles.tags}>{data.tags.join(", ")}</div>
            </div>
        
            </div>
    )
}