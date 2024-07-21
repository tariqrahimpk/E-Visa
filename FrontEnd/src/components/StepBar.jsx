

import React, { useState } from 'react';
import Stepper from "./Stepper";
import VisaForm from './VisaForm';
import axios from 'axios';
import jsPDF from 'jspdf';
import ima from "../assets/images/images.png";
import { v4 as uuidv4 } from 'uuid';

const StepBar = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        country: '',
        passportType: '',
        firstName: '',
        lastName: '',
        dateOfBirth: null,
        passportNumber: '',
        passportIssueDate: null,
        passportExpiryDate: null,
        gender: '',
        email: '',
        contactPhoneNumber: '',
        emailAddress: '',
        contactInformation: '',
        placeOfStay: '',
        purposeOfVisit: '',
        planDateOfEntry: null,
        planDateOfExit: null,
        message: '',
        photo: null,
        document1: null,
        document2: null,
        document3: null,
        document4: null,
        document5: null,
        applicationID: '',  // Added for application ID
    });

    const handleNext = () => {
        if (step < 6) {
            setStep(step + 1);
        }
    };

    const handleConfirmData = () => {
        const uniqueID = uuidv4();  // Generate unique ID
        setFormData((prevData) => ({ ...prevData, applicationID: uniqueID }));
        setStep(step + 1);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const response = await axios.post('http://localhost:5000/api/visa', formData); // Use your backend URL here
            if (response.status === 200) {
                console.log('Form submitted successfully');
                // Reset the form data if needed
                setFormData({
                    country: '',
                    passportType: '',
                    firstName: '',
                    lastName: '',
                    dateOfBirth: null,
                    passportNumber: '',
                    passportIssueDate: null,
                    passportExpiryDate: null,
                    gender: '',
                    email: '',
                    contactPhoneNumber: '',
                    emailAddress: '',
                    contactInformation: '',
                    placeOfStay: '',
                    purposeOfVisit: '',
                    planDateOfEntry: null,
                    planDateOfExit: null,
                    message: '',
                    photo: null,
                    document1: null,
                    document2: null,
                    document3: null,
                    document4: null,
                    document5: null,
                    applicationID: '',  // Reset the ID
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDownload = () => {
        const doc = new jsPDF();
        
        // Add Title
        doc.setFontSize(18);
        doc.text('MINISTRY OF FOREIGN AFFAIRS OF THE KYRGYZ REPUBLIC', 10, 20);
        doc.setFontSize(14);
        doc.text('E-Visa', 10, 30);
        doc.setLineWidth(0.5);
        doc.line(10, 35, 200, 35);  // Horizontal line
    
        // Function to convert image URL to Base64
        const imageToBase64 = (url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'Anonymous';  // Handle CORS issues
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    const dataURL = canvas.toDataURL('image/png');
                    resolve(dataURL);
                };
                img.onerror = reject;
                img.src = url;
            });
        };
    
        // Add Images
        const addImagesToPDF = async () => {
            // Add local photo file
            if (formData.photo) {
                const photoURL = URL.createObjectURL(formData.photo);
                const photoDataURL = await imageToBase64(photoURL);
                doc.addImage(photoDataURL, 'PNG', 10, 40, 80, 60);  // Adjust dimensions
            }
            
            // Add QR code image
            if (ima) {
               
                const qrCodeDataURL = await imageToBase64(ima);
                doc.text(`your id is ${formData.applicationID}` , 10, 110);
                doc.addImage(qrCodeDataURL, 'PNG', 120, 40, 80, 60);  // Adjust dimensions
    
                // Finalize PDF
                doc.setFontSize(12);
                doc.text(`Full Name: ${formData.firstName} ${formData.lastName}`, 10, 110);
                doc.text(`Date of Birth: ${formData.dateOfBirth ? formData.dateOfBirth.toLocaleDateString() : ''}`, 10, 120);
                doc.text(`Citizenship: ${formData.country}`, 10, 130);
                doc.text(`Passport Number: ${formData.passportNumber}`, 10, 140);
                doc.text(`Date of Issue: ${formData.passportIssueDate ? formData.passportIssueDate.toLocaleDateString() : ''}`, 10, 150);
                doc.text(`Date of Expiry: ${formData.passportExpiryDate ? formData.passportExpiryDate.toLocaleDateString() : ''}`, 10, 160);
                doc.text(`Validity of Visa: ${formData.planDateOfEntry ? formData.planDateOfEntry.toLocaleDateString() : ''} - ${formData.planDateOfExit ? formData.planDateOfExit.toLocaleDateString() : ''}`, 10, 170);
                doc.text('Validity period of a visa is generally longer than the period of stay. The validity period establishes the first and last dates during which the visa can be used. Period of stay indicates the length of time you have permission to remain in Kyrgyzstan within the validity period of the visa.', 10, 190, { maxWidth: 180 });
    
                // Save PDF
                doc.save('visa_application.pdf');
            }
        };
    
        addImagesToPDF();
    };

    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-center" style={{ color: 'white', fontSize: "33px", letterSpacing: "0.8px", marginBottom: "30px" }}>APPLY FOR VISA</h1>
            <Stepper step={step} />
            <VisaForm step={step} isSubmitting={isSubmitting} setIsSubmitting={setIsSubmitting} formData={formData} setFormData={setFormData} />
            <div className="text-center mt-4">
                {step < 5 && (
                    <button className="btn" style={{ backgroundColor: "#09B169", color: "white", padding: "8px 24px" }} onClick={handleNext}>
                        Next
                    </button>
                )}
                {step === 5 && (
                    <button className="btn" style={{ backgroundColor: "#09B169", color: "white", padding: "8px 24px" }} onClick={handleConfirmData}>
                        Confirm Data
                    </button>
                )}
                {step === 6 && (
                    <div>
                         {/* <VisaForm applicationID={formData.applicationID} /> */}
                        <div className="alert alert-info">
                            Your application ID is: {formData.applicationID}
                        </div> 
                        <button className="btn" style={{ backgroundColor: "#09B169", color: "white", padding: "8px 24px", marginRight: "10px" }} onClick={handleSubmit} disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                        <button className="btn" style={{ backgroundColor: "#09B169", color: "white", padding: "8px 24px" }} onClick={handleDownload}>
                            Download
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StepBar;

