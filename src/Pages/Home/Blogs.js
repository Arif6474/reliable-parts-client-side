import React from 'react';

const Blogs = () => {
    return (<div className=" grid grid-cols-1 lg:grid-cols-3 mx-4 gap-4">
        <div className="card w-96 bg-[#103e53] my-8 mx-auto shadow-xl">
  <div className="card-body">
    <h2 data-aos="flip-up" 
    data-aos-easing="linear"
    data-aos-duration="2000" className="text-xl text-white">How will you improve the performance of a React Application?</h2>
    <p className="text-sm text-white opacity-80 pt-4">React uses several clever techniques to minimize the number of costly DOM operations required to update the UI.To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. Avoid inline functions as much as possible. Always render hidden components like Modals and Dropdowns conditionally. Always call multiple APIs parallelly</p>
  
  </div>
</div>
        <div className="card w-96 bg-[#103e53] my-8  mx-auto shadow-xl">
  <div className="card-body">
    <h2 data-aos="flip-up" 
    data-aos-easing="linear"
    data-aos-duration="2000" className="text-xl text-white">What are the different ways to manage a state in a React application?</h2>
    <p className="text-sm text-white opacity-80 pt-4"><span className=" text-yellow-500 font-bold">1.</span> useContext helps in passing the props down the components tree. React’s Context API helps in passing the props between the grandfather component to the grandchild component. <span className=" text-yellow-500 font-bold">2.</span> The idea of React’s useReducer has been taken from JavaScript Reducer. Generally, the current state is held by the Reducer along with action with payload and then it results out the new state.  <span className=" text-yellow-500 font-bold">3.</span> With Redux, the state can be managed globally by the use of an external force. The Redux Reducer’s work is to act upon two Redux actions and there is no dependency on the Redux Library. </p>
  </div>
</div>
        <div className="card w-96 bg-[#103e53] my-8  mx-auto shadow-xl">
  <div className="card-body">
    <h2 data-aos="flip-up" 
    data-aos-easing="linear"
    data-aos-duration="2000" className="text-xl text-white"> How does prototypical inheritance work?</h2>
    <p className="text-sm text-white opacity-80 pt-4">Prototype-based programming is a style of object-oriented programming in which behavior reuse is performed via a process of reusing existing objects that serve as prototypes. Prototype-based programming uses generalized objects, which can then be cloned and extended. The prototype may be a simple drawing or rough model that helps innovators determine what they need to improve and fix in their design.</p>
    
  </div>
</div>
        <div className="card w-96 bg-[#103e53]  mx-auto my-8 shadow-xl">
  <div className="card-body">
    <h2 data-aos="flip-up" 
    data-aos-easing="linear"
    data-aos-duration="2000" className="text-xl text-white">What is a unit test?</h2>
    <p className="text-sm text-white opacity-80 pt-4">Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers.</p>
    <hr />
    <h2 data-aos="flip-up" 
    data-aos-easing="linear"
    data-aos-duration="2000" className="text-xl text-white">Why should write unit tests?</h2>
    <p className="text-sm text-white opacity-80 pt-4">One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency.</p>
   
  </div>
</div>
</div>
    );
};

export default Blogs;