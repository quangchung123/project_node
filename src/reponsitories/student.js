const getAllStudents = async ({
	page,
	size,
	searchString
}) => {
	console.log('Get all student with paging')
}
const insertStudent = async ({
	name,
	email,
	languages,
	gender,
	phoneNumber,
	address
}) => {
	console.log('Insert student with paging')
}

export default {
	getAllStudents,
	insertStudent
}