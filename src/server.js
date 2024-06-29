import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config(); //must have
import {
	usersRouter,
	studentsRouter
} from './routes/index.js'
import connect from "./database/database.js";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

//routers
app.use('/users', usersRouter);
app.use('/students', studentsRouter);

app.get('/', (req, res) => {
	res.send('Response from server haha')
})
app.listen(port, async() => {
	await connect();
	console.log(`Listening on port: ${port}`)
})
