require('dotenv').config();
const express = require('express');
const pgp = require('pg-promise')();
const http = require('http');
const cors = require('cors');
const bp = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = "3001";
var db = pgp(`postgres://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}`)

app.use(cookieParser());

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(cors({
    origin: true, // Should whitelist cross site or just disable when in production system.
    credentials: true,
}));

app.use(session({
    secret: process.env.ss, // Even more secure way to store secret would be in dedicated secret manager (e.g. AWS Secrets Manager).
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        sameSite: 'Lax',
    }
}));

app.post('/jobsource/jobs', (req, res) => {
    if (!req.body.job_source) res.status(400).json({ 'message': 'No job source given in request' });

    db.many(`SELECT * FROM jobs WHERE job_source=$1 ORDER BY id DESC`, req.body.job_source)
        .then(function (data) {
            res.status(200).json({
                jobs: data,
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error);
            res.status(200).send(error);
        });
});

app.get('/jobsource/', (req, res) => {
    db.many(`SELECT * FROM boards`)
        .then(function (data) {
            res.status(200).json({
                boards: data,
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error);
            res.status(200).send(error);
        });
});

app.listen(port, () => {
    console.log(`Listening`)
});