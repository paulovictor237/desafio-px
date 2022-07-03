import Image from 'next/image';
import React, { useRef } from 'react';
import NumberFormat from 'react-number-format';
import ModalScreen from '../modal/ModalScreen';
import styles from './AddSaldoApp.module.scss';
import classes from './GerarQrCode.module.scss';



export default function AdicionarSaldo({ modalIsOpen, setModalIsOpen, step, setStep }) {
  const pixCodec = useRef(null);
  return (
    <>
      <span className={styles['modal-title']}>
        QRCode
      </span>
      <h1>QRCode Gerado !</h1>
      <Image className={classes.Image} width={253} height={253} src="/assets/image 1.svg" alt="outline_menu" />

      <div className={classes['pix-gerar-qr-code']}>
        <p ref={pixCodec}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit rem facilis minus est praesentium.
        </p>
        <button onClick={
          () => {
            console.log(pixCodec.current.innerText);
            const pixCopy = (pixCodec.current.innerText);
            navigator.clipboard.writeText(pixCopy);
          }
        }>
          <Image className={classes.Image} width={22} height={22} src="/assets/icon-park-outline_copy.svg" alt="outline_menu" />
        </button>

      </div>

      <div className={styles.actions}>
        <button
          // onClick={() => { setModalIsOpen(false) }}
          onClick={() => setStep(3)}
        >
          Fechar
        </button>
      </div>
    </>

  )
}

