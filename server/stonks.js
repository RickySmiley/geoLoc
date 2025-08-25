
import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();

const options = {
	method: "GET",
	url: `https://api.marketstack.com/v2/eod?access_key=${process.env.API_KEY}&symbols=BA&interval=1min`,
};

try{

	const response = await axios.request(options);
	console.log(response.data);
} catch (error){
	console.error(error)
}