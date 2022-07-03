import React, { useEffect, useState } from 'react';
import ModalScreen from '../modal/ModalScreen';
import AdicionarSaldo from './AdicionarSaldo';
import GerarQrCode from './GerarQrCode';
import PixEnviado from './PixEnviado';

export default function AddSaldoApp({ modalIsOpen, setModalIsOpen }) {
  const [step, setStep] = useState(1)

  useEffect(() => {
    if (modalIsOpen === false) {
      setStep(1)
    }
  }, [modalIsOpen])

  return (
    <ModalScreen
      name={'Adicionar Saldo'}
      modalIsOpen={modalIsOpen}
      setModalIsOpen={setModalIsOpen}
    >
      {step === 1 && <AdicionarSaldo
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        setStep={setStep}
        step={step}
      />}
      {step === 2 && <GerarQrCode
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        setStep={setStep}
        step={step}
      />}
      {step === 3 && <PixEnviado
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        setStep={setStep}
        step={step}
      />}
    </ModalScreen>
  )
}
