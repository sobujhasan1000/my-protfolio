import React from 'react';
import {  FaHtml5, FaJsSquare, FaLeaf, FaNodeJs, FaReact } from 'react-icons/fa';

const MySkills = () => {

    const skills=[
        {lan:"html", icon:<FaHtml5/>},
        {lan:"javascript" , icon:<FaJsSquare/>},
        {lan:"React js" , icon:<FaLeaf/>},
        {lan:"MongoDB", icon:<FaHtml5/>},
        {lan:"Node js", icon:<FaNodeJs/>},
        {lan:"express js", icon:<FaHtml5/>},
        {lan:"tailwind css", icon:<FaHtml5/>},
        {lan:"Daisay ui", icon:<FaHtml5/>}
    ]

    return (
        <div>
        <h1 className='text-center text-2xl py-4 font-bold'>My Skills</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 p-6 bg-green-500 w-3/5 m-auto '>
            {skills.map((sk,index=i)=>
                <div key={index+1} className='bg-black h-32 rounded-md'>
                <p className='text-center flex justify-center items-center mt-4 text-5xl text-green-400'>{sk.icon}</p>
                <h1 className='text-3xl text-white font-bold p-4 text-center'>{sk.lan}</h1>
            </div>
            )}
        </div>
        </div>
    );
};

export default MySkills;