import React from 'react';
import { Link } from 'react-router-dom';

export const Info: React.FC = () => {
  return (
    <div className='text-left break-words max-w-300 w-max mt-2 mx-auto text-gray-600 break-all'>
      <div className='ml-2'>
        <div className='mb-2'>
          <strong>💳Вартість інтенсиву при передплаті:</strong>
          <br />
          до 1.04 — €200
          <br />
          до 1.06 — €250
          <br />
          до 1.08 — €300
          <br />
          Передплата: €50 <Link to='/payment' className="text-blue-500 underline hover:text-blue-700">показати реквізити</Link>
        </div>

        <div className='mb-4'>
          <strong>🍛️ Харчування:</strong> <br />
          5900 грн <br /> (триразове вегетаріанське)
        </div>
        <div>
          <div className='mb-2'>
            <strong>🏡 Проживання:</strong>
            <table>
              <thead>
                <tr className='text-center'>
                  <th>Місце</th>
                  <th className='w-32'>Вільних місць</th>
                  <th className='w-32'>Вартість</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-left bg-gray-100'>
                  <td>Готель 2-х</td>
                  <td>1</td>
                  <td>4900</td>
                </tr>
                <tr className='text-left'>
                  <td>Готель 3-х</td>
                  <td>0</td>
                  <td>4200</td>
                </tr>
                <tr className='text-left bg-gray-100'>
                  <td>Новий корпус (2-х місні)</td>
                  <td>0</td>
                  <td>3850</td>
                </tr>
                <tr className='text-left'>
                  <td>
                    "Будинок рибалки"
                    <br /> (4-х місні, 2-х місний)
                  </td>
                  <td>9</td>
                  <td>3500</td>
                </tr>
                <tr className='text-left bg-gray-100'>
                  <td>Хостел</td>
                  <td>9</td>
                  <td>2800</td>
                </tr>
                <tr className='text-left'>
                  <td>Палатка</td>
                  <td>2</td>
                  <td>1750</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <span className='bg-yellow-100 break-words'> Доплата за інтенсив/проживання/харчування</span> <br />
        <span className='bg-yellow-100 break-words'> готівкою або на <Link to='/payment' className="text-blue-500 underline hover:text-blue-700">ФОП</Link> до 2 серпня</span><br />
      </div>
    </div>
  );
};
