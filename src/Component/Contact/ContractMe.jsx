
import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

const ContractMe = () => {
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jad2mi8",
        "template_gu99amn",
        form.current,
        "E2yzAkRlRkyJDomRP"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='my-6 pb-8'>
      <h1 className="text-center text-white text-2xl font-bold my-4">Contract me</h1>
      <div className="lg:flex w-4/5 rounded-md bg-green-400 p-10 items-center justify-center  mx-auto">
        <div className='mx-auto'>
            <img data-aos="fade-down-right" className='h-72' src="https://i.ibb.co/z8WKMCX/img-global-work.webp" alt="" />
            </div>
        <div className=' p-4 text-center flex items-center justify-center mx-auto'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='my-4'>
            <label>Name</label>
            <input className='rounded-md mx-2' type="text" name="user_name" />
            </div>
            <div className='my-4'>
            <label>Email</label>
            <input  className='rounded-md mx-2' type="email" name="user_email" />
            </div>
           <div className='my-4'>
           <label>Message</label>
            <textarea  className='rounded-md mx-2 h-32' name="message" />
           </div>
            <input className='btn' type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContractMe;
