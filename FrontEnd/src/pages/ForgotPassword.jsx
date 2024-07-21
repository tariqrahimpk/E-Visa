import React from 'react';
import { useForm } from 'react-hook-form';

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission, e.g., send data to your backend

        // Clear the form fields after submission
        reset();
    };

    return (
        <div className="container" style={{ width: "50%" }}>
            <h6 className="text-center mb-5 mt-5" style={{ color: "white" }}>Forgot your password?</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        {...register('email', { required: 'Email address is required' })}
                    />
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>
                <div className="text-center">
                    <button type="submit" className="btn" style={{ backgroundColor: "#09B169", color: "white", padding: "8px 24px" }}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;
