const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Ongoing', 'Completed'], default: 'Ongoing' }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
