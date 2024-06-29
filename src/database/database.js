import mongoose from "mongoose";
import {print, OutputType} from "../helper/print.js";

async function connect() {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		print("Connect mongoDB successfully", OutputType.SUCCESS);
		return connection;
	} catch (e) {
		debugger
		throw new Error('Cannot connect to MongoDB')
	}
}
export default connect;
