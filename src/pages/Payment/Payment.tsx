import React from 'react';
import { CopyButton } from '../../components/CopyButton';
import ie from '../../data/individualEntrepreneur.json';
import CurrencyData from '../../components/CurrencyData/CurrencyData';
import useCurrencyData from '../../hooks/useCurrencyData';

const Payment: React.FC = () => {
  const { euroRate, loading, error } = useCurrencyData();
  
  if (loading) {
    return <div className='text-center'>Завантаження даних...</div>;
  }
  
  if (error !== null) {
    return (
      <div exchange-container>
        Помилка при завантажені данних: {error.message}
      </div>
    );
  }

  const sum = euroRate!.rateSell * 50;

  return (
    <div className='text-left w-max mt-2 mx-auto text-gray-600'>
      <CurrencyData />
      <div className='mb-2'>
        Cума: {sum}
      </div>
      <p className='bg-yellow-100 p-2 inline-block'>Реквізити:</p>
      <br />
      {ie.recipient} <CopyButton value={ie.recipient} />
      <br />
      IBAN: {ie.iban} <CopyButton value={ie.iban} />
      <br />
      ІПН/ЄДРПОУ: {ie.id} <CopyButton value={ie.id} />
      <br />
      Акціонерне товариство: {ie.bank} <CopyButton value={ie.bank} />
      <br />
      МФО: {ie.mfo} <CopyButton value={ie.mfo} />
      <br />
      ОКПО Банку: {ie.okpo} <CopyButton value={ie.okpo} />
      <br />
      <br />
      🔸Призначення платежу:
      <br />
      {`"Консультаційні послуги 02-09.08"`}
      <br />
      <br />
      🔥Важливо вказати призначення платежу
      <br />
      🔥Важливо, щоб платіж був від фізособи.
      <br />А не від ФОП, чи організації
      <br />
      <br />
    </div>
  );
};

export default Payment;
