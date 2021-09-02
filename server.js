const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors=require('cors')
const bodyParser=require('body-parser')
const passport = require('passport')
const cookieParser = require('cookie-parser');
const passportLocal = require('passport-local').Strategy;
//const favicon = require('express-favicon');---------OPOP
require('./passportConfig')(passport);
require('dotenv').config({path:"./.env"})
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser())
// app.use(favicon(__dirname + '../public/favicon.png')); //---------OPOP


// DB config
// const db = require('./config/keys').MongoURI;











// connect to mongo
mongoose.connect(`${process.env.MONGODB_URI}`, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true
})
    .then(() => console.log("Connected to MongoDB..."))
    .catch( err => console.log(err));

// body parser
app.use(express.urlencoded({extended: false}))

// routes
// app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

//register
// app.get('/signup', (req, res)=>{
//     res.send("register page")
// })

// // register handle 
// app.post('/signup' , (req, res)=>{

//     User.findOne({ username: req.body.username}, async (err, doc)=>{
//         if(err) throw err;
//         if(doc) return res.send('User already exists...')

//         if(!doc){
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);

//             const user = await User.create({
//                 username: req.body.username,
//                 email: req.body.email,
//                 password: hashedPassword
//             })
            
//             // user.tokens.push({token});

//             await user.save();
//             console.log('User created...')
//             res.send('User created...')
//         }
//     })
// })


app.get('/user', (req, res)=>{
    res.send(req.user);
})

app.get('/dashboard',  (req, res)=>{
    console.log("my cookie: ", req.cookies)
    res.send('hbdjcd')
})

app.get('/logout', function(req, res){
    console.log('logout')
    req.logout();
    res.redirect('/');
  });



  
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client',  'build', 'index.html'));
    })
}else{
    app.get('/', (req, res)=>{
        res.send('Api running...');
    })
}



const PORT = process.env.PORT || 5000;
console.log("dirrrrrr",path.resolve(__dirname, '..',  'build', 'index.html'))

app.listen( PORT , console.log(`Listening on port ${PORT}...`));