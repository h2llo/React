const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {type: String, trim: true,unique:1},
    lastname: {type: String, maxlength: 50},
    password: {type: String, minlength: 6},
    role: {type: Number, default: 0},
    image: String,
    token: {type: String, trim: true},
    tokenExp: {type: Number}
})

//user 의 비밀번호를 암호화함 user정보가 저장되기 전에
userSchema.pre('save', function(next){
    var user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);
                user.password = hash;
                next();
            });
        });
    }

})

const User = mongoose.model('User', userSchema);

module.exports = {User};