import React from "react";
import Serve from "./Serve";
import customer from '../../images/customer.png'
import currency from '../../images/currency.png'
import parts from '../../images/parts.png'
import euro from '../../images/icon/pound-icon-british-currency-symbol-illustration-coin-symbol-free-vector.jpg'
import employee from '../../images/icon/employee.png'
import dollar from '../../images/icon/currency_dollar.png'

const BusinessSummary = () => {
  return (
    <div className="my-24"> 
        <h2 data-aos="zoom-in" 
    data-aos-easing="linear"
    data-aos-duration="1500" className="text-center text-2xl my-8 font-bold w-[244px] mx-auto text-white uppercase border-b-2 border-[#ea572b]">Business Summary</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
        <Serve image={customer} back="bg-[#0c1839]" serveTitle="We served customers" details="200+" ></Serve>
      <Serve image={currency} back="bg-[#0c1839] " serveTitle="Annual revenue" details="$80m+" ></Serve>
        <Serve image ={parts} back="bg-[#0c1839]" serveTitle="Parts, We have" details="150+" ></Serve>
      <Serve image={dollar} back="bg-[#0c1839] " serveTitle="Annual expenses" details="$60m+" ></Serve>
        <Serve image={employee} back="bg-[#0c1839]" serveTitle="Our employs" details="350+" ></Serve>
        <Serve image ={euro} back="bg-[#0c1839]" serveTitle="We donate" details="$.40m+" ></Serve>
      </div>
    </div>
  );
};

export default BusinessSummary;
