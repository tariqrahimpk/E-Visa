import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Sigin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Here you can handle form submission, e.g., send data to your backend

        // Clear the form fields after submission
        reset();
    };

    return (
        <div className="container" style={{ width: "50%" }}>
            <h6 className="text-center mb-5 mt-5" style={{ color: "white" }}>Log in to personal account</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username (or Email)</label>
                    <input
                        id="username"
                        type="email"
                        className="form-control"
                        {...register('username', { required: 'Username is required' })}
                    />
                    {errors.username && <p className="text-danger">{errors.username.message}</p>}
                </div>
                <div className="mb-1">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="form-control"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <Link to="/registration" className="btn btn-link" style={{ color: "#09B169" }}>Registration</Link>
                    <Link to="/forgot-password" className="btn btn-link" style={{ color: "#09B169" }}>Forget your password?</Link>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn" style={{ backgroundColor: "#09B169", color: "white", padding: "8px 24px" }}>Log In</button>
                </div>
            </form>
        </div>
    );
};

export default Sigin;
