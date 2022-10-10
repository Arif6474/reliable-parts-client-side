import React from "react";

const Business = () => {
  return (
    // <div className="hero my-24">
    //   <div className="hero-content flex-col lg:flex-row">
    //    <div  className="max-w-lg sm:max-w-sm rounded-lg shadow-2xl">
    //     <img
    //       src={
    //         "https://i.ibb.co/c3NQF2h/milan-degraeve-a-Vj-PXwt3-HYM-unsplash.jpg"
    //       }
    //       alt=""
    //       className="rounded-lg"

    //     />
    //     </div>
    //     <div className="px-6 lg:px-20">
    //       <h1 className="text-2xl font-bold text-white">Our Business</h1>
    //       <p className="py-4 text-slate-200 font-medium opacity-80">
    //       RP (reliable parts) is constantly involved in the evaluation and innovation of production technologies. For both existing and new technologies, RP examines how and to what degree they are applicable for its customers, and goes to extreme lengths to implement the technologies. RP focuses exclusively on the automotive industry market segment. The end clients for our components are the large, well-known car brands produced by manufacturers in Japan, Europe and the USA. RP is located in Haaksbergen. The Director is Guido Gerritsen. RP’s 8-member team consists of passionate professionals who provide customers worldwide with their complex, customized or mass-produced components day and night.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-20 my-24">
       <div className="max-w-lg p-4 sm:max-w-sm rounded-lg  ">
        <img
          src={
            "https://i.ibb.co/c3NQF2h/milan-degraeve-a-Vj-PXwt3-HYM-unsplash.jpg"
          }
          alt=""
          className="rounded-lg"
        />
      </div>
      <div className="p-8">
        <h1 className="text-center text-2xl font-bold w-44  text-white uppercase border-b-2 border-[#ea572b] ">Our Business</h1>
        <p className="py-4 text-slate-200 font-medium opacity-80 lg:w-[550px]">
          RP (reliable parts) is constantly involved in the evaluation and
          innovation of production technologies. For both existing and new
          technologies, RP examines how and to what degree they are applicable
          for its customers, and goes to extreme lengths to implement the
          technologies. RP focuses exclusively on the automotive industry market
          segment. The end clients for our components are the large, well-known
          car brands produced by manufacturers in Japan, Europe and the USA. RP
          is located in Haaksbergen. The Director is Guido Gerritsen. RP’s
          8-member team consists of passionate professionals who provide
          customers worldwide with their complex, customized or mass-produced
          components day and night.
        </p>
      </div>
     
    </div>
  );
};

export default Business;
