const expess = require('express');

const app = expess();

app.get('/', (req, res) => {
    res.send('test');
});

app.listen(3000);
