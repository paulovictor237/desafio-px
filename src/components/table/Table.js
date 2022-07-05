import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import AddSaldoApp from '../adicionar-saldo/AddSaldoApp';
import TabelaData from './TabelaData';
import styles from './Table.module.scss';
import TableGenerator from './TableGenerator';

export default function Table() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <AddSaldoApp
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <div className={styles.container}>

        <div className={styles['top-itens']}>
          <div className={styles.pesquisa}>
            <div className={styles.inputSearch}>
              <input type="text" placeholder="Pesquisar" />
              <Image className={styles.Image} width={35} height={35} src="/assets/icon-park-outline_search.svg" alt="outline_menu" />
            </div>
            <div className={styles.inputSearch}>
              <input type='text' placeholder="Pesquisar data" />
              <Image className={styles.Image} width={35} height={35} src="/assets/akar-icons_calendar.svg" alt="outline_menu" />
            </div>
          </div>

          <button
            onClick={() => { setModalIsOpen(true) }}>
            Adicionar saldo
          </button>
        </div>

        {/* <TableGenerator /> */}
        <TabelaData />

        <div className={styles.pages}>
          <Image
            alt="Pagination-Left"
            src='/assets/Pagination-Left.svg'
            width={35}
            height={35}
            objectFit="cover"
          />
          <button className={styles.selected}>01</button>
          <button>02</button>
          <Image
            alt="Pagination-Right"
            src='/assets/Pagination-Right.svg'
            width={35}
            height={35}
            objectFit="cover"
          />
        </div>

      </div>
    </>
  )
}