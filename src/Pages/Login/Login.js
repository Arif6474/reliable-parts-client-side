import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
      const [email, setEmail] = useState('');
      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
      const [token] =useToken(user || googleUser)
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

      const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
      };

      const navigate = useNavigate()
      let location = useLocation();
      let from = location.state?.from?.pathname || "/";
      if(token) {
         
          navigate(from, { replace: true });
      }
     
      let LoginError;
      if(googleError || error){
      LoginError = <p className="text-center text-red-500 pb-2">{googleError?.message || error?.message}</p>    
      }
      if(googleLoading || loading){
          return <Loading></Loading>
      }
    return (
        <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-[#0c1839] shadow-xl">
        <div className="card-body">
         
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                required
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                    required: {
                        value: true,
                        message: "email is required"
                    },
                    pattern: {
                        value:  /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                         message: "Provide a valid email"
                        }
                  })} 
                  onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
             {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                
                
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">Password</span>
               
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                    required: {
                        value: true,
                        message: "Password is required"
                    },
                    minLength: {
                        value: 6,
                         message: "Password must be at least 6 characters"
                        }
                  })} 
              />
              <label className="label">
            {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                
                
              </label>
            </div>
            <p className=" text-zinc-300 mb-4" onClick={async () => {
          await sendPasswordResetEmail(email);
          toast('Your password has been reset');
        }}>Forget Password?</p>
            {LoginError}
            <input className="btn bg-[#1ac0ba] tracking-wider fon w-full outline-none border-none hover:bg-[#14988f] max-w-xs text-white" type="submit" value="Login" />
          </form>
          <p><small className="text-slate-100">New to Reliable Parts? <Link className=" ml-4 text-lime-300" to="/register">Create an account</Link></small></p>
          <div className="divider text-slate-300">or</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline hover:bg-[#263fe6] hover:border-none  text-white "
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
    );
};

export default Login;