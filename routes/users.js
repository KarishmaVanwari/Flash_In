const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require ('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config({path:"../.env"})
// const JWT_SECRET = process.env.JWT_SECRET


//login
router.get('/login', (req, res)=>{
    res.send("login page")
})


//register
router.get('/signup', (req, res)=>{
    res.send("register page")
})

// register handle 
router.post('/signup' , (req, res)=>{

    User.findOne({ username: req.body.username}, async (err, doc)=>{
        if(err) throw err;
        if(doc) return res.send('User already exists...')

        if(!doc){
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            })
            
            // user.tokens.push({token});

            await user.save();
            console.log('User created...')
            res.send('User created...')
        }
    })
})


router.post('/login', (req, res, next)=>{
    passport.authenticate("local", (err, user, info)=>{
        if(err) throw err;
        if(!user) res.send("No user exists...")
        else{
            req.logIn(user, err =>{
                if(err) throw err;
                // res.send('Successfully authenticated...')
                console.log("done",req.user);
                // const token = jwt.sign({
                //     userId: user._id,
                //     email: user.email
                // }, JWT_SECRET, { expiresIn: '3h' });
                // console.log(token)
                // res.cookie("jwt", token, {
                //     expires: new Date(Date.now()+ 100000),
                //     httpOnly: true,
                //     // secure: true
                // });


                // setCookie('jwt_token', res.headers.authorization, {
                //     expires: new Date(Date.now()+ 100000),
                    
                // })
                // console.log('cookie set')
                res.json({ message: "Authenticated", auth : true})
                // return res.redirect('/dashboard')
            })
        }
    })(req, res, next);
})

module.exports = router;