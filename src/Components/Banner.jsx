import { toast } from 'react-toastify';

const Banner = ({ addCoins }) => {

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
      <div className="bg-black text-center py-20 rounded-xl mt-10">
        <img className="mx-auto mb-7" src="../../public/assets/banner-main.png" alt="" />
        <h1 className="text-4xl font-bold mb-5 text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <h2 className="text-gray-300 font-bold text-3xl mb-5">Beyond Boundaries Beyond Limits</h2>
        <button
          className="btn bg-lime-400 text-black font-bold"
          
          onClick={handleAddCoins}

        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
