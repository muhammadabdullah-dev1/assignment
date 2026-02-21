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




// function firstDayOfMonth() {

//     const today=new Date();
//       const monthNames = [
//         "January", "February", "March", "April",
//         "May", "June", "July", "August",
//         "September", "October", "November", "December"
//     ];
//     const MonthName= monthNames[today.getMonth()];
//     const fullYear=today.getFullYear();

//     return `${today},${MonthName},${1}`
// }
// console.log(firstDayOfMonth());





// question 6

// function timeChecker(pastTime) {
//     const past = new Date(pastTime)
//     const currentTime = new Date()

//     const diff = currentTime - past
//     // const convertSec = diff / (1000)
//     // const convertMin = diff / (1000 * 60)
//     // const conevertHour = diff / (1000 * 60 * 60)

//        if (diff < 0) {
//         return "In the future";
//     }
//     const second = Math.floor(diff / 1000)
//     if (second < 60) {
//         return "Just now"
//     }

//     const minutes=Math.floor(second/60)

//     if (minutes < 60) {
//         return minutes + "minutes ago"
//     }
//     const hours=Math.floor(minutes/60)
//     if (hours< 24) {
//         return hours + "hour ago"
//     }
//       const day=Math.floor(hours/24)
//     if (day< 24) {
//         return day+ " day ago"
//     }
// }

// console.log(timeChecker("2026-02-17T14:43:00"));






// ---------------------
// quetion no7




function name(params) {
    
}