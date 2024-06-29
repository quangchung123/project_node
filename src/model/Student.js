import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";

const { Schema, Types } = mongoose;

const Student = new Schema({
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
	languages: {
		type: [String]
	},
	gender: {
		type: String,
		enum: {
			values: ['Males', 'Female'],
			message: '{VALUE} is not supported'
		},
		required: true
	},
	phoneNumber: {
		type: String,
		required: true,
		validate: {
			validator: (phoneNumber) => phoneNumber.length > 5,
			message: 'Phone number must be at least 5 characters'
		}
	},
	address: {
		type: String,
		required: false
	}
},
);

export default mongoose.model('Student', Student);
