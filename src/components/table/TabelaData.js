import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCustomRootData } from '../../hooks/useCustomRootData';
import TabelaGenetaor from './TableGenerator';

export default function Table() {

  const { hello, tableData, tableHeader } = useCustomRootData()
  // console.log(hello)

  return (
    <TabelaGenetaor
      data={tableData}
      tableHeader={tableHeader}
    />
  )
}