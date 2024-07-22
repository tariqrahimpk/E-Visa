
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ima from "../assets/images/images.png";

const VisaForm = ({ step, isSubmitting, formData, setFormData}) => {
    // const [id1, setId1] = useState(applicationID);

    // useEffect(() => {
    //     setId1(applicationID);
    // }, [applicationID]);
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleDateChange = (date, id) => {
        setFormData({ ...formData, [id]: date });
    };

    const handleFileInputChange = (e) => {
        const { id, files } = e.target;
        setFormData({ ...formData, [id]: files[0] });
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
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

// console.log({applicationID});
// console.log(id1);

    const renderFormFields = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <h5 className="text-center mb-5 mt-5" style={{ color: "white" }}>1. COUNTRY/TRIP PURPOSE</h5>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <select id="country" className="form-select" style={{ backgroundColor: "#30333a", color: "white" }} onChange={handleInputChange} required>
                                <option value="">Select passport country</option>
                                <option value="country1">Country 1</option>
                                <option value="country2">Country 2</option>
                            </select>
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <select id="passportType" className="form-select" style={{ backgroundColor: "#30333a", color: "white" }} onChange={handleInputChange} required>
                                <option value="">Select passport type</option>
                                <option value="type1">Type 1</option>
                                <option value="type2">Type 2</option>
                            </select>
                        </div>
                    </>
                );

            case 2:
                return (
                    <>
                        <h5 className="text-center mb-3 mt-5" style={{ color: "white" }}>2. MAIN DATA</h5>
                        <p className='text-center mb-5' style={{ color: "white" }}>Invitation is required from Kyrgyz citizen.</p>
                        <h6 className="text-center mb-3 mt-5" style={{ color: "white" }}>Inviting person data</h6>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="firstName" placeholder="Inviting person's Surname" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="lastName" placeholder="Inviting person's name" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <DatePicker
                                id="dateOfBirth"
                                selected={formData.dateOfBirth}
                                onChange={(date) => handleDateChange(date, 'dateOfBirth')}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select Date of Birth"
                                className="form-control"
                                style={{ backgroundColor: "black", color: "white" }}
                                required
                            />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="passportNumber" placeholder="Passport Number" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <DatePicker
                                id="passportIssueDate"
                                selected={formData.passportIssueDate}
                                onChange={(date) => handleDateChange(date, 'passportIssueDate')}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select Passport Issue Date"
                                className="form-control"
                                style={{ backgroundColor: "black", color: "white" }}
                                required
                            />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <DatePicker
                                id="passportExpiryDate"
                                selected={formData.passportExpiryDate}
                                onChange={(date) => handleDateChange(date, 'passportExpiryDate')}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select Passport Expiry Date"
                                className="form-control"
                                style={{ backgroundColor: "black", color: "white" }}
                                required
                            />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <select id="gender" className="form-select" style={{ backgroundColor: "#30333a", color: "white" }} onChange={handleInputChange} required>
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="email" type="email" placeholder="Email" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleInputChange} required />
                        </div>
                    </>
                );

            case 3:
                return (
                    <>
                        <h5 className="text-center mb-3 mt-5" style={{ color: "white" }}>3. ADDITIONAL DATA</h5>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="contactPhoneNumber" placeholder="Contact Phone Number" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="emailAddress" placeholder="Email Address" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="contactInformation" placeholder="Contact Information" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="placeOfStay" placeholder="Place of Stay" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="purposeOfVisit" placeholder="Purpose of Visit" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <DatePicker
                                id="planDateOfEntry"
                                selected={formData.planDateOfEntry}
                                onChange={(date) => handleDateChange(date, 'planDateOfEntry')}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select Plan Date of Entry"
                                className="form-control"
                                style={{ backgroundColor: "black", color: "white" }}
                                required
                            />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <DatePicker
                                id="planDateOfExit"
                                selected={formData.planDateOfExit}
                                onChange={(date) => handleDateChange(date, 'planDateOfExit')}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select Plan Date of Exit"
                                className="form-control"
                                style={{ backgroundColor: "black", color: "white" }}
                                required
                            />
                        </div>
                    </>
                );

            case 4:
                return (
                    <>
                        <h5 className="text-center mb-3 mt-5" style={{ color: "white" }}>4. PHOTO AND DOCUMENT</h5>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="photo" type="file" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleFileInputChange} required />
                        </div>
                        <h6 className="text-center mb-3 mt-5" style={{ color: "white" }}>Additional Documents</h6>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="document1" type="file" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleFileInputChange} required />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="document2" type="file" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleFileInputChange} required />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="document3" type="file" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleFileInputChange} required />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="document4" type="file" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleFileInputChange} required />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <input id="document5" type="file" className="form-control" style={{ backgroundColor: "black", color: "white" }} onChange={handleFileInputChange} required />
                        </div>
                    </>
                );

            case 5:
                return (
                    <>
                        <h5 className="text-center mb-5 mt-5" style={{ color: "white" }}>Review and Confirm</h5>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="country" className="form-label">Passport Country:</label>
                            <input id="country" className="form-control" value={formData.country} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="passportType" className="form-label">Passport Type:</label>
                            <input id="passportType" className="form-control" value={formData.passportType} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="firstName" className="form-label">First Name:</label>
                            <input id="firstName" className="form-control" value={formData.firstName} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="lastName" className="form-label">Last Name:</label>
                            <input id="lastName" className="form-control" value={formData.lastName} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
                            <input id="dateOfBirth" className="form-control" value={formData.dateOfBirth ? formData.dateOfBirth.toLocaleDateString() : ''} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="passportNumber" className="form-label">Passport Number:</label>
                            <input id="passportNumber" className="form-control" value={formData.passportNumber} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="passportIssueDate" className="form-label">Passport Issue Date:</label>
                            <input id="passportIssueDate" className="form-control" value={formData.passportIssueDate ? formData.passportIssueDate.toLocaleDateString() : ''} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="passportExpiryDate" className="form-label">Passport Expiry Date:</label>
                            <input id="passportExpiryDate" className="form-control" value={formData.passportExpiryDate ? formData.passportExpiryDate.toLocaleDateString() : ''} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="gender" className="form-label">Gender:</label>
                            <input id="gender" className="form-control" value={formData.gender} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input id="email" className="form-control" value={formData.email} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="contactPhoneNumber" className="form-label">Contact Phone Number:</label>
                            <input id="contactPhoneNumber" className="form-control" value={formData.contactPhoneNumber} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="emailAddress" className="form-label">Email Address:</label>
                            <input id="emailAddress" className="form-control" value={formData.emailAddress} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="contactInformation" className="form-label">Contact Information:</label>
                            <input id="contactInformation" className="form-control" value={formData.contactInformation} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="placeOfStay" className="form-label">Place of Stay:</label>
                            <input id="placeOfStay" className="form-control" value={formData.placeOfStay} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="purposeOfVisit" className="form-label">Purpose of Visit:</label>
                            <input id="purposeOfVisit" className="form-control" value={formData.purposeOfVisit} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="planDateOfEntry" className="form-label">Plan date of Entry:</label>
                            <input id="planDateOfEntry" className="form-control" value={formData.planDateOfEntry ? formData.planDateOfEntry.toLocaleDateString() : ''} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="planDateOfExit" className="form-label">Plan Date Of Exit:</label>
                            <input id="planDateOfExit" className="form-control" value={formData.planDateOfExit ? formData.planDateOfExit.toLocaleDateString() : ''} readOnly />
                        </div>
                        <div className="mb-3" style={{ width: "50%", margin: "0 auto" }}>
                            <label htmlFor="message" className="form-label">Message:</label>
                            <input id="message" className="form-control" value={formData.message} readOnly />
                        </div>

                    </>
                );

            case 6:
                return (
                    <>

                        <div className="container" style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
                            
                            <h2 style={{ marginTop: "60px" }}>MINISTRY OF FOREIGN AFFAIRS OF THE KYRGYZ REPUBLIC</h2>
                            
                            <h4 style={{ margin: "30px 0" }}>E-Visa</h4>
                            <hr style={{ border: "2px solid", borderColor: "black", width: "100%", margin: "20px auto" }} />

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", padding: "0 100px" }}>
                                <div style={{ flex: "1", textAlign: "left" }}>
                                    
                                    {formData.photo && <img src={URL.createObjectURL(formData.photo)} alt="Uploaded photo" style={{ maxWidth: '100%', height: 'auto' }} />}
                                </div>
                                <div style={{ flex: "1", textAlign: "right" }}>
                               
                                    <img src={ima} alt="QR Code" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            </div>

                            <div style={{ display: "flex", justifyContent: "space-between", padding: "0 100px" }}>

                                <h5 className='display-6'>Full name:</h5>  <h5 className='display-6'> {formData.firstName} {formData.lastName}</h5>

                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", padding: "0 100px" }}>

                                <h5 className='display-6'>Date of birth:</h5>  <h5 className='display-6'> {formData.dateOfBirth?.toLocaleDateString()}</h5>

                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", padding: "0 100px" }}>

                                <h5 className='display-6'>Citizenship:</h5>  <h5 className='display-6'> {formData.country}</h5>

                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", padding: "0 100px" }}>

                                <h5 className='display-6'>Number of travel document (Passport):</h5>  <h5 className='display-6'>{formData.passportNumber}</h5>

                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", padding: "0 100px" }}>

                                <h5 className='display-6'>Date of issue of travelling document (passport):</h5>  <h5 className='display-6'>{formData.passportIssueDate?.toLocaleDateString()}</h5>

                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", padding: "0 100px" }}>

                                <h5 className='display-6'>Date of expiry of the travelling document (passport):</h5>  <h5 className='display-6'>{formData.passportExpiryDate?.toLocaleDateString()}</h5>

                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", padding: "0 100px" }}>

                                <h5 className='display-6'>Validity of Visa:</h5>  <h5 className='display-6'>{formData.planDateOfEntry?.toLocaleDateString()} - {formData.planDateOfExit?.toLocaleDateString()}</h5>

                            </div>
                            {/*                            
                           
                                    

                                    <p><strong>Validity of Visa:</strong> {formData.planDateOfEntry?.toLocaleDateString()} - {formData.planDateOfExit?.toLocaleDateString()}</p> */}
                            <h4 style={{ marginTop: "20px", paddingLeft: "100px", paddingRight: "100px", paddingBottom: "200px" }}>
                                Validity period of a visa is generally longer than the period of stay. The validity period establishes the first and last dates during which the visa can be used. Period of stay indicates the length of time you have permission to remain in Kyrgyzstan within the validity period of the visa.
                            </h4>
                        </div>

                        
                    </>
                );
            // Add more cases for other steps as needed
            default:
                return null;
        }
    };

    return (
        <div>
            <form>
                {renderFormFields()}

                <div className="text-center mt-4">
                    {/* <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button> */}
                </div>
            </form>
        </div>
    );
};

export default VisaForm;
