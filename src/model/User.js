import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";

const { Schema, Types } = mongoose;

const User = new Schema({
	id: {
		type: Types.ObjectId,
		default: () => new Types.ObjectId()
	},
	name: {
		type: String,
		required: true,
		validate: {
			validator: (value) => value.length > 3,
			message: 'Username must be at least 3 characters'
		}
	},
	email: {
		type: String,
		validate: {
			validator: (value) => isEmail(value),
			message: 'Email is in incorrect format'
		}
	},
	password: {
		type: String,
		required: true
	},
	phoneNumber: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: false
	}
});

export default mongoose.model('User', User);
