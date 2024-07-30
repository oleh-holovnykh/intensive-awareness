import React from 'react';
// import { Link } from 'react-router-dom';

export const Info: React.FC = () => {
  return (
    <div className='text-left whitespace-normal break-words max-w-300 w-max mt-2 mx-auto text-gray-600 break-all'>
      <a
        href="https://docs.google.com/document/d/1qj1bdFO7zWb5vDIUQsv_YFdyOACcifIfEW0x2wcSNnw/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Відкрити розклад у Google Docs
      </a>
    </div>
      
    
    // <div className='text-left whitespace-normal break-words max-w-300 w-max mt-2 mx-auto text-gray-600 break-all'>
    //   <h4><b>2 серпня</b></h4>
    //   <p>12:00 – 15:30 Заїзд, поселення</p>
    //   <p>15:30 – 16:15 Оплата інтенсиву</p>
    //   <p>16:30 – 18:00 Відкриття інтенсиву</p>
    //   <p>18:00 – 19:00 Вечеря</p>
    //   <p>19:00 – 21:00 Робота в групах (клієнтська/супервізійна)</p>
    //   <br />
    //   <h4><b>3, 4 та 5 серпня</b></h4>
    //   <p>7:30 – 8:30 Ранкова медитація</p>
    //   <p>9:00 – 10:00 Сніданок</p>
    //   <p>10:00 – 12:30 Розстановки</p>
    //   <p>12:45 – 13:45 Сесія у клієнтів 1</p>
    //   <p>14:00 – 15:05 Обід/вільний час</p>
    //   <p>15:05 – 16:05 Сесія у клієнтів 2</p>
    //   <p>16:15 – 19:00 Клієнтська/Супервізійна група</p>
    //   <p>19:00 – 20:00 Вечеря</p>
    //   <p>20:00 – 21:30 Вечірня практика</p>
    //   <br />
    //   <h4><b>6 серпня (вихідний)</b></h4>
    //   <p>9:00 – 10:00 Сніданок</p>
    //   <p>10:00 – 14:00 Вільний час</p>
    //   <p>14:00 – 15:00 Обід</p>
    //   <p>15:00 – 17:15 Вільний час</p>
    //   <p>17:30 – 19:00 Загальний груповий процес</p>
    //   <p>19:00 – 20:00 Вечеря</p>
    //   <p>20:00 – 22:00 Вечір біля вогнища/Вільний час</p>
    //   <br />
    //   <h4><b>7, 8 серпня</b></h4>
    //   <p>7:30 – 8:30 Ранкова медитація</p>
    //   <p>9:00 – 10:00 Сніданок</p>
    //   <p>10:00 – 12:30 Розстановки</p>
    //   <p>12:45 – 13:45 Сесія у клієнтів 1</p>
    //   <p>14:00 – 15:05 Обід/вільний час</p>
    //   <p>15:05 – 16:05 Сесія у клієнтів 2</p>
    //   <p>16:15 – 19:00 Клієнтська/Супервізійна група</p>
    //   <p>19:00 – 20:00 Вечеря</p>
    //   <p>20:00 – 21:30 Вечірня практика</p>
    //   <br />
    //   <h4><b>9 серпня</b></h4>
    //   <p>7:30 – 8:30 Ранкова медитація</p>
    //   <p>9:00 – 10:00 Сніданок</p>
    //   <p>10:00 – 11:00 Сесія у клієнтів 1</p>
    //   <p>11:10 – 12:10 Сесія у клієнтів 2</p>
    //   <p>12:30 – 14:00 Обід</p>
    //   <p>14:00 – 16:30 Клієнтська/Супервізійна група</p>
    //   <p>16:45 – 18:00 Завершення інтенсиву</p>
    // </div>
    // <div className='text-left whitespace-normal break-words max-w-300 w-max mt-2 mx-auto text-gray-600 break-all'>
    //   <div className='ml-2'>
    //     <div className='mb-2'>
    //       <strong>💳Вартість інтенсиву при передплаті:</strong>
    //       <br />
    //       до 1.04 — €200
    //       <br />
    //       до 1.06 — €250
    //       <br />
    //       до 1.08 — €300
    //       <br />
    //       Передплата: €50 <Link to='/payment' className="text-blue-500 underline hover:text-blue-700">показати реквізити</Link>
    //     </div>

    //     <div className='mb-4'>
    //       <strong>🍛️ Харчування:</strong> <br />
    //       5900 грн <br /> (триразове вегетаріанське)
    //     </div>
    //     <div>
    //       <div className='mb-2'>
    //         <strong>🏡 Проживання:</strong>
    //         <table>
    //           <thead>
    //             <tr className='text-center'>
    //               <th>Місце</th>
    //               <th className='w-32'>Вільних місць</th>
    //               <th className='w-32'>Вартість</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr className='text-left bg-gray-100'>
    //               <td>Готель 2-х</td>
    //               <td>1</td>
    //               <td>4900</td>
    //             </tr>
    //             <tr className='text-left'>
    //               <td>Готель 3-х</td>
    //               <td>0</td>
    //               <td>4200</td>
    //             </tr>
    //             <tr className='text-left bg-gray-100'>
    //               <td>Новий корпус (2-х місні)</td>
    //               <td>2</td>
    //               <td>3850</td>
    //             </tr>
    //             <tr className='text-left'>
    //               <td>
    //                 "Будинок рибалки"
    //                 <br /> (4-х місні, 2-х місний)
    //               </td>
    //               <td>9</td>
    //               <td>3500</td>
    //             </tr>
    //             <tr className='text-left bg-gray-100'>
    //               <td>Хостел</td>
    //               <td>9</td>
    //               <td>2800</td>
    //             </tr>
    //             <tr className='text-left'>
    //               <td>Палатка</td>
    //               <td>2</td>
    //               <td>1750</td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //     <span className='bg-yellow-100 whitespace-normal break-words'> Доплата за інтенсив/проживання/харчування</span> <br />
    //     <span className='bg-yellow-100 whitespace-normal break-words'> готівкою або на <Link to='/payment' className="text-blue-500 underline hover:text-blue-700">ФОП</Link> до 2 серпня</span><br />
    //   </div>
    // </div>
  );
};
