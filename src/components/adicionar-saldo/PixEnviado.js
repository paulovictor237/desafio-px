import Image from 'next/image';
import React, { useRef } from 'react';
import NumberFormat from 'react-number-format';
import ModalScreen from '../modal/ModalScreen';
import styles from './AddSaldoApp.module.scss';
import classes from './PixEnviado.module.scss';

export default function AdicionarSaldo({ modalIsOpen, setModalIsOpen, step, setStep }) {
  function closeModal() {
    setModalIsOpen(false);
    setStep(1);
  }
  return (
    <>
      <span className={styles['modal-title']}>

      </span>

      <span className={classes.closeButton} onClick={closeModal}>
        <Image className={styles.Image} width={50} height={50} src="/assets/icon-park-outline_close-small.svg" alt="outline_menu" />
      </span>

      <Image className={styles.Image} width={400} height={400} src="/assets/sign-up-okay 1.svg" alt="outline_menu" />
      <h1>O PIX foi pago com sucesso!</h1>
    </>

  )
}
