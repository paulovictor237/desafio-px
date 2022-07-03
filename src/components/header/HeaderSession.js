import React from 'react'
import styles from './HeaderSession.module.css'

export default function HeaderSession() {
  return (
    <>
      <h1 className={styles.title}>Crédito</h1>

      <div className={styles.card}>
        <h1>Saldo disponivel:
          <span className={styles.disponivel}> R$ 35.500,00</span>
        </h1>
        <div className={styles.cardInfo}>
          <p>Aprovisionado: R$ 99.700,00</p>
          <p className={styles.pedente}>
            Dias Pendentes:
            <strong> R$ 35.00,00</strong>
          </p>
        </div>
      </div>

    </>
  )
}
