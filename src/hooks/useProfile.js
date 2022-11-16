import { useEffect } from "react"
import { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useProfile = () => {
  const [profile, setProfile] =useState({})
  const [user] = useAuthState(auth);
  console.log(user);
  useEffect(() => {
    const email = user?.email;
   if (email) {
    fetch(`http://localhost:5000/user/${email}`)
    .then(res => res.json())
    .then(data => setProfile(data))
   }
  },[user])
  return [profile, setProfile]
}

export default useProfile;