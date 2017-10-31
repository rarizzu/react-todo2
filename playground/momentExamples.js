var moment = require("moment");



//time stamps are a single number, and represent a number since the unix epic
//January 1st 1970 @ 12:00am is when the universal time for moment begins



// var timeStamp = 1509468851;
// var currentMoment = moment.unix(timeStamp);
// console.log('currentMoment', currentMoment.format('MMM D, Y @ h:mm a'));


//January 3rd, 2017 @ 12:13 AM
var timeStamp = moment().format('MMMM Do YYYY @ H:mm A');

console.log(timeStamp);






