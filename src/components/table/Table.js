import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import AdicionarSaldo from '../adicionar-saldo/AdicionarSaldo';
import styles from './Table.module.css';

export default function Table() {
  const [data, setData] = useState([]);
  const getNBATeamData = async () => {
    const response = await axios.get('https://www.balldontlie.io/api/v1/teams');
    const data = await response.data.data;
    setData(data);
  };

  useEffect(() => {
    getNBATeamData();
  }, []);

  const colums = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "city", headerName: "city", width: 150 },
    { field: "abbreviation", headerName: "Abbreviations", width: 150 },
    { field: "conference", headerName: "Conferehce", width: 150 },
    { field: "division", headerName: "division", width: 150 },
  ]

  const rows = data.map(row => ({
    id: row.id,
    abbreviation: row.abbreviation,
    city: row.city,
    conference: row.conference,
    division: row.division
  }))

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className={styles.container}>

      <div className={styles['top-itens']}>
        <div className={styles.pesquisa}>
          <input
            className={styles.input}
            type="text"
            placeholder="Pesquisar"
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Pesquisar Data"
          />
        </div>
        <button onClick={() => { setModalIsOpen(true) }}>
          Adicionar Saldo
        </button>

        <AdicionarSaldo
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />


      </div>

      <span className={styles.table}>
        <DataGrid
          rows={rows}
          columns={colums}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 30]}
        />
      </span>


    </div>
  )
}