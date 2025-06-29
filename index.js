const express = require('express');
const app = express();
const port = 4000;
const members = [
  { id: 1, name: 'Amit', age: 21, course: 'BCA', },
  { id: 2, name: 'Priya', age: 22, course: 'MCA', },
  { id: 3, name: 'Ravi', age: 20, course: 'B.Tech' },
  { id: 4, name: 'Sonal', age: 23, course: 'MBA' },
  { id: 5, name: 'Neha', age: 24, course: 'BBA' },
  { id: 6, name: 'Rohan', age: 22, course: 'M.Tech' },
  { id: 7, name: 'Anjali', age: 21, course: 'B.Com' },
  { id: 8, name: 'Karan', age: 25, course: 'MBA' },
  { id: 9, name: 'Meena', age: 23, course: 'B.Sc' },
  { id: 10, name: 'Tarun', age: 20, course: 'M.Sc' }
];

// GET route to send 10 members
app.get('/', (req, res) => {
  res.json(members);
});

// Start the server
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});

