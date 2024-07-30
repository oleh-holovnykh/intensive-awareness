import React from 'react';
import ie from '../../data/individualEntrepreneur.json';
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

  return (
    <div className='text-left w-max mt-2 mx-auto text-gray-600 break-all'>
      <div className='ml-2'>
        <div className='mb-2'>
        <strong>
          поточний курс продажу євро: 
          <span className='bg-yellow-100 p-1 rounded'>{euroRate!.rateSell}</span>
        </strong>
        </div>
        🔥 Сплата тільки з приватної картки від приватної особи.<br />
        🔥 Важливо правильно вказати призначення платежу<br />
        🧾 Після оплати, будь ласка, пришліть скріншот <br /> квитанції <a className="text-blue-600 hover:underline" target="_blank" href="https://t.me/oleh_holovnykh">t.me/oleh_holovnykh</a> <br /><br />
        <p className='bg-yellow-100 p-2 inline-block'>Реквізити:</p>
        <br />
        {ie.recipient} 
        <br />
        IBAN: {ie.iban} 
        <br />
        ІПН/ЄДРПОУ: {ie.id} 
        <br />
        Акціонерне товариство: {ie.bank} 
        <br />
        МФО: {ie.mfo} 
        <br />
        ОКПО Банку: {ie.okpo}
        <br />
        <br />
        🔸Призначення платежу:
        <br />
        {`"Консультаційні послуги 02-09.08"`}
        <br />
        <br />
        
        
      </div>
    </div>
  );
};

export default Payment;
