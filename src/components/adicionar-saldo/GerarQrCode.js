import Image from 'next/image';
import React, { useRef } from 'react';
import NumberFormat from 'react-number-format';
import ModalScreen from '../modal/ModalScreen';
import styles from './GerarQrCode.module.css';

export default function AdicionarSaldo({ modalIsOpen, setModalIsOpen, step, setStep }) {
  return (
    <>
      <ModalScreen
        name={'Adicionar Saldo'}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      >
        <h1>QRCode Gerado !</h1>
        <Image className={styles.Image} width={253} height={253} src="/assets/image 1.svg" alt="outline_menu" />

        <div className={styles['pix-gerar-qr-code']}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit rem facilis minus est praesentium.
          </p>
          <button>
            <Image className={styles.Image} width={22} height={22} src="/assets/icon-park-outline_copy.svg" alt="outline_menu" />
          </button>

        </div>

        <div className={styles.actions}>
          <button
            // onClick={() => { setModalIsOpen(false) }}
            onClick={() => { setStep(3) }}
          >
            Fechar
          </button>
        </div>
      </ModalScreen>
    </>

  )
}

