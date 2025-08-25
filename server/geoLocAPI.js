
import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();

const options = {
	method: "GET",
	url: `https://api.ipstack.com/72.229.28.185?access_key=${process.env.API_KEY}`,
};

try{
	const response = await axios.request(options);
	console.log(response.data)
} catch (error){
	console.error(error);
}

