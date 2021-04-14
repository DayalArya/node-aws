const http = require('http');
const app = require('./app.js');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

dotenv.config();

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
    connectDB();
    console.log(`server started on the port ${PORT}`);
});
