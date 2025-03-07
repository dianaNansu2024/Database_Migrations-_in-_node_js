const express = require("express");
const router = express.Router();
const { Teacher } = require("../models");

// Create a teacher
router.post("/teachers", async (req, res) => {
    try {
        const teacher = await Teacher.create(req.body);
        res.status(201).json(teacher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all teachers
router.get("/teachers", async (req, res) => {
    try {
        const teachers = await Teacher.findAll();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get teacher by ID
router.get("/teachers/:id", async (req, res) => {
    try {
        const teacher = await Teacher.findByPk(req.params.id);
        if (!teacher) {
            return res.status(404).json({ error: "Teacher not found" });
        }
        res.json(teacher);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update teacher
router.put("/teachers/:id", async (req, res) => {
    try {
        const [updated] = await Teacher.update(req.body, { where: { id: req.params.id } });
        if (!updated) {
            return res.status(404).json({ error: "Teacher not found" });
        }
        res.json({ message: "Updated successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete teacher
router.delete("/teachers/:id", async (req, res) => {
    try {
        const deleted = await Teacher.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ error: "Teacher not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;