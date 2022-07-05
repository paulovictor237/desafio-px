import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TabelaGenetaor from './TableGenerator';
export default function Table() {

  const [data, setData] = useState([]);
  const getNBATeamData = async () => {
    const response = await axios.get('https://www.balldontlie.io/api/v1/teams');
    const data = await response.data.data.slice(1, 5);
    setData(data);
  };

  useEffect(() => {
    getNBATeamData();
  }, []);

  const tableHeader = ['ID', 'City', 'Abbreviation', 'Conference', 'Division', '']

  // const tableHeader = ['ID', 'Destino', 'Valor', 'Solicitação', 'Forma pgto.', 'Vencimento', 'Status']

  // const data = [
  //   {
  //     ID: 4145,
  //     Destino: 'Despesa',
  //     Valo: '50',
  //     Solicitação: new Data('28/02/2022 23:30'),
  //     FormaPgto: 'PIX/Ted',
  //     Vencimento: new Data("28/02/2022"),
  //     Status: "Em Pagamento"
  //   }
  // ]

  return (
    <TabelaGenetaor
      data={[...data]}
      tableHeader={tableHeader}
    />
  )
}