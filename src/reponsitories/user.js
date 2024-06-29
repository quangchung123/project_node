import {print, OutputType} from "../helper/print.js";
import {User} from "../model/index.js";
import {Expression} from "mongoose";

const login = async ({email, password}) => {
	print('login user in user repository', OutputType.INFORMATION)
}

const register = async ({name, email, password, phoneNumber, address}) => {
	try {
		let existingUser = await User.findOne({email}).exec();
		if(!!existingUser) {
			throw new Expression
		}
	} catch (exception) {

	}

	print(
		'register user in user repository: name: ' + name+
		' email:' + email +
		' password:' + password +
		' phone:' + phoneNumber +
		' address:' + address
	, OutputType.INFORMATION);
}

export default {
	login,
	register
}