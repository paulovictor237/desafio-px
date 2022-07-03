import React, { useRef } from 'react';
import ModalScreen from '../modal/ModalScreen';
import styles from './AdicionarSaldo.module.css';

export default function AdicionarSaldo({ modalIsOpen, setModalIsOpen }) {
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

        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor="cars">Forma de pagamento:</label>
            <select id="cars">
              <option label="Pix">Pix</option>
              <option label="Outros">Outros</option>
            </select>
          </div>
          <div className={styles.control}>
            <label htmlFor='title'>Valor</label>
            <input
              placeholder=""
              type='text' required id='title' ref={titleInputRef} />
          </div>
          <div className={styles.actions}>
            <button>Add Meetup</button>
          </div>

        </form>

        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(4500)}


        </strong>

        <button onClick={() => { setModalIsOpen(false) }}>close</button>
      </ModalScreen>
    </>

  )
}
