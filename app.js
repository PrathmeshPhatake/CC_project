const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('this is chanegs after implement CI/CD pipeleine in Hello World from Node.js!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});