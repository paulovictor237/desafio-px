import Image from 'next/image';
import { default as React, useRef } from 'react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import { v4 as uuidv4 } from 'uuid';
import styles from './AddSaldoApp.module.scss';
import classes from './GerarQrCode.module.scss';



export default function AdicionarSaldo({ modalIsOpen, setModalIsOpen, step, setStep }) {
  const pixCodec = useRef(null);
  // ReactDOM.render(<QRCode value="hey" />, document.getElementById("Container"));
  const valorQrCode = uuidv4().toString()
  return (
    <>
      <span className={styles['modal-title']}>
        QRCode
      </span>
      <h1 style={{ color: 'var(--fontBlack)' }}>
        QRCode Gerado!
      </h1>

      {/* <Image className={classes.Image} width={253} height={253} src="/assets/image 1.svg" alt="outline_menu" /> */}
      <div style={{ background: 'white', padding: '5px' }}>
        <QRCode value={valorQrCode} size={200} />
      </div>

      <div className={classes['pix-gerar-qr-code']}>
        <p ref={pixCodec}>
          {valorQrCode}
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit rem facilis minus est praesentium. */}
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
        <button style={{ width: '80%' }}
          // onClick={() => { setModalIsOpen(false) }}
          onClick={() => setStep(3)}
        >
          Fechar
        </button>
      </div>
    </>

  )
}

