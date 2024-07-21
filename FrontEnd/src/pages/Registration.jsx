import React from 'react';
import { useForm } from 'react-hook-form';

const Registration = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission, e.g., send data to your backend

        // Clear the form fields after submission
        reset();
    };

    return (
        <div className="container" style={{ width: "50%" }}>
            <h6 className="text-center mb-5 mt-5" style={{ color: "white" }}>Registration</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="repSurname" className="form-label">Representative's Surname</label>
                    <input
                        id="repSurname"
                        type="text"
                        className="form-control"
                        {...register('repSurname', { required: 'Representative\'s surname is required' })}
                    />
                    {errors.repSurname && <p className="text-danger">{errors.repSurname.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="repName" className="form-label">Representative's Name</label>
                    <input
                        id="repName"
                        type="text"
                        className="form-control"
                        {...register('repName', { required: 'Representative\'s name is required' })}
                    />
                    {errors.repName && <p className="text-danger">{errors.repName.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="entityName" className="form-label">Name of Legal Entity</label>
                    <input
                        id="entityName"
                        type="text"
                        className="form-control"
                        {...register('entityName', { required: 'Name of legal entity is required' })}
                    />
                    {errors.entityName && <p className="text-danger">{errors.entityName.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="stateRegNumber" className="form-label">State Registration Number</label>
                    <input
                        id="stateRegNumber"
                        type="text"
                        className="form-control"
                        {...register('stateRegNumber', { required: 'State registration number is required' })}
                    />
                    {errors.stateRegNumber && <p className="text-danger">{errors.stateRegNumber.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="taxpayerId" className="form-label">Taxpayer Identification Number</label>
                    <input
                        id="taxpayerId"
                        type="text"
                        className="form-control"
                        {...register('taxpayerId', { required: 'Taxpayer Identification Number is required' })}
                    />
                    {errors.taxpayerId && <p className="text-danger">{errors.taxpayerId.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address of Legal Entity</label>
                    <input
                        id="address"
                        type="text"
                        className="form-control"
                        {...register('address', { required: 'Address of legal entity is required' })}
                    />
                    {errors.address && <p className="text-danger">{errors.address.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumbers" className="form-label">Phone Numbers of Legal Entity</label>
                    <input
                        id="phoneNumbers"
                        type="text"
                        className="form-control"
                        {...register('phoneNumbers', { required: 'Phone numbers are required' })}
                    />
                    {errors.phoneNumbers && <p className="text-danger">{errors.phoneNumbers.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address of Legal Entity</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        {...register('email', { required: 'Email address is required' })}
                    />
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        id="username"
                        type="text"
                        className="form-control"
                        {...register('username', { required: 'Username is required' })}
                    />
                    {errors.username && <p className="text-danger">{errors.username.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="form-control"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="repeatPassword" className="form-label">Repeat Password</label>
                    <input
                        id="repeatPassword"
                        type="password"
                        className="form-control"
                        {...register('repeatPassword', { required: 'Repeat Password is required' })}
                    />
                    {errors.repeatPassword && <p className="text-danger">{errors.repeatPassword.message}</p>}
                </div>
                <div className="text-center">
                    <button type="submit" className="btn" style={{ backgroundColor: "#09B169", color: "white", padding: "8px 24px" }}>Register</button>
                </div>
            </form>
        </div>
    );
};

export default Registration;
