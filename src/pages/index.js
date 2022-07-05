import Head from 'next/head'
import Image from 'next/image'
import AsideMenu from '../components/aside-menu/AsideMenu.js'
import HeaderSession from '../components/header/HeaderSession.js'
import Table from '../components/table/Table.js'
import { MyContextProvider } from '../hooks/useCustomRootData.js'

export default function Home() {
  return (
    <MyContextProvider>
      <Head></Head>
      <HeaderSession />
      <Table />
      <AsideMenu />
    </MyContextProvider>
  )

}
