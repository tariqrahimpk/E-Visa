import React from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="contact-us-container">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="form-row mb-3">
            <div className="col mb-3">

              <input
                placeholder='Name'
                type="text"
                id="name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
            </div>
            <div className="col">
              
              <input
              placeholder='Email'
                type="email"
                id="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Enter a valid email address'
                  }
                })}
              />
              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>
          </div>
          <div className="form-group mb-3">
          
            <textarea
            placeholder='Message'
              id="message"
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              rows="4"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
          </div>
          <button type="submit" className="btn w-100 bg-success text-white" >Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
