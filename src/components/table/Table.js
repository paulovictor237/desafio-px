import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useCustomRootData } from '../../hooks/useCustomRootData';
import AddSaldoApp from '../adicionar-saldo/AddSaldoApp';
import TabelaData from './TabelaData';
import styles from './Table.module.scss';

export default function Table() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { tableData, setTableData } = useCustomRootData()

  const [pages, setPages] = useState([])

  useEffect(() => {
    setPages(Array.from({ length: tableData.maxPages + 1 }, (_, i) => i + 1));
  }, [tableData.maxPages])


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

        <TabelaData />

        <div className={styles.pages}>
          <Image className={styles.Image}
            alt="Pagination-Left"
            src='/assets/Pagination-Left.svg'
            width={35}
            height={35}
            objectFit="cover"
            onClick={() => setTableData({ type: 'decrement' })}
          />

          {pages.map(page => (
            <button
              className={page === tableData.page + 1 && styles.selected}
              onClick={() => setTableData({ type: 'jumpToPage', page: (page - 1) })}
              key={page}
            >
              {page < 10 ? '0' + page : page}
            </button>
          ))}

          <Image className={styles.Image}
            alt="Pagination-Right"
            src='/assets/Pagination-Right.svg'
            width={35}
            height={35}
            objectFit="cover"
            onClick={() => setTableData({ type: 'increment' })}
          />
        </div>

      </div>
    </>
  )
}