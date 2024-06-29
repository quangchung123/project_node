import {print, OutputType} from "../helper/print.js";

export default class Exception extends Error {
	static WRONG_DB_USERNAME_PASSWORD = "Wrong database's username and password"
	static WRONG_CONNECTION_STRING = "Wrong server name/connection string"
	static USER_EXIST = "User already exists"
	constructor(message) {
		super(message);
		print(message, OutputType.ERROR)
	}
}