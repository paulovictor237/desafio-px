import React, { useState } from 'react'
import styles from './HeaderSession.module.scss'

export default function HeaderSession() {
  const [aprovisionado, setAprovisionado] = useState(99700)
  const [disponivel, setDisponivel] = useState(35500)
  const [pendente, setpendente] = useState(35000)

  const converterValor = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor)
  }

  return (
    <>
      <h1 className={styles.title}>Crédito</h1>

      <div className={styles.card}>
        <h1>Saldo disponive:{' '}
          <strong className={styles.disponivel}>
            {converterValor(disponivel)}
          </strong>
        </h1>
        <div className={styles.cardInfo}>
          <p>Aprovisionado:{' '}
            <strong> {converterValor(aprovisionado)}</strong>
          </p>
          <p className={styles.pedente}>
            Dias Pendentes:{' '}
            <strong>{converterValor(pendente)}</strong>
          </p>
        </div>
      </div>

    </>
  )
}
