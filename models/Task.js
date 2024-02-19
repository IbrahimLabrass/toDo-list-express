const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);
