import React from 'react';
import './News.css'

const News = () => {
    return (
        <div className='news-img mt-7 p-20 rounded-xl'>
            
            <h1 className='text-center mb-3 text-4xl font-bold'>Subscribe to our Newsletter</h1>
            <h2 className='text-2xl mb-3 text-gray-400 font-bold text-center '>Get the latest updates and news right in your inbox!</h2>
            <div className='flex gap-5 ml-96'>
            <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
            <button className='btn'>Subscribe</button>
            </div>
        </div>
    );
};

export default News;