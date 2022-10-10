import React from "react";
import Serve from "./Serve";
import customer from '../../images/customer.png'
import currency from '../../images/currency.png'
import parts from '../../images/parts.png'

const BusinessSummary = () => {
  return (
    <div className="my-24"> 
        <h2 className="text-center text-2xl font-bold text-white my-2 ">Business Summary</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
        <Serve image={customer} back="bg-[#06283D]" serveTitle="We served customers" details="200+" ></Serve>
      <Serve image={currency} back="bg-[#0A1931] " serveTitle="Annual revenue" details="$80m+" ></Serve>
        <Serve image ={parts} back="bg-[#062C30]" serveTitle="Parts, We have" details="150+" ></Serve>
      </div>
    </div>
  );
};

export default BusinessSummary;
