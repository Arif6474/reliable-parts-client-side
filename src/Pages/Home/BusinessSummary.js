import React from "react";
import Serve from "./Serve";
const BusinessSummary = () => {
  return (
    <div> 
        <h2 className="text-center text-4xl font-bold text-red-200 my-8 ">Business Summary</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-16">
        <Serve bgClass="bg-accent-content" serveTitle="We serve customers" details="200+" ></Serve>
        <Serve bgClass="bg-warning-content" serveTitle="Annual revenue" details="80m+" ></Serve>
        <Serve bgClass="bg-info-content" serveTitle="Parts" details="150+" ></Serve>
      </div>
    </div>
  );
};

export default BusinessSummary;
