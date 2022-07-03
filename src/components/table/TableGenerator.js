import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import styles from './TableGenerator.module.scss';

export default function Table({ data, tableHeader }) {
  // const entries = Object.entries(person);
  // const propertyNames = Object.keys(person);
  // const propertyValues = Object.values(person);
  return (
    <span className={styles.table}>
      <table stylesheet={3500}>
        <thead>
          <tr>
            {tableHeader.map((a, i, row) =>
              <th key={uuidv4()}>
                <div className={styles.item}>
                  {a}
                  {(i + 1 !== row.length) && <Image
                    alt="Sort"
                    src='/assets/Sort.svg'
                    width={8} height={20} objectFit="cover"
                  />}
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
              <td>{row.division}</td>
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