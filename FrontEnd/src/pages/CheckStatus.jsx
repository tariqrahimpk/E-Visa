import React from 'react';
import { useForm } from 'react-hook-form';

const CheckStatus = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission, e.g., send data to your backend
    reset();
  };

  return (
    <div className="container" style={{ width: "50%" }}>
      <h6 className="text-center mb-2 mt-5" style={{ color: "white" }}>Information Box</h6>
      <p className='mb-5' style={{ color: "white" }}>
        In order to check the status of your application or continue an unfinished application, please enter your application reference number in the relevant box. If you do not know this number, you can find it in the e-mail message that we sent to you. It is an 8-symbol alphanumeric code.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="referenceNumber" className="form-label" style={{ color: "white" }}>Insert Your Reference Number</label>
          <input
            id="referenceNumber"
            type="text"
            className="form-control"
            {...register('referenceNumber', { required: 'Reference number is required' })}
          />
          {errors.referenceNumber && <p className="text-danger">{errors.referenceNumber.message}</p>}
        </div>
        <div className="text-center">
          <button type="submit" className="btn" style={{ backgroundColor: "#09B169", color: "white", padding: "8px 24px" }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CheckStatus;
