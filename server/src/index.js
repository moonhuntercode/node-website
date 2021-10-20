const express = require('express');
const cors=require("cors");
const app = express();
app.use(cors());

// app.get('/', (req, res) => {
// console.log("server on");
// })

const server =app.listen(3000, () => 
 console.log('Server ready on port http://localhost:3000'));

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})