import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout";

function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ email, password }) => {
    console.log("email :>> ", email);
    console.log("password :>> ", password);
  };
  return (
    <Layout title="Login">
        <h2>Login</h2>
      <form onSubmit={handleSubmit(submitHandler)} className="border">
        <div className="form-inputs">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "Please enter email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter email",
              },
            })}
            type="email"
            id="email"
            autoFocus
          />
        </div>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        <div className="form-inputs">
          <label htmlFor="password">Password</label>
          <input type="password"
          {...register('password', {
            required: 'Please enter password',
            minLength: { value: 6, message: 'password must be longer than 5 characters'}
          })}
          id="password"
          autoFocus
           />
           
        </div>
           {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
           )}
        <div className="form-inputs">
          <button>Login</button>
        </div>
        
      </form>
    </Layout>
  );
}

export default LoginScreen;
