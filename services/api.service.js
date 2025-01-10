//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
import https from 'https';
import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error("API mavjud emas, -t [API_KEY] ni saqlash uchun foydalaning");
    }
const response=await axios.get("https://api.openweathermap.org/data/2.5/weather",{
    params:{
        q:city,
        appid:token,
        lang:'en',
        units:"metric",
    },
  
})
     console.log(response.data)
//bu pastdagi code biz uchun noqulay uning o'rniga axios ishlatazmiz
//     const url = new URL('https://api.openweathermap.org/data/2.5/weather')
//     url.searchParams.append('q', city);
//     url.searchParams.append('appid', token);
//     url.searchParams.append('lang', 'en');
//     url.searchParams.append('units', 'metric');

//     https.get(url, (response) => {
//         let res = '';
//         response.on('data', (chunk) => {
//             res += chunk;
//         });
//         response.on('end', () => {
//             console.log(res);
//         });
//     });
};

export { getWeather };
