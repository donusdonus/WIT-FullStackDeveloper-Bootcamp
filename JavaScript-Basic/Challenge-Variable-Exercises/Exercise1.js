/*
Exercise 1: ทำไมคุณจะต้องไปเสียเงินเพื่อดูดวง ในเมื่อคุณสามารถเขียนโปรแกรมในการดูดวงอย่างง่ายได้ด้วยตัวเองแล้ว? 

สร้างตัวแปรต่าง ๆ เพื่อเก็บค่าดังต่อไปนี้: 
    - numKids คือจำนวนลูกของคุณในอนาคต, 
    - partner คือชื่อของคนที่คุณจะได้แต่งงานด้วย, 
    - geoLocation คือที่อยู่ของคุณในอนาคต, 
    - jobTitle คืองานที่คุณจะทำในอนาคต

ผลลัพธ์ของโปรแกรมของคุณ ควรจะแสดงผลได้ดังนี้: 
    "You will be a jobTitle in geoLocation, and married to partner with numKids kids." โดยแทนตัวแปรต่าง ๆ ด้วยตัวแปรของคุณเอง 
*/

let numKids = 1;
let partner = 1;
let geoLocation = "Chonburi";
let jobTitle = "EmbeddedSoftware";

let result = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partner} with ${numKids} kids.`;

console.log(result);