import React from 'react';
import { Link } from 'react-router-dom';
import useProfile from '../../hooks/useProfile';

const ProfileDetails = () => {
    const [profile] =useProfile({})
    const {name, email, education, city, location , phone} =profile;
    console.log(profile);
    return (
        <div>
            <div className="flex justify-between items-center px-20 py-4 bg-red-50">
            <div>
                <p className="font-bold text-slate-700 text-lg">My Profile</p>
            </div>
            <div>
            <Link to="/dashboard/profile"><button className="btn btn-xs border-none text-white bg-[#1cbca9] hover:bg-[#05333e]">Edit</button> </Link>
            </div>
            </div>
            <div className="flex justify-start lg:flex-row flex-col gap-28 text-white p-16">
          <div>
          <div className="avatar flex flex-col  space-y-4">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people"   alt="people"/>
  </div> 
  <p className="bg-teal-700 px-2 rounded-full cursor-pointer w-[114px] text-center">Upload Photo</p>
</div>
          </div>
          <div className="space-y-4">
           <div>
           <p className="font-semibold text-slate-400">Full name</p>
            <p  className="text-xl ">{name}</p>
           </div>
           <div>
           <p className="font-semibold text-slate-400">Email address</p>
            <p className="text-xl ">{email}</p>
           </div>
           <div>
           <p className="font-semibold text-slate-400">Phone number</p>
            <p className="text-xl "> {phone}</p>
           </div>
           <div>
           <p className="font-semibold text-slate-400">City</p>
            <p className="text-xl "> {city}</p>
           </div>
           <div>
           <p className="font-semibold text-slate-400">Location</p>
            <p className="text-xl "> {location}</p>
           </div>
           <div>
           <p className="font-semibold text-slate-400">Education</p>
            <p className="text-xl "> {education}</p>
           </div>
          </div>
        </div>
        </div>
    );
};

export default ProfileDetails;