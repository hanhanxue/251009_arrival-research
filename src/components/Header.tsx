import Link from "next/link"
import { SITE_NAME, NAVIGATION } from "@/lib/constants"
import styles from "./Header.module.scss"

import ICO_Arrival from "./iconography/ICO_Arrival"
import XLink from "./XLink"

export default function Header() {
  return (
    <header
      className={`
    ${styles.section} usection`}
    >
      <div className={`${styles.container} ucontainer umx`}>
        <div className={`${styles.groupA}`}>
          {/* <ICO_Arrival /> */}
       
          <XLink
            href="/"
            target="_blank"
            rel="noopener"
            style="secondary"
          >
            A.R.C.
          </XLink>
        </div>
        {/* <div className={`${styles.groupB}`}><ICO_Arrival /></div> */}
        {/* <div className={`${styles.groupC}`}>
          Creative office for advanced industry
        </div> */}
        <div className={`${styles.groupD}`}>
          <XLink
            href="https://www.arrival.works/"
            target="_blank"
            rel="noopener"
          >
            Arrival<sup>↗</sup>
          </XLink>

          {/* <XLink href="mailto:mail@arrival.works">Contact</XLink> */}
        </div>
      </div>
    </header>
  )
}
