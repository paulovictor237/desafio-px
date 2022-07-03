import React, { useRef } from 'react';
import NumberFormat from 'react-number-format';
import ModalScreen from '../modal/ModalScreen';
import styles from './AddSaldoApp.module.scss';
import classes from './AdicionarSaldo.module.scss';

export default function AdicionarSaldo({ modalIsOpen, setModalIsOpen, step, setStep }) {
  const formRef = useRef();
  const paymentType = useRef();
  const paymentValue = useRef();

  function submitHandler(event) {
    setStep(2)
    event.preventDefault();

    const enteredPaymentType = paymentType.current.value;
    const enteredValue = paymentValue.current.value;

    console.log(enteredPaymentType, enteredValue);

  }

  return (
    <>
      <span className={styles['modal-title']}>
        Adicionar Saldo
      </span>
      <form
        className={classes.form}
        onSubmit={submitHandler}
        id="myform" method="get"
        ref={formRef}
      >
        <div className={styles.control}>
          <label htmlFor="payment">Forma de pagamento:</label>
          <select id="payment" ref={paymentType}>
            <option label="Pix">Pix</option>
            <option label="Outros">Outros</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor='value'>Valor</label>
          {/* <input type='text' required id='title' ref={titleInputRef} /> */}
          <NumberFormat
            type='text' required id='value'
            ref={paymentValue}
            onValueChange={(values) => {
              const { formattedValue, value, floatValue } = values;
              paymentValue.current.value = floatValue
            }}
            thousandSeparator="."
            decimalSeparator=","
            allowNegative={false}
            prefix="R$ "
          />
        </div>
      </form>
      <div className={styles.actions}>
        <button
          onClick={() => { setModalIsOpen(false) }}
          className={styles.voltar}>
          Voltar
        </button>

        <button type="submit" form="myform" value="Update">
          Gerar QRCode
        </button>

      </div>
    </>

  )
}

