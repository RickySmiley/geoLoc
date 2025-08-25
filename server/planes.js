import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

const options = {
	method: "GET",
	url: `https://api.aviationstack.com/v1/flights?access_key=${process.env.API_KEY}`,
};

try{
	const response = await axios.request(options);
	const data = JSON.parse(response.data);
	console.log(data);


} catch (e) {
	console.error(e);

}