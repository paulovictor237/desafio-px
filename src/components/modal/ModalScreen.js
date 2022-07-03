import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './ModalScreen.module.scss';

Modal.setAppElement('#__next');
// Modal.setAppElement('#root');

export default function ModalScreen({ children, modalIsOpen, setModalIsOpen, name, ...props }) {

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={styles.container}>
      <Modal
        className={styles['modal-content']}
        overlayClassName={styles['modal-overLay']}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        {...props}
      >
        {children}
      </Modal>
    </div>
  )
}
