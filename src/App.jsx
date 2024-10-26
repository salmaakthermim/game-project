import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Players from './Components/Players';
import News from './Components/News';
import Footer from './Components/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';

function App() {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  
  const addCoins = () => {
    setCoins(prevCoins => prevCoins + 100000000);
  };

  
  const togglePlayerSelection = (player) => {
    setSelectedPlayers(prevSelected => {
     
     
      const priceWithoutSymbol = player.price.replace('$', '');

      if (prevSelected.includes(player)) {
        setCoins(prevCoins => prevCoins + priceWithoutSymbol);  
   

        return prevSelected.filter(p => p !== player);
      } else {
        if (coins >= priceWithoutSymbol) {  
          setCoins(prevCoins => prevCoins - priceWithoutSymbol);
          toast.success(`${player.player_name} Selected!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          
          return [...prevSelected, player];
        } else {
          alert("Not enough coins!");
          return prevSelected;
        }
      }
    });
  };

  return (
    <>
      <div className='container mx-auto'>
        <Header coins={coins} />
        <Banner addCoins={addCoins} />
        <div>
          <Players
            selectedPlayers={selectedPlayers}
            togglePlayerSelection={togglePlayerSelection}
          />
          <News />
        </div>
      </div>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
