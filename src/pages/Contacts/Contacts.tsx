import React from 'react';

const Contacts: React.FC = () => {
  return (
    <div className='text-left w-max mt-2 mx-auto text-gray-600'> 
    <strong>Форма реєстрації:</strong><br />
      <a target='blank' 
        className='text-blue-600 underline hover:text-blue-700' 
        href="https://forms.gle/VLhd8U4JBsQf3DpJ8"
      >
        https://forms.gle/VLhd8U4JBsQf3DpJ8
      </a> <br /> <br />
   <strong>Організатор:</strong> <br />
    +380637009794 Олег<br />
      <a
        target='blank' 
        className='text-blue-600 underline hover:text-blue-700' 
        href="https://t.me/oleh_holovnykh">
          @oleh_holovnykh
      </a> (telegram) 
    
    </div>
  )
}

export default Contacts
