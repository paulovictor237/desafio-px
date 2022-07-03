import React, { useRef } from 'react';
import NumberFormat from 'react-number-format';
import ModalScreen from '../modal/ModalScreen';
import styles from './AddSaldoApp.module.scss';
import classes from './AdicionarSaldo.module.scss';

export default function AdicionarSaldo({ modalIsOpen, setModalIsOpen, step, setStep }) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <>
      <ModalScreen
        name={'Adicionar Saldo'}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      >

        <form className={classes.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor="cars">Forma de pagamento:</label>
            <select id="cars">
              <option label="Pix">Pix</option>
              <option label="Outros">Outros</option>
            </select>
          </div>
          <div className={styles.control}>
            <label htmlFor='title'>Valor</label>
            {/* <input type='text' required id='title' ref={titleInputRef} /> */}
            <NumberFormat
              type='text' required id='title'
              ref={titleInputRef}
              // onValueChange={values => {
              //   onChange({
              //     target: {
              //       value: values.value,
              //     },
              //   });
              // }}
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
          <button onClick={() => { setStep(2) }}
          >Gerar QRCode</button>
        </div>
      </ModalScreen>
    </>

  )
}

