const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');
const time = require('../time');
const d = new Date();

const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

// GET http://localhost:8080/users
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.find({}, (err, users) => {
        if(err) throw err;
        
        return res.json(users);
    });
});

// GET http://localhost:8080/users/:_id
router.get('/:_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById(req.params._id, (err, user) => {
        if(err) throw err;

        return res.json(user);
    });
});

// POST http://localhost:8080/users/register
router.post('/register',
[
        check('username', 'Username is required.').exists().not().isEmpty(),
		check('email', 'Email is required.').exists().not().isEmpty(),
		check('email', 'Email is invalid.').isEmail(),
		check('password', 'Password is required.').exists().not().isEmpty(),
        check('address.street').exists(),
        check('address.city').exists(),
        check('address.state').exists(),
        check('address.zip_code').exists()
	
], 
(req, res) => {
    const errors = validationResult(req);
    const user = matchedData(req);
    let newUser = new User({
        username: user.username,
        email: user.email,
        password: user.password,
        address: {
            street: user.address.street,
            city: user.address.city,
            state: user.address.state,
            zip_code: user.address.zip_code
        }
    });

    if(!errors.isEmpty()){
        return res.json({success: false, msg: errors.array()[0].msg});
    }

    User.getUserByUsername(newUser.username, (err, username) => {
        if(err) {
            throw err;
        }

        if(username) {
            return res.json({success: false, msg: 'Username is already in use.'})
        }

        User.getUserByEmail(newUser.email, (error, email) => {
            if(error) {
                throw error;
            }
    
            if(email) {
                return res.json({success: false, msg: 'Email is already registered.'})
            }

            User.createUser(newUser, (errors, user) => {
                if(errors){
                    return res.json({success: false, msg: 'Failed to create user.'});
                } else{
                    return res.json({success: true, msg: 'User registered'});
                }
            });
        });
    });

    
});

// PUT http://localhost:8080/users/:id
router.put('/:_id', passport.authenticate('jwt', {session: false}), [
    check('username', 'Username is required.').exists().not().isEmpty(),
    check('email', 'Email is required.').exists().not().isEmpty(),
    check('email', 'Email is invalid.').isEmail(),
    check('address.street').exists(),
    check('address.city').exists(),
    check('address.state').exists(),
    check('address.zip_code').exists()

], (req, res) => {
    const errors = validationResult(req);
    const user = matchedData(req);
    let updatedUser = new User({
        username: user.username,
        email: user.email,
        address: {
            street: user.address.street,
            city: user.address.city,
            state: user.address.state,
            zip_code: user.address.zip_code
        }
    });

    if(!errors.isEmpty()){
        return res.json({success: false, msg: errors.array()[0].msg});
    }
    
    User.updateUser(req.params._id, updatedUser, (err) => {
        if(err){
            return res.json({success: false, error: err});
        } else{
            return res.json({success: true, msg: 'User Updated'});
        }
    });
});

// POST http://localhost:8080/users/authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username.toLowerCase();
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
 
        if(!user){
            return res.json({success: false, msg: 'User could not be found.'});
        }

        User.comparePasswords(password, user.password, (err, isMatch) => {
            if(err) throw err;
 
            if(isMatch) {
                const date = new Date().toLocaleString();
                const exp = '10min';
                const expires_at = time.addTime(new Date(),'m', 10).toLocaleString();
                let token = jwt.sign({data: user}, config.secret, { expiresIn: exp });
                return res.json({
                    success: true,
                    token: token,
                    issued: date,
                    expires_in: exp,
                    expires_at: expires_at
                });
            } else {
                return res.json({success: false, msg: 'Invalid password'});
            }
        });
    });
});

// DELETE http://localhost:8080/users/:_id
router.delete('/:_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.removeUser(req.params._id, (err, result) => {
        if(err) throw err;

        return res.json({success: true, msg: 'User removed', data: result});
    });
})

/* Admin Routes */

// POST http://localhost:8080/users/admin/register
router.post('/admin/register',
[
        check('username', 'Username is required.').exists().not().isEmpty(),
		check('email', 'Email is required.').exists().not().isEmpty(),
		check('email', 'Email is invalid.').isEmail(),
		check('password', 'Password is required.').exists().not().isEmpty()	
], 
(req, res) => {
    const errors = validationResult(req);
    const user = matchedData(req);
    let newUser = new User({
        username: user.username,
        email: user.email,
        password: user.password
    });

    if(!errors.isEmpty()){
        console.log(errors.array());
        return res.status(400).send(errors.array());
    }

    User.createUser(newUser, (err, user) => {
        if(err){
            return res.json({success: false, msg: 'Failed to create user.'});
        } else{
            return res.json({success: true, msg: 'User registered'});
        }
    });
});

// POST http://localhost:8080/users/admin/login
router.post('/admin/login', (req, res, next) => {
    const username = req.body.username.toLowerCase();
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
 
        if(!user || user.username != 'masteraccount'){
            return res.json({success: false, msg: 'User could not be found.'});
        }

        User.comparePasswords(password, user.password, (err, isMatch) => {
            if(err) throw err;
 
            if(isMatch) {
                const date = new Date().toLocaleString();
                const exp = '1h';
                const expires_at = time.addTime(new Date(),'h', 1).toLocaleString();
                let token = jwt.sign({data: user}, config.secret, { expiresIn: exp });
                return res.json({
                    success: true,
                    token: token,
                    issued: date,
                    expires_in: exp,
                    expires_at: expires_at
                });
            } else {
                return res.json({success: false, msg: 'Access Denied'});
            }
        });
    });
});

module.exports = router;