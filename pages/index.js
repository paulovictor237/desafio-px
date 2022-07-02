import Head from 'next/head'
import Image from 'next/image'
import AsideMenu from '../components/aside-menu/AsideMenu.js'
import HeaderSession from '../components/header/HeaderSession.js'
import Table from '../components/Table'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head></Head>
      <HeaderSession />
      <Table />
      <AsideMenu />
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </>
  )

}
