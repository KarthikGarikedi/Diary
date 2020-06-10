const express = require('express');
const path = require('path')

const  connectDB = require('./config/db')

const app = express();


connectDB();

// // initializing middleware to transmit data 
app.use(express.json({extended:false}))

//defining routes
app.use('/api/users',require('./routes/Users'))
app.use('/api/auth',require('./routes/Auth'))
app.use('/api/notes',require('./routes/Notes'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('main/build'));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'main', 'build', 'index.html'))
    );
  }


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})