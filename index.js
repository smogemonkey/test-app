const express = require('express');
const _ = require('lodash');
const $ = require('jquery');

const app = express();
const port = 3000;

// Example of vulnerable code patterns
app.get('/', (req, res) => {
    // Vulnerable to prototype pollution
    const userInput = req.query.input || {};
    const obj = {};
    _.merge(obj, userInput);  // Vulnerable to CVE-2021-23337

    // Vulnerable to XSS
    const userData = req.query.data || '';
    $('#content').html(userData);  // Vulnerable to CVE-2020-11022

    res.send('Demo app with known vulnerabilities');
});

app.listen(port, () => {
    console.log(`Demo app listening at http://localhost:${port}`);
}); 