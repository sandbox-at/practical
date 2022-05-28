require('dotenv').config()


console.log(process.env.ENV);
console.log(process.env.APP_SECRET_KEY);


if (process.env.ENV === 'development') {
} else {
}