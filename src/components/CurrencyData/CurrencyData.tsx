import React from 'react';
import useCurrencyData from '../../hooks/useCurrencyData';


const CurrencyData: React.FC = () => {
  const { euroRate, loading, error } = useCurrencyData();
  if (loading) {
    return <div className='text-center'>Завантаження даних...</div>;
  }
  
  if (error !== null) {
    return (
      <div exchange-container>
        Помилка при завантажені данних: {error.message}.{' '}
        <a
          href='https://minfin.com.ua/ua/company/monobank/currency/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-blue-700 underline'
        >
          Подивитись поточний курс Монобанку на сайті minfin.com.ua
        </a>
      </div>
    );
  }

  return (
  <div className='mb-2 bg-slate-800 text-white flex justify-center items-center'>
    <table className='border-separate border-spacing-x-2'>
      <tbody>
        <tr>
          <td>EUR (monobank)</td>
          <td>{euroRate?.rateSell}</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default CurrencyData;
