import Image from 'next/image';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useCustomRootData } from '../../hooks/useCustomRootData';
import styles from './TableGenerator.module.scss';

export default function Table({ data, tableHeader }) {
  const { tableData, setTableData } = useCustomRootData();

  const switchColor = (color) => {
    switch (color) {
      case 'Southeast':
        return '#8be9fd';
      case 'Atlantic':
        return '#50fa7b';
      case 'Central':
        return '#ffb86c';
      case 'Northwest':
        return '#ff79c6';
      case 'Pacific':
        return '#bd93f9'
      case 'Southwest':
        return '#ff5555';
      default:
        return '#f1fa8c';
    }
  }

  const [order, setOrder] = useState({ estado: true, modulo: '' });

  const handlerSort = (a) => {
    const changeOrder = order.modulo === a ? (!order.estado) : true;
    setTableData({ type: 'sort', prop: a, order: changeOrder });
    setOrder({ estado: changeOrder, modulo: a })
    console.log(order)
  }

  return (
    <span className={styles.table}>
      <table stylesheet={3500}>
        <thead>
          <tr>
            {tableHeader.map((a, i, row) =>
              <th key={uuidv4()}>
                <div className={styles.item}>
                  {a}
                  {(i + 1 !== row.length) &&
                    <div className={styles.Image} onClick={() => handlerSort(a)}>
                      <Image
                        alt="Sort"
                        src='/assets/Sort.svg'
                        width={8} height={20} objectFit="cover"
                      />
                    </div>
                  }
                </div>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.city}</td>
              <td>{row.abbreviation}</td>
              <td>{row.conference}</td>
              <td> <div className={styles.tagColored} style={{ backgroundColor: switchColor(row.division) }}>{row.division}</div></td>
              <td>{
                <div className={styles.item} style={{ justifyContent: 'flex-end' }}>
                  <Image
                    alt="icon-park-outline_copy"
                    src='/assets/icon-park-outline_copy_black.svg'
                    width={25} height={25} objectFit="cover"
                  />
                  <Image
                    alt="icon-park-outline_pay-code-one"
                    src='/assets/icon-park-outline_pay-code-one.svg'
                    width={25} height={25} objectFit="cover"
                  />
                </div>
              }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </span>
  )
}