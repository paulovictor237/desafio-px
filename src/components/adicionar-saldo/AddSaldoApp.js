import React, { useState } from 'react';
import AdicionarSaldo from './AdicionarSaldo';
import GerarQrCode from './GerarQrCode';
import PixEnviado from './PixEnviado';

export default function AddSaldoApp({ modalIsOpen, setModalIsOpen }) {
  const [step, setStep] = useState(1)
  return (
    <>

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
    </>
  )
}
