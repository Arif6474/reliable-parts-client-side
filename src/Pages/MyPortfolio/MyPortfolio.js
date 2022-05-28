import React from "react";
import picture from "../../images/arif islam.webp";
const MyPortfolio = () => {
  return (
    <div>
      <h2 className="text-center my-4 text-2xl font-bold text-red-200 mt-4">
        My-Portfolio
      </h2>
      <div class="hero mt-4 lg:w-2/5 mx-auto rounded mb-4 shadow-md shadow-slate-700 bg-gray-600 ">
        <div class="hero-content  flex-col lg:flex-row-reverse">
          <img src={picture} className="rounded-full ml-20 w-36 h-36" alt="" />
          <div>
            <h1 class="text-2xl mb-2 text-white font-bold">Md Ariful Islam</h1>
            <p className="text-amber-200">BBA(Management Department)</p>
            <p className="text-amber-200"> at National University</p>
            <p className=" text-amber-200">arifulislam64743@gmail.com</p>

            <div className=" mt-4">
              <p className="text-xl mt-2 font-bold text-white">Skill:</p>
              <div className="grid grid-cols-5 my-2 gap-4 justify-center items-center">
              <div className="">
                <img
                  src={picture}className="rounded-full  w-8 h-8" alt=""/>
                <p className="text-xs mt-1">html</p>
              </div>
              <div>
              <img src={picture} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">css</p>
              </div>
              <div>
              <img src={picture} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">javascript</p>
              </div>
              <div>
              <img src={picture} className="rounded-full w-8 h-8" alt=""/>  
                <p className="text-xs mt-1">es6</p>
              </div>
              <div>
              <img src={picture} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">tailwind</p>
              </div>
              <div>
              <img src={picture} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">bootstrap</p>
              </div>
              <div>
              <img src={picture} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">react.js</p>
              </div>
              <div>
              <img src={picture} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">node.js</p>
              </div>
              <div>
              <img src={picture} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">express.js</p>
              </div>
              <div>
              <img src={picture} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">mongodb</p>
              </div>
            </div>
            </div>
            <div className="mt-4">
              <p className="text-xl mt-2 font-bold text-white">
                My Project Link:
              </p>

              <link rel="stylesheet" href="" />
              <link rel="stylesheet" href="" />
              <link rel="stylesheet" href="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
