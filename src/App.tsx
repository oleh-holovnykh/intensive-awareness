import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import navItems from './Data/navItems.json';
import Payment from './pages/Payment/Payment';
import { Info } from './pages/Info/Info';
import Contacts from './pages/Contacts/Contacts';

function App() {
  return (
    <>
      <NavBar navItems={navItems} />

      <div className='section'>
        <div className='container'>
          <Routes>
            <Route index element={<Payment />} />
            <Route path='payment' element={<Payment />} />
            <Route path='schedule' element={<Info />} />
            <Route path='contacts' element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
