import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Register = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
   
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [token] = useToken(googleUser || user)
    const navigate = useNavigate();
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();

    if(token){
        console.log(token);
        navigate('/')
    }
    let signInError;
    if(googleError || error || updateError){
    signInError = <p className="text-center text-red-500 pb-2">{googleError?.message || error?.message || updateError?.message}</p>    
    }
    if(googleLoading || loading || updating){
        return <Loading></Loading>
    }
    const onSubmit = async (data) => {
       await createUserWithEmailAndPassword( data.email, data.password);
        await updateProfile({ displayName : data.name});
        
    };
    return (
        <div className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-[#0c1839] shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                      required: {
                          value: true,
                          message: "name is required"
                      }
                    })} 
                />
                <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
              
                  
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
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
                  placeholder="Enter your password"
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
              {signInError}
              <input className="btn bg-[#1ac0ba] tracking-wider mt-2 fon w-full outline-none border-none hover:bg-[#14988f] max-w-xs text-white" type="submit" value="Register" />
            </form>
            <p><small className="text-slate-100">Already have an account? <Link className="ml-4 text-lime-300" to="/login">Login</Link></small></p>
            <div className="divider text-slate-100">or</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline hover:bg-[#263fe6] hover:border-none  text-white"
            >
              Continue with google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Register;