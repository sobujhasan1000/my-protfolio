import React from 'react';
import ParticlesBg from '../Particles/ParticlesBg';
import {  FaHtml5, FaJsSquare, FaLeaf, FaNodeJs, FaReact } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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
        <ParticlesBg/>
        <h1 className='text-center text-2xl py-4 font-bold text-white'>My Skills</h1>
        <div 
        data-AOS="zoom-in" 
        data-aos-offset="300"
        className='grid grid-cols-2 lg:grid-cols-4 gap-2 p-6 bg-green-400 w-3/5 m-auto rounded-md'>
            {skills.map((sk,index=i)=>
                <div key={index+1} className='bg-[#010101d1] rounded-md flex my-auto h-20'>
                <p className='text-center my-auto mx-auto text-5xl text-green-400'>{sk.icon}</p>
                <h1 className='text-xl my-auto mx-auto text-white font-bold p-4 text-center'>{sk.lan}</h1>
            </div>
            )}
        </div>
       
        
        
       </div>
    );
};

export default MySkills;