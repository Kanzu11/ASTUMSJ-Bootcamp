const dotenv = require('dotenv');
dotenv.config();
module.exports={
    port: process.env.PORT || 3000,
    appName: process.env.APP_NAME || 'Project Tacker',
    MONGO_URI: process.env.MONGO_URI
};