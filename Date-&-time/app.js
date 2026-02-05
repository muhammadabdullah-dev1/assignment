// let currentDate= new Date()
// console.log(currentDate);
// // console.log(typeof currentDate);
// console.log(currentDate.toString());





// function frormattedDate(date){
//     const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// ];
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December"
// ];
// const dayName=days[date.getDay()];
// const dateNum=date.getDate();
// const monthName=months[date.getMonth()];
// return `${dayName},${dateNum},${monthName}`
// }
// console.log(frormattedDate(new Date()));




// function formattingDate(date) {
//         const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// ];
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December"
// ];

// const newDate=days[date.getDate()];
// const newMonth=months[date.getMonth()];
// const dayName=date.getDay();
// const fullYear=date.getFullYear();
// return `${newDate},${newMonth},${dayName},${fullYear}`
    
// }
// console.log(formattingDate(new Date()));



// function gettime(startTime,endTime) {
//     const start= new Date(startTime);
//     const end=new Date(endTime)
    
//     const newTime=end-start;
//     const convertMnSec= newTime/(1000*60);
//     return convertMnSec;
// }
// const passedTime=gettime("2026-02-05T10:00", "2026-02-05T10:45")
// console.log(passedTime);



// function calculateAge(userBirth) {
//     let currentDate=new Date().getTime();
//     let birthDate=new Date(userBirth).getTime();
//     let yourAge=currentDate-birthDate;


//     return Math.floor(yourAge /1000/60/60/24/365)
// }
// console.log(calculateAge("2004-10-17"));

