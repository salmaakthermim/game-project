import React from 'react';

const Header = ({ coins }) => {
    return (
        <div className='flex justify-between'>
            <img src="../../public/assets/logo.png" alt="" />
            <div className='flex items-center text-gray-400 font-bold gap-10'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <button className='border px-5 py-3 rounded-xl flex text-center text-gray-700 items-center'>
                    {coins} Coin <img src="../../public/assets/coin.png" alt="" />
                </button>
            </div>
        </div>
    );
};

export default Header;
