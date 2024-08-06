// // * --- Problem 1 ------------------- * //
// let date = new Date();

// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// let dateIs = date.getDate();
// let hour = date.getHours();
// let minute = date.getMinutes();
// let second = date.getSeconds();

// console.log(`
//     Year ${year}
//     Month ${month}
//     Date ${dateIs}
//     Hour ${hour}
//     Minute ${minute}
//     Second ${second}
// `);

// // * --- Problem 2 ------------------- * //
// let date = new Date('Jul 4, 2024, 12:00');
// console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`);

// // * --- Problem 3 ------------------- * //
// let date = new Date(2024, 6, 4, 12, 0);
// date.setFullYear(2025);
// date.setMonth(11); // December
// date.setDate(25);

// let newYear = date.getFullYear();
// let newMonth = date.getMonth() + 1;
// let newDate = date.getDate();
// let updatedDate = `${newYear}-${newMonth}-${newDate}`;

// console.log(updatedDate);

// // * --- Problem 4 ------------------- * //
// let dob = new Date(2003, 2, 24);
// let dayOfTheWeek = dob.getDay();

// let weekDays = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday'
// ];

// console.log(weekDays[dayOfTheWeek]);

// // * --- Problem 5 ------------------- * //
// let currentYear = new Date().getFullYear();
// let startOfYear = new Date(currentYear, 0, 1, 0, 0, 0);

// console.log(`${startOfYear.getFullYear()}-${startOfYear.getMonth() + 1}-${startOfYear.getDate()} ${startOfYear.getHours()}:${startOfYear.getMinutes()}`);

// // * --- Problem 6 ------------------- * //
// let date = new Date();
// date.setDate(date.getDate() + 5);

// console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
