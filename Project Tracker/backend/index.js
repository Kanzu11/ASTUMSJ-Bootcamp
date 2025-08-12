// console.log("hi kanzu");
// var logger = require('./logger');

// logger.log('message')

// const EventEmitter = require('events');
// const emitter = new EventEmitter;

// emitter.on('messageLogged',() => {
// console.log('Listener called');

// })

// emitter.emit('messageLogged');

// const express = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const { port, appName } = require('./config/env');
const projectRoutes = require('./routes/routes');
// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/projects', projectRoutes);
// Root route
app.get('/', (req, res) => {
res.send(`${appName} is running...`);
});
// Start server
app.listen(port, () => {
console.log(`${appName} is running at http://localhost:${port}`);
})