const express = require("express");
const router = express.Router();
const { Student } = require("../models");

// Create a student
router.post("/students", async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all students
router.get("/students", async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get student by ID
router.get("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id); // Fixed typo: findByPK -> findByPk
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update student
router.put("/students/:id", async (req, res) => {
    try {
        const [updated] = await Student.update(req.body, { where: { id: req.params.id } });
        if (!updated) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json({ message: "Updated successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete student
router.delete("/students/:id", async (req, res) => {
    try {
        const deleted = await Student.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;