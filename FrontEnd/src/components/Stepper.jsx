import React from 'react';

const Stepper = ({ step }) => {
    const steps = [1, 2, 3, 4, 5, 6];

    return (
        <div className="text-center mb-4">
            <div className="d-flex justify-content-between align-items-center">
                {steps.map((index) => (
                    <div key={index} className="position-relative">
                        <div className={`step-circle ${index === step ? 'active' : ''}`}>
                            {index}
                        </div>
                        {index < steps.length && <div className="step-line"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stepper;
