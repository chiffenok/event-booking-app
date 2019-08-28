const expess = require('express');

const app = expess();

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(3000);
