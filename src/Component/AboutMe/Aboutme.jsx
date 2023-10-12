import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Aboutme = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../../public/Img/resume.pdf'; // Replace 'resume.pdf' with the actual file name
    link.download = 'resume.pdf'; // Specify the name of the downloaded file
    link.click();
  };


const skeyimg='https://i.ibb.co/2YzgrKS/skey.jpg';
const bgimg={
  backgroundImage:`url(${skeyimg})`,
  backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    width: '100%',
    height: '900px',
}

  return (
    <div>
      <div style={bgimg}  className=' rounded-md lg:flex text-white opacity-80'>
        <div 
         className='flex items-center justify-center lg:w-1/2'>
          <div className='text-center'
          // data-aos="fade-right"
          // data-aos-offset="500"
          >
            <h1 className='text-xl font-semibold bg-teal-100 p-2 rounded-md my-2 text-black w-[350px] mx-auto'>Hi there  i am <span className='text-emerald-400 font-bold text-2xl'>Mohidul Islam </span> </h1>
            <div>
            <marquee behavior="scroll" direction="left">
            <p className='text-2xl font-semibold'> I am a <span className='text-lime-400'>MERN</span> Stack Developer</p>
              </marquee>
            </div>
              {/* <p className='text-2xl font-semibold'> I am a <span className='text-lime-400'>MERN</span> Stack Developer</p> */}
            <button className='btn mt-4' onClick={handleDownload} >download my resume</button>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <img 
          data-aos="fade-left"
          data-aos-offset="500"
          className='rounded-md h-[500px]' src="https://i.ibb.co/Zds2gGQ/output-onlinegiftools.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
