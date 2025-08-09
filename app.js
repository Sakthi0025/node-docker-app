const express = require('express');
const app = express();

app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send('jenkins automated deployment!');
=======
    res.send('Hello from CI/CD DEMO!');
>>>>>>> 7df1422 (updated by sakthi)
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
