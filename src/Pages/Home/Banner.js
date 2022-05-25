import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[url('https://i.ibb.co/jhGQH4X/tim-mossholder-Vur-HDp-O4-VYI-unsplash.jpg')]">
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl text-cyan-400 font-bold">Reliable Parts</h1>
      <p className="mb-5 text-white  font-bold ">This is RP’s brand promise and it extends to our products, our people, our workplace and the way we do business. We build quality that is driven by our unrelenting pursuit of “better”.</p>
      <button className="btn btn-secondary text-white font-bold">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner; 