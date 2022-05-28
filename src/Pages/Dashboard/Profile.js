import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);

    const handleProfile = event => {
        event.preventDefault();
        const name = user?.displayName;
    const email = user?.email;
    const education = event.target.education.value;
    const location = event.target.location.value;
    const city = event.target.city.value;
    const phone = event.target.phone.value;
    const linkedin = event.target.linkedin.value;
    
   console.log(user);
  
    const profile ={name,email, education, location, city, phone,linkedin}
    console.log(profile);
    }
    return (
        <div className="card bg-slate-700 w-96  my-4 mx-auto">
        <h2 className="text-center text-xl font-bold text-red-200 mt-4">
          {" "}
          My Profile
        </h2>
        <form
          onSubmit={handleProfile}
          className="grid grid-cols-1 gap-4 mt-4 justify-items-center"
        >
          <input
            readOnly
            type="text"
            name="name"
            value={user?.displayName}
            className="input  input-warning input-bordered w-full max-w-xs"
          />
          <input
            readOnly
            type="email"
            name="email"
            value={user?.email}
            className="input  input-warning input-bordered w-full max-w-xs"
          />
          
          <input
          required
          type="text"
          name="education"
          placeholder="Education"
         
          className="input  input-warning input-bordered w-full max-w-xs"
        />
          <input
          required
          type="text"
          name="location"
          placeholder="Location"
         
          className="input  input-warning input-bordered w-full max-w-xs"
        />
          <input
          required
          type="text"
          name="city"
          placeholder="city"
         
          className="input  input-warning input-bordered w-full max-w-xs"
        />
          <input
          required
          type="text"
          name="phone"
          placeholder="Phone"
         
          className="input  input-warning input-bordered w-full max-w-xs"
        />
          <input
          required
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile link"
         
          className="input  input-warning input-bordered w-full max-w-xs"
        />
          
          <input
            type="submit"
            value="Update"
            className="btn  btn-outline btn-success w-full my-4 text-white font-bold max-w-xs"
          />
        </form>
      </div>
    );
};

export default Profile;