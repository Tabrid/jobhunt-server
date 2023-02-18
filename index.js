const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());


const topit = require('./Data/topit.json');
const fresherjob = require('./Data/fresherjob.json');
const expriencedjob = require('./Data/expriencedjob.json');


// // geet single course by course_id 
// app.get('/course/:course_id', (req, res) => {
//     console.log(req.params.course_id);
//     const course_id = parseInt(req.params.course_id);
//     const course = courses.find( c => c.id == course_id)
//     res.send(course);
// })


// get all top it 
app.get('/topit', (req, res) => {
    res.send(topit);
})

// get all fresherjob 
app.get('/fresherjob', (req, res) => {
    res.send(fresherjob);
})

// get all expriencedjob 
app.get('/expriencedjob', (req, res) => {
    res.send(expriencedjob);
})


app.get('/', (req, res) => {
    res.send("Fun Code server is running");
})



app.listen(port, () => {
 console.log(`Fun Code Running On Port ${port}`);
})