import {ObjectId, Schema} from "mongoose";
import mongoose from "mongoose";

const Class = mongoose.model('Class',
	new Schema({
		id: {type: ObjectId},
		name: {
			type: String,
			required: true,
			validate: {
				validator: () => this.name.length > 3,
				message: `Class's name must be at least 4 character.Eg: C2110I `
			}
		}
	})
)
export default Class