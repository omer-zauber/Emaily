const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleID: {
		type: String,
		required: true,
		unique: true,
	},
	credits: {
		type: Number,
		default: 0,
	},
});

mongoose.model('users', userSchema);
