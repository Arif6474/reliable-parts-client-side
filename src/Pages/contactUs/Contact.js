
import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'
import address from '../../images/icon/address.png'
import phone from '../../images/icon/phone.png'
import email from '../../images/icon/email.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm('service_ophxek9', 'template_jb4t7sv', form.current, 'hHnYdSJzDEdbJHNBv')
      .then((result) => {
          if (result) {
            toast.success('Message sent successfully');
          }
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

    return (
       
            <div className=" my-28">
  <div className="flex flex-col lg:flex-row  justify-center lg:gap-32 gap-12 items-center">
    <div className=" lg:w-96 w-80 my-8 contact-body contact-div  p-4 shadow-lg hover:shadow-blue-500 transition duration-700 ease-in-out  hover:-translate-y-1 hover:scale-104 ">
    <h1 data-aos="zoom-in" 
      data-aos-easing="linear"
      data-aos-duration="1500"
       className="text-3xl font-bold text-white text-center mb-4">Get In Touch</h1>
    <div className="flex flex-row items-center h-10">
    <img data-aos="fade-up" 
      data-aos-easing="linear"
      data-aos-duration="800"
       src={address} alt="" className="rounded-full w-6 h-6" /> 
    <p data-aos="fade-up"  
    data-aos-easing="linear"
    data-aos-duration="800"
     className=" text-white  pl-2 ">  Hathazari, Chittagong</p>
    </div>
    <div className="flex flex-row items-center h-10">
    <img data-aos="fade-up"  
    data-aos-easing="linear"
    data-aos-duration="1000"
       src={phone} alt="" className="rounded-full w-6 h-6" /> 
    <p data-aos="fade-up"  
    data-aos-easing="linear"
    data-aos-duration="1000"
     className=" text-white  pl-2 ">  +8801820082894</p>
    </div>
    <div className="flex flex-row items-center h-10">
    <img data-aos="fade-up"  
    data-aos-easing="linear"
    data-aos-duration="1200"
       src={email} alt="" className="rounded-full w-6 h-6" /> 
    <p data-aos="fade-up"  
    data-aos-easing="linear"
    data-aos-duration="1200"
     className=" text-white pl-2 ">reliableparts01@gmail.com</p>
    </div>
    </div>
    <div className=" lg:w-[500px] w-80 box-body box-div2 box2 p-4">
   
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid grid-col lg:grid-cols-2 gap-4 mt-4 justify-items-center">
        <input
        data-aos="zoom-in" 
        data-aos-easing="linear"
        data-aos-duration="1500"
          required
          type="text"
          name="user_name"
          placeholder = "Name"
          className="input   input-bordered w-full max-w-xs"
        />
        <input
        data-aos="zoom-in" 
        data-aos-easing="linear"
        data-aos-duration="1500"
          required
          type="email"
          name="user_email"
          placeholder="Email"
          className="input   input-bordered w-full max-w-xs"
        />
        </div>
        <div className="grid grid-col lg:grid-cols-3 gap-4 mt-4 justify-items-center ">

        <textarea
        data-aos="zoom-in" 
        data-aos-easing="linear"
        data-aos-duration="1500"
        required
          type="text"
          name="message"
          placeholder="Type here..."
          className="input input-bordered  input-lg w-full h-40 my-2  col-span-2 "
        />
        
        <input
        data-aos="flip-right" 
        data-aos-easing="linear"
        data-aos-duration="1500"
          type="submit" value="Send"
          className="rounded bg-[#2793ab] hover:bg-[#1e7b90] lg:my-16 px-4 py-2 text-white  font-bold w-full lg:w-2/3"
        />
        </div>
      </form>
  
      <ToastContainer />
    </div>
  </div>
</div>
        
    );
};

export default Contact;