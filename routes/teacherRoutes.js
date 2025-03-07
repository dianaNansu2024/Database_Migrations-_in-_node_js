const express = require("express");
const router = express.Router();
const { Assignment } = require("../models");

// Create an assignment
router.post("/assignments", async (req, res) => {
    try {
        const assignment = await Assignment.create(req.body);
        res.status(201).json(assignment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all assignments
router.get("/assignments", async (req, res) => {
    try {
        const assignments = await Assignment.findAll();
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get assignment by ID
router.get("/assignments/:id", async (req, res) => {
    try {
        const assignment = await Assignment.findByPk(req.params.id);
        if (!assignment) {
            return res.status(404).json({ error: "Assignment not found" });
        }
        res.json(assignment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update assignment
router.put("/assignments/:id", async (req, res) => {
    try {
        const [updated] = await Assignment.update(req.body, { where: { id: req.params.id } });
        if (!updated) {
            return res.status(404).json({ error: "Assignment not found" });
        }
        res.json({ message: "Updated successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete assignment
router.delete("/assignments/:id", async (req, res) => {
    try {
        const deleted = await Assignment.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ error: "Assignment not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;