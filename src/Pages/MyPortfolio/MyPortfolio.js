import React from "react";
import picture from "../../images/arif islam.webp";
import html from "../../images/html.png"
import css from "../../images/css.png"
import js from "../../images/js.png"
import es6 from "../../images/es6.png"
import bootstrap from "../../images/bootstrap.png"
import tailwind from "../../images/tailwind.png"
import react from "../../images/react.webp"
import node from "../../images/node.webp"
import mongodb from "../../images/mongodb.png"
import firebase from "../../images/firebase.webp"
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
                  src={html}className="rounded-full  w-8 h-8" alt=""/>
                <p className="text-xs mt-1">html</p>
              </div>
              <div>
              <img src={css} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">css</p>
              </div>
              <div>
              <img src={js} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">javascript</p>
              </div>
              <div>
              <img src={es6} className="rounded-full w-8 h-8" alt=""/>  
                <p className="text-xs mt-1">es6</p>
              </div>
              <div>
              <img src={tailwind} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">tailwind</p>
              </div>
              <div>
              <img src={bootstrap} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">bootstrap</p>
              </div>
              <div>
              <img src={react} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">react.js</p>
              </div>
              <div>
              <img src={node} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">node.js</p>
              </div>
              <div>
              <img src={firebase} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">firebase</p>
              </div>
              <div>
              <img src={mongodb} className="rounded-full w-8 h-8" alt=""/>
                <p className="text-xs mt-1">mongodb</p>
              </div>
            </div>
            </div>
            <div className="mt-4">
              <p className="text-xl mt-2 font-bold text-white">
                My Project Link:
              </p>
              <div>  <a href="https://fresh-fruits-vegetables.web.app/">Project-1</a></div>
              <div><a href="https://sheba-725ac.web.app/">Project-2</a></div>
              <div><a href="https://shiny-blancmange-8a66e9.netlify.app/home">Project-3</a></div>
 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
