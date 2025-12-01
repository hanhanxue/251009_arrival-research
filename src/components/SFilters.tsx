import { SITE_DESCRIPTION } from "@/lib/constants";
import styles from "./SFilters.module.scss";
import { useState } from "react";

export default function SFilters() {
  return (
    <section className={`${styles.section} usection usection-spacing-sm`}>
      <div className={`${styles.container} ucontainer umx`}>
        <div className={styles.domains}>
          <div className={styles.filterTitle}>
            <h2>Domains</h2>
          </div>
          <ul className={styles.filterList}>
            <FilterItem defaultToggleState={true}>Design</FilterItem>
            <FilterItem>Engineering</FilterItem>
          </ul>
        </div>

        <div className={styles.categories}>
          <div className={styles.filterTitle}>
            <h2>Categories</h2>
          </div>
          <ul className={styles.filterList}>
            <FilterItem defaultToggleState={true}>Setup</FilterItem>
            <FilterItem>Model</FilterItem>
            <FilterItem>UI Animation</FilterItem>
          </ul>
        </div>

        <div className={styles.tags}>
          <div className={styles.filterTitle}>
            <h2>Tags</h2>
          </div>
          <ul className={styles.filterList}>
            <FilterItem defaultToggleState={true}>Simulation</FilterItem>
            <FilterItem defaultToggleState={true}>Algorithm</FilterItem>
            <FilterItem>Layout</FilterItem>
            <FilterItem>Animation</FilterItem>
          </ul>
        </div>

        <div className={styles.software}>
          <div className={styles.filterTitle}>
            <h2>Software</h2>
          </div>
          <ul className={styles.filterList}>
            <FilterItem defaultToggleState={true}>Houdini</FilterItem>
            <FilterItem>Blender</FilterItem>
            <FilterItem>Rhino</FilterItem>
          </ul>
        </div>

        <div className={styles.settings}>
          <div className={styles.filterTitle}>
            <h2>Settings</h2>
          </div>
          <ul className={styles.filterList}>
            <FilterItem defaultToggleState={true}>Dark Mode</FilterItem>
            <FilterItem>Extra Information</FilterItem>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FilterItem({
  children,
  defaultToggleState = false,
}: {
  children: React.ReactNode;
  defaultToggleState?: boolean;
}) {
  const [isActive, setIsActive] = useState(defaultToggleState);
  const toggle = () => setIsActive((prev) => !prev);

  return (
    <li
      className={`${styles.filterItem} ${isActive ? styles.active : ""}`}
      onClick={toggle}
    >
      <span className={styles.name}>{children}</span>
      <span className={styles.indicator}>
        (<span>{isActive ? "Y" : "N"}</span>)
      </span>
    </li>
  );
}
