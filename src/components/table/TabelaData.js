import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCustomRootData } from '../../hooks/useCustomRootData';
import TabelaGenetaor from './TableGenerator';

export default function Table() {

  const { tableHeader, tableData } = useCustomRootData()

  return (
    <TabelaGenetaor
      data={tableData.data}
      tableHeader={tableHeader}
    />
  )
}