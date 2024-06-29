import HttpStatusCode from "../exceptions/HttpStatusCode.js";

async function getAllStudents(req, res){
	res.status(HttpStatusCode.OK).json({
		message: "Get students successfully",
		data: [
			{
				name: "Nguyen Van A",
				email: "nguyenA@gmail.com",
				age: 18
			},
			{
				name: "Nguyen Van B",
				email: "nguyenB@gmail.com",
				age: 19
			},
			{
				name: "Nguyen Van C",
				email: "nguyenC@gmail.com",
				age: 20
			}
		]
	})
}
async function getStudentById(req, res) {

}
async function updateStudent(req, res) {

}
async function insertStudent(req, res) {

}

export default {
	getAllStudents,
	getStudentById,
	updateStudent,
	insertStudent
}