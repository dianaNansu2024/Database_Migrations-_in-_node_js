const express = require("express");
const router = express.Router();
const { Course } = require("../models");

// Create a course
router.post("/courses", async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all courses
router.get("/courses", async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get course by ID
router.get("/courses/:id", async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update course
router.put("/courses/:id", async (req, res) => {
    try {
        const [updated] = await Course.update(req.body, { where: { id: req.params.id } });
        if (!updated) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.json({ message: "Updated successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete course
router.delete("/courses/:id", async (req, res) => {
    try {
        const deleted = await Course.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;