import React from "react";


const Business = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
       <div  className="max-w-lg sm:max-w-sm rounded-lg shadow-2xl">
        <img
          src={
            "https://i.ibb.co/c3NQF2h/milan-degraeve-a-Vj-PXwt3-HYM-unsplash.jpg"
          }
          alt=""
          className="rounded-lg"
         
        />
        </div>
        <div className="px-6 lg:px-20">
          <h1 className="text-4xl font-bold text-yellow-200">Our Business</h1>
          <p className="py-6">
          RP (reliable parts) is constantly involved in the evaluation and innovation of production technologies. For both existing and new technologies, RP examines how and to what degree they are applicable for its customers, and goes to extreme lengths to implement the technologies. RP focuses exclusively on the automotive industry market segment. The end clients for our components are the large, well-known car brands produced by manufacturers in Japan, Europe and the USA. RP is located in Haaksbergen. The Director is Guido Gerritsen. RP’s 8-member team consists of passionate professionals who provide customers worldwide with their complex, customized or mass-produced components day and night.
          </p>
          <button class="btn btn-outline btn-info">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Business;
