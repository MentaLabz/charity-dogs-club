import './App.css';
import NavBar from './components/NavBar/NavBar';
import Mint from './components/Mint/Mint';
import { useState } from 'react';
import Roadmap from './components/Roadmap/Roadmap';
import AboutUs from './components/AboutUs/AboutUs';
import Community from './components/Community/Community';
import Footer from './components/Footer/Footer';

function App() {

  const [accounts, setAccounts] = useState([]);
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
      </header>

      <Mint accounts={accounts} setAccounts={setAccounts} />

      <Roadmap/>
      <Community/>
      <AboutUs/>
      <Footer/>

    </div>
  );
}

export default App;
