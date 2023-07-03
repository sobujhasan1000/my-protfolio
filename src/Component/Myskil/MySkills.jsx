import React from 'react';
import {  FaHtml5, FaJsSquare, FaLeaf, FaNodeJs, FaReact } from 'react-icons/fa';

const MySkills = () => {
    return (
        <>
        <h1 className='text-center text-2xl py-4 font-bold'>My Skills</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
            <div className='bg-gradient-to-r from-purple-400 to-cyan-200 h-32 rounded-md'>
                <p className='text-center flex justify-center items-center mt-4 text-5xl text-orange-700'><FaHtml5/></p>
                <h1 className='text-3xl font-bold text-black p-4 text-center'>HTML</h1>
            </div>
            <div className='bg-gradient-to-r from-purple-400 to-cyan-200 h-32 rounded-md'>
                <p className='text-center flex justify-center items-center mt-4 text-5xl text-yellow-400'><FaJsSquare/></p>
                <h1 className='text-3xl font-bold text-yellow-300 p-4 text-center'>javascript</h1>
            </div>
            <div className='bg-gradient-to-r from-purple-400 to-cyan-200 h-32 rounded-md'>
                <p className='text-center flex justify-center items-center mt-4 text-5xl text-blue-500'><FaReact/></p>
                <h1 className='text-3xl font-bold text-blue-500 p-4 text-center'>React js</h1>
            </div>
            <div className='bg-gradient-to-r from-purple-400 to-cyan-200 h-32 rounded-md'>
            <img className=' flex justify-center items-center mt-4 h-10 mr-auto ml-auto' src="../../../public/Img/mongo.png" alt="" />
                <h1 className='text-3xl font-bold text-green-700 p-4 text-center'>MongoDB</h1>
            </div>
            <div className='bg-gradient-to-r from-purple-400 to-cyan-200 h-32 rounded-md'>
                <p className='text-center flex justify-center items-center mt-4 text-5xl text-green-600'><FaNodeJs/></p>
                <h1 className='text-3xl font-bold text-green-600 p-4 text-center'>node js</h1>
            </div>
            <div className='bg-gradient-to-r from-purple-400 to-cyan-200 h-32 rounded-md'>
                <p className='text-center flex justify-center items-center mt-4 text-5xl text-yellow-200'><FaJsSquare/></p>
                <h1 className='text-3xl font-bold text-yellow-200 p-4 text-center'>Expres js</h1>
            </div>
            <div className='bg-gradient-to-r from-purple-400 to-cyan-200 h-32 rounded-md'>
                <img className=' flex justify-center items-center mt-4 h-10 mr-auto ml-auto' src="../../../public/Img/tailwind-removebg-preview.png" alt="" />
                <h1 className='text-3xl font-bold text-sky-500 p-4 text-center'>tailwind css</h1>
            </div>
            <div className='bg-gradient-to-r from-purple-400 to-cyan-200 h-32 rounded-md'>
            <img className=' flex justify-center items-center mt-4 h-10 mr-auto ml-auto' src="../../../public/Img/daisay.png" alt="" />
                <h1 className='text-3xl font-bold text-green-500 p-4 text-center'>daisay ui</h1>
            </div>
        </div>
        </>
    );
};

export default MySkills;