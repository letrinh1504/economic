const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');


const app = express();

//init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());


// init db 

//init routes
app.get('/',(req, res, next)=>{
    const strCompress = "hello compress"
    return res.status(200).json({
        message: 'welcome',
        metadate : strCompress.repeat(1000)
    })
})

//handling error


module.exports = app;