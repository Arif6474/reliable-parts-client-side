import React from "react";
import Serve from "./Serve";
import customer from '../../images/customer.png'
import currency from '../../images/currency.png'
import parts from '../../images/parts.png'

const BusinessSummary = () => {
  return (
    <div> 
        <h2 className="text-center text-4xl font-bold text-red-200 my-8 ">Business Summary</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-16">
        <Serve image={customer} back="bg-emerald-600" serveTitle="We served customers" details="200+" ></Serve>
      <Serve image={currency} back="bg-indigo-600 " serveTitle="Annual revenue" details="$80m+" ></Serve>
        <Serve image ={parts} back="bg-teal-600" serveTitle="Parts, We have" details="150+" ></Serve>
      </div>
    </div>
  );
};

export default BusinessSummary;
