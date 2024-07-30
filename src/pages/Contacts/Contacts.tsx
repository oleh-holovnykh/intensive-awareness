import React from 'react';

const Contacts: React.FC = () => {
  return (
    <div className='text-left w-max mt-2 mx-auto text-gray-600 whitespace-normal break-words'> 
      <div className='ml-2'>
        <strong>Точка бази в Google maps:</strong> <br />
        <a
          target='blank' 
          className='text-blue-600 underline hover:text-blue-700' 
          href="https://maps.app.goo.gl/9VBWnWeXQ3MsvnVc6">
            https://maps.app.goo.gl/9VBWnWeXQ3MsvnVc6
        </a> <br /><br />
        <strong>Організатор:</strong> <br />
          +380637009794 Олег<br />
            <a
              target='blank' 
              className='text-blue-600 underline hover:text-blue-700' 
              href="https://t.me/oleh_holovnykh">
                @oleh_holovnykh
            </a> (telegram) <br /><br />
            <strong>Адміністратор бази:</strong> <br />
            +380676123216 Бхакти<br />
            <a
              target='blank' 
              className='text-blue-600 underline hover:text-blue-700' 
              href="https://t.me/EninaTatyana">
                @EninaTatyana
            </a> (telegram)
          <br /><br />
      </div>
    </div> 
  )
}

export default Contacts
