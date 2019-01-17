const express = require('express');
const app = express();

//Adding a piece of middleware
app.use(express.json());

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
]

app.get('/', (req, res) => {
    res.send('Hello!!!!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    //Manually assigning it. Since we are not using a database in this example.
    const course = {
        id: courses.length +1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course); //returning the course object to the client.
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with given ID was ')
    res.send(course);
});


app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port ...' + port));