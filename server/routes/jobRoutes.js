const express = require('express');
const Job = require('../models/job.model');

const router = express.Router();

// Add Job
router.post('/add', async (req, res) => {
    const jobData = req.body;
    try {
        const newJob = new Job(jobData);
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get All Jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
