import React from "react";
import Serve from "./Serve";

const BusinessSummary = () => {
  return (
    <div> 
        <h2 className="text-center text-4xl font-bold text-red-200 my-8 ">Business Summary</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-16">
        <Serve back="bg-emerald-900" serveTitle="We serve customers" details="200+" ></Serve>
        <Serve back="bg-pink-900" serveTitle="Annual revenue" details="$80m+" ></Serve>
        <Serve back="bg-indigo-900" serveTitle="Parts" details="150+" ></Serve>
      </div>
    </div>
  );
};

export default BusinessSummary;
