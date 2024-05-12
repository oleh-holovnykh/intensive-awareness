import React from 'react';

const Contacts: React.FC = () => {
  return (
    <div className='text-left w-max mt-2 mx-auto text-gray-600 whitespace-normal break-words'> 
      <div className='ml-2'>
        <strong>Форма реєстрації:</strong><br />
        <a target='blank' 
          className='text-blue-600 underline hover:text-blue-700' 
          href="https://forms.gle/VLhd8U4JBsQf3DpJ8"
        >
          https://forms.gle/VLhd8U4JBsQf3DpJ8
        </a> <br /> <br />
        <strong>Cторінка події на facebook:</strong><br />
        <a target='blank' 
          className='text-blue-600 underline hover:text-blue-700' 
          href="https://www.facebook.com/events/7409547065731608"
        >
          https://www.facebook.com/events/7409547065731608
        </a> <br /> <br />
        <strong>Організатор:</strong> <br />
          +380637009794 Олег<br />
            <a
              target='blank' 
              className='text-blue-600 underline hover:text-blue-700' 
              href="https://t.me/oleh_holovnykh">
                @oleh_holovnykh
            </a> (telegram) 
            <br /> <br />
        <strong>Місце:</strong> <br />
        Трипілля, ретритний центр "Відкрите небо", 40 хв від м. Видубичі<br />
        <a
          target='blank' 
          className='text-blue-600 underline hover:text-blue-700' 
          href="http://openskyretreat.com.ua/">
            http://openskyretreat.com.ua/
        </a> <br />
        <a
          target='blank' 
          className='text-blue-600 underline hover:text-blue-700' 
          href="https://maps.app.goo.gl/9VBWnWeXQ3MsvnVc6">
            https://maps.app.goo.gl/9VBWnWeXQ3MsvnVc6
        </a> <br />
        <i>бронювання проживання через організатора</i> <a
          target='blank' 
          className='text-blue-600 underline hover:text-blue-700 italic' 
          href="https://t.me/oleh_holovnykh">
            @oleh_holovnykh
        </a> <i>(telegram)</i>
      </div>
    </div> 
  )
}

export default Contacts
