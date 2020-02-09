const express = require('express');
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "course1"},
  { id: 2, name: "course2"},
  { id: 3, name: "course3"},
];
app.get('/', (req,res)=>{
  res.send('Hello world');
});

app.get('/api/courses', (req,res)=>{
  res.send(courses);
});

app.get('/api/courses/:id', (req,res)=>{
  let course = courses.find(c => c.id === parseInt(req.params.id));
  console.log(course);
  if (!course) {
      res.status(404).send('The course with given ID was not found.');
  }
      res.send(course);
});
app.post('/api/courses', (req, res)=>{
  if (!req.body.name || req.body.name.length<3) {
      //400 bad request
      res.status(400).send('name is required and should be minimum 3 character');
      return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(course);
  res.send(course);
})
app.put('/api/courses/:id', (req,res)=>{
  let course = courses.find(c => c.id === parseInt(req.params.id));
  console.log(course);
  if (!course) {
      res.status(404).send('The course with given ID was not found.');
  }
  if (!req.body.name || req.body.name.length<3) {
      //400 bad request
      res.status(400).send('name is required and should be minimum 3 character');
      return;
  }
  course.name = req.body.name;
      res.send(course);
});

app.delete('/api/courses/:id', (req,res)=>{
  let course = courses.find(c => c.id === parseInt(req.params.id));
  console.log(course);
  if (!course) {
      res.status(404).send('The course with given ID was not found.');
      return;
  }
  const index = courses.indexOf(course);
  courses.splice(index,1);
  res.send(course);
});

const port = process.env.PORT || 3000
app.listen(3000, ()=>console.log(`Listening on port ${port}`));






// const http = require('http');
// const server = http.createServer((req,res)=>{
//   if(req.url ==='/'){
//     res.write('Hello world');
//     res.end();
//   }
//   if(req.url ==='/api/courses'){
//     res.write(JSON.stringify([1,2,3]));
//     res.end();
//   }
// })
// server.listen(3000);
// console.log('server listening 3000 port');
