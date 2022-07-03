import Image from 'next/image'
import React from 'react'
import styles from './AsideMenu.module.scss'

export default function AsideMenu() {
  return (
    <aside className={styles.container}>

      <div className={styles.topMenu}>
        <Image className={styles.Image} width={35} height={35} src="/assets/icon-park-outline_menu.svg" alt="outline_menu" />
        <Image className={styles.Image} width={35} height={35} src="/assets/Avatar (silhouette).svg" alt="outline_menu" />
      </div>

      <div className={styles.midleMenu}>
        <Image className={styles.Image} width={35} height={35} src="/assets/money.svg" alt="outline_menu" />
      </div>

      <div className={styles.bottonMenu}>
        <Image className={styles.Image} width={35} height={35} src="/assets/log-out.svg" alt="outline_menu" />
      </div>


    </aside>
  )
}
