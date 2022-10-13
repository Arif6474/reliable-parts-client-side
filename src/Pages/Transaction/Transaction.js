import React from "react";
import { FaAmazon, FaApple, FaGoogle, FaTwitter } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { AiOutlineCreditCard } from "react-icons/ai";
const Transaction = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-center items-center gap-40  mt-24 text-white">
      <div className="flex flex-col p-4 ">
        <p
          data-aos="flip-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-sans font-semibold mt-8 text-start"
        >
          Transaction
        </p>
        <h1
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-sans font-semibold text-4xl text-start mt-2"
        >
          Send & receive <br /> money instantly
        </h1>
        <p className="text-sans w-[300px] lg:w-[450px] text-start opacity-90 mt-6 font-semibold">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="text-start mt-4">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="flex text-sans font-semibold gap-2 my-1 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-white rounded-full bg-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Malesuada Ipsum</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="flex text-sans font-semibold gap-2  my-1 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-white rounded-full bg-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Vestibulum</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="flex text-sans font-semibold gap-2  my-1 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-white rounded-full bg-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Parturient Lorem</p>
          </div>
        </div>
      </div>
      <div
        className=" border-slate-800  p-6 "
        style={{ borderRadius: "45px", border: "6px solid" }}
      >
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="flex  justify-between items-center gap-4"
        >
          <p className="font-semibold ">Current balance</p>
          <p className="font-bold text-xl">$4.658,50</p>
        </div>

        {/* <div
          data-aos="flip-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=" p-5 text-white   mt-4 rounded-xl " style={{backgroundColor: "rgba(72, 85, 99, 1) rgba(41, 50, 60, 1)"}}
        >
          <div className="flex   items-center gap-32">
            <h2 className="text-xl text-start">banquee.</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 rotate-90 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
              />
            </svg>
          </div>
          <div className="text-left text-xl font-semibold mt-4 mb-2 font-mono">
            <span className="mr-3">1234</span>
            <span className="mr-3">5678</span>{" "}
            <span className="mr-3">9000</span>
            <span className="ml-1">0000</span>
          </div>
          <div className="flex  items-center gap-6 ">
            <div>
              <small className="text-start text-xs text-slate-300">
                Card Holder
              </small>
              <p className="text-sm">John Doe</p>
            </div>
            <div>
              <small className=" text-xs text-slate-300">Expiry Date</small>
              <p className="text-sm">09/28</p>
            </div>
            <h1 className="font-bold ml-4 ">
              {" "}
              <i>VISA</i>{" "}
            </h1>
          </div>
        </div> */}
        <div>
          <div className="flex justify-between items-center gap-4 my-5">
            <div className="flex gap-2 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-teal-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>

              <p className="font-semibold">Send Money</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-teal-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>

              <p className="font-semibold">Receive Money</p>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 my-5">
            <p className="text-xl font-semibold">Transactions</p>
            <div className="text-primary flex items-center gap-2 my-2">
              <p className="font-semibold text-teal-400">View all</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-teal-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800" className="flex justify-between items-center gap-4 my-5 bg-[#020f33] p-2 rounded-lg">
            <div className="flex justify-start items-center gap-5">
              <div className="bg-teal-400 text-white rounded-md p-3">
                <FaApple />
              </div>
              <div className="text-left">
                <p className="font-semibold">Apple</p>
                <small className="font-semibold">Electronic</small>
              </div>
            </div>
            <div className="text-left">
              <p className="font-semibold">-799$</p>
            </div>
          </div>
          <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000" className="flex justify-between items-center gap-4 my-5 bg-[#020f33] p-2 rounded-lg">
            <div className="flex justify-start items-center gap-5">
              <div className="bg-teal-400 text-white rounded-md p-3">
                <FaGoogle />
              </div>
              <div className="text-left">
                <p className="font-semibold">Google Play Store</p>
                <small className="font-semibold">Apps</small>
              </div>
            </div>
            <div className="text-left">
              <p className="font-semibold">-49$</p>
            </div>
          </div>
          <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1200" className="flex justify-between items-center gap-4 my-5 bg-[#020f33] p-2 rounded-lg">
            <div className="flex justify-start items-center gap-5">
              <div className="bg-teal-400 text-white rounded-md p-3">
                <FaAmazon />
              </div>
              <div className="text-left">
                <p className="font-semibold">Amazon</p>
                <small className="font-semibold">Shopping</small>
              </div>
            </div>
            <div className="text-left">
              <p className="font-semibold">-59$</p>
            </div>
          </div>
          <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1400" className="flex justify-between items-center gap-4 my-5 bg-[#020f33] p-2 rounded-lg">
            <div className="flex justify-start items-center gap-5">
              <div className="bg-teal-400 text-white rounded-md p-3">
                <FaTwitter />
              </div>
              <div className="text-left">
                <p className="font-semibold">Twitter</p>
                <small className="font-semibold">Ads</small>
              </div>
            </div>
            <div className="text-left">
              <p className="font-semibold">-9$</p>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500" className="flex justify-around py-1">
            <div className="text-teal-400 flex flex-col justify-center items-center">
              <RiHomeLine />
              <p className="font-semibold text-sm">Home</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-semibold text-sm">Savings</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <AiOutlineCreditCard />
              <p className="font-semibold text-sm">Cards</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FiUser />
              <p className="font-semibold text-sm">Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;