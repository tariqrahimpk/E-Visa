// routes/visaRoutes.js
const express = require('express');
const router = express.Router();
const VisaApplication = require('../models/VisaApplication');

// POST route to save visa application
router.post('/', async (req, res) => {
  try {
    const newApplication = new VisaApplication(req.body);
    await newApplication.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
