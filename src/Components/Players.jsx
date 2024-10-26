import { toast } from 'react-toastify';
import { useEffect, useState } from "react";

const Players = ({ selectedPlayers, togglePlayerSelection }) => {
  const [players, setPlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  useEffect(() => {
    fetch('../../public/players.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  const displayedPlayers = showSelected ? selectedPlayers : players;
  const handleAddCoins = () => {
    addCoins();
    toast.success("Coins Added!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="mt-20 text-3xl font-bold mb-10">
          {showSelected ? "Selected Players" : "Available Players"}
        </h1>
        <div className="flex gap-5">
          <button className="btn bg-yellow-300" onClick={() => setShowSelected(false)}>Available</button>
          <button className="btn bg-green-300" onClick={() => setShowSelected(true)}>Selected ({selectedPlayers.length})</button>
        </div>
      </div>



      {
        showSelected ?

          <div className="grid gap-5 grid-cols-1 ">
            {displayedPlayers.map(player => (
              <div key={player.id} className="card bg-base-100 border">
                <div className='flex '>
                  <div>
                    <figure>
                      <img className=" w-20 h-20 rounded-full mt-5" src={player.player_image} alt={player.player_name} />
                    </figure>
                  </div>
                  <div className="card-body">
                    <div className='flex items-center gap-2'>
                      <i class="fa-solid fa-user"></i>
                      <h2 className="card-title">{player.player_name}</h2>
                    </div>


                    <div className="flex justify-between">
                      <p>{player.Left_Hand_Bat}</p>

                    </div>
                    <div className="card-actions  justify-end">

                      <button
                        className="btn"
                        onClick={() => togglePlayerSelection(player)}
                      >
                        {/* Choose Player */}
                        {selectedPlayers.includes(player) ? <i class="fa-regular fa-trash-can"></i> : "Choose Player"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={() => setShowSelected(false)} className='bg-lime-300 btn w-40 h-10 rounded-lg'>Add More Player</button>
          </div>


          :

          <div className="grid gap-5 grid-cols-3">
            {displayedPlayers.map(player => (
              <div key={player.id} className="card bg-base-100 border">
                <figure>
                  <img className="w-10/12 rounded-xl mt-5" src={player.player_image} alt={player.player_name} />
                </figure>
                <div className="card-body">
                  <div className='flex items-center gap-2'>
                    <i class="fa-solid fa-user"></i>
                    <h2 className="card-title">{player.player_name}</h2>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 text-gray-500">
                      <i className="fa-solid fa-flag"></i>
                      <p>{player.country_name}</p>
                    </div>
                    <div>
                      <button className="border p-2 px-5 rounded-xl bg-gray-100">{player.Round}</button>
                    </div>
                  </div>
                  <hr />
                  <p>{player.Rating}</p>
                  <div className="flex justify-between">
                    <p>{player.Left_Hand_Bat}</p>
                    <p>{player.Batsman}</p>
                  </div>
                  <div className="card-actions flex justify-between items-center">
                    <p>Price: {player.price}</p>
                    <button
                      className="btn bg-yellow-300"
                      onClick={() => togglePlayerSelection(player)}
                    >
                      Choose Player

                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
      }
    </div>
  );
};

export default Players;
