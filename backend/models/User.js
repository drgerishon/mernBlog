const mongooose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongooose.Schema({
    email: {
        type: "string",
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    password: {
        type: 'string',
        required: [true, "can't be blank"]
    },
    tokens: [],

    articles: []
})
//before we save, we need to hash the password
UserSchema.pre('save', function(next){
    const user = this;
    if(!user.isModified('password'))
        return next();
    // if user being created or modified
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        })
    })

})
//let hide the token from the user eg article password, tokens
UserSchema.methods.toJSON = function(){
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    delete userObject.articles;
    return userObject;
}

UserSchema.methods.generateAuthToken = async function(){
    const user = this; 
    const token = jwt.sign({_id: user._id.toString()}, 'appSecret');
    user.tokens = user.tokens.concat({token});
    await user.save();
    return;
}

UserSchema.statics.findByCredentials = async function(email, password){
    const user = await User.findOne({email});
    if(!user) throw new Error('Unable to Login');
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error('invalid email or password');
    //itf there is a match
    return user
}

const User = mongooose.model('User', UserSchema);
module.exports = User; 