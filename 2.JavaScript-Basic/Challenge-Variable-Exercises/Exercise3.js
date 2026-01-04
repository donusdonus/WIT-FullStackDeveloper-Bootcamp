/*
Exercise 3: โปรแกรมคำนวณเสบียงที่ต้องใช้ในการดำรงชีวิต
- เก็บค่าอายุปัจจุบันของคุณไว้ในตัวแปร age
- เก็บค่าอายุที่คุณคิดว่าคุณจะยังมีชีวิตรอดไว้ในตัวแปร maxAge
- เก็บค่าของเสบียงที่ต้องใช้ในประมาณหนึ่งวัน เช่น เงิน, อาหาร ฯลฯ (ในชนิด number) ไว้ในตัวแปร numPerDay
- คำนวณว่าคุณจะต้องใช้เสบียงทั้งหมดเท่าไหร่ ในการดำรงชีวิตของคุณที่เหลืออยู่ (totalNeeded)
- ผลลัพธ์ของโปรแกรมของคุณ ควรจะแสดงผลได้ดังนี้: "You will need NN to last you until the ripe old age of X." โดยแทนตัวแปรต่าง ๆ ด้วยตัวแปรของคุณเอง

*/

let age = 35;
let maxAge = 80;
let numPerDay = 200;
let totalNeeded = (maxAge-age)*numPerDay*365;

let result = `You will need ${totalNeeded} to last you until the ripe old age of ${maxAge}.`;

console.log(result);