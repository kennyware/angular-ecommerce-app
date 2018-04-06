const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        index: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: Object,
        street: {
            type: String,
            lowercase: true,
            required: true
        },
        city: {
            type: String,
            lowercase: true,
            required: true
        },
        // State should be full name, not abbreviation
        state: {
            type: String,
            lowercase: true,
            required: true
        },
        zip_code: {
            type: Number,
            required: true
        }
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
    // Using bcryptjs to hash password
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
            if(err) throw err;
	       newUser.password = hash;
	       newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
}

module.exports.getUserByEmail = function(email, callback) {
    const query = {email: email};
    User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.updateUser = function(id, user, callback){
    const query = {$set: {
        username: user.username, 
        email: user.email, 
        address: {
            street: user.address.street, 
            city: user.address.city, 
            state: user.address.state, 
            zip_code: user.address.zip_code
        } 
    }};
    User.findByIdAndUpdate(id, query, callback);
}

module.exports.comparePasswords = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}

module.exports.removeUser = function(id, callback) {
    User.findByIdAndRemove(id, callback);
}
