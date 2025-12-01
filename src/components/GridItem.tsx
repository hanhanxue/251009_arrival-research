import styles from "./GridItem.module.scss"
import { WorkItem } from "./SMainGridA";
import UIButton from "./UIButton";
import Image from "next/image";


export default function GridItem(
    { columnWidth,
        work, 
        index }: 
        { columnWidth: number; 
            work: WorkItem; 
            index: number }) {
  return (
    <div
              className={styles.gridItem}
              data-masonry-item
              key={index}
              style={{ width: `${columnWidth}px` }}
            >

  
              <div
                className={styles.imageContainer}
                style={{ aspectRatio: work.aspectRatio }}
          
              >

                {!work.hidden && (
                    

                    work.video ? (
                        <video
                          src={work.videoSrc}
                          autoPlay={true}
                          loop={true}
                          muted={true}
                          playsInline={true}
                          preload="auto"
                        />
                      ) : (
                        <Image src={work.src} fill={true} alt="" />
                      )
                



                )}

  



<div className={styles.overlaysContainer}>
<div className={styles.overlayBackground}></div>

                <div className={styles.overlayContent}>
                  <div className={styles.overlayContentBottom}>


                          <UIButton>Project Files</UIButton>
                          
                          </div>
                </div>
 
        
              </div>


              </div>
              <div className={styles.infoContainer}>
                <div className={styles.infoContainerLeft}>
                <div className={styles.title}>{work.title}</div>
                <div className={styles.tags}>{work.tags.join(", ")}</div>
                </div>
                  <div className={styles.infoContainerRight}>
                  <div className={styles.index}>{index + 1001}</div>

                  </div>
        
        
              </div>
            </div>
  )
}