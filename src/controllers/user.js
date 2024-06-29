import {validationResult} from "express-validator";
import {
	studentRepository,
	userRepository
} from "../reponsitories/index.js"
import HttpStatusCode from "../exceptions/HttpStatusCode.js";

const login = async (req, res) => {
		const err = validationResult(req);
		if(!err.isEmpty()) {
			return res.status(HttpStatusCode.BAD_REQUEST).json({err: err.array()});
		}
		const {email, password} = req.body;
		await userRepository.login({email, password});
		res.status(HttpStatusCode.OK).json({
			message: "Login user successfully"
		})
}
const register = async (req, res) => {
		const {
			name,
			email,
			password,
			phoneNumber,
			address
		} = req.body;
		await userRepository.register({name, email, password, phoneNumber, address})
		res.status(HttpStatusCode.INSERT_OK).json({
			message: "Register user successfully"
	})
}

const getDetailUser = async (req, res) => {
	res.send("POST register users")
}

export default {
	login,
	register,
	getDetailUser
}