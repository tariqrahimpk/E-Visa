// models/VisaApplication.js
const mongoose = require('mongoose');

const visaApplicationSchema = new mongoose.Schema({
  country: String,
  passportType: String,
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  passportNumber: String,
  passportIssueDate: Date,
  passportExpiryDate: Date,
  gender: String,
  email: String,
  contactPhoneNumber: String,
  emailAddress: String,
  contactInformation: String,
  placeOfStay: String,
  purposeOfVisit: String,
  planDateOfEntry: Date,
  planDateOfExit: Date,
  message: String,
  photo: String,
  document1: String,
  document2: String,
  document3: String,
  document4: String,
  document5: String,
});

module.exports = mongoose.model('VisaApplication', visaApplicationSchema);
