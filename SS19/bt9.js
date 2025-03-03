let result = "javascript" + 5;
console.log(result); // javascript5
// Giải thích: Dấu + trong trường hợp này là dấu nối chuỗi, nên kết quả sẽ là chuỗi "javascript5"

let result1 = "javascript" - 1;
console.log(result1); // NaN
// Giải thích: Dấu - không thể thực hiện trên chuỗi, nên kết quả sẽ là NaN

let result2 = "3" + 2;
console.log(result2); // 32
// Giải thích: Dấu + trong trường hợp này là dấu nối chuỗi, nên kết quả sẽ là chuỗi "32"

let result3 = "5" - 4;
console.log(result3); // 1  
// Giải thích: Dấu - trong trường hợp này là phép trừ, nên kết quả sẽ là số 1   

let result4 = isNaN("123");
console.log(result4); // false
// Giải thích: Hàm isNaN() trả về true nếu giá trị là NaN, false nếu không phải NaN. Trong trường hợp này, "123" không phải NaN nên kết quả là false

let result5 = isNaN("hello");
console.log(result5); // true
// Giải thích: Hàm isNaN() trả về true nếu giá trị là NaN, false nếu không phải NaN. Trong trường hợp này, "hello" không phải NaN nên kết quả là true

let result6 = Number.isNaN("123");
console.log(result6); // false
// Giải thích: Hàm Number.isNaN() trả về true nếu giá trị là NaN, false nếu không phải NaN. Trong trường hợp này, "123" không phải NaN nên kết quả là false

let result7 = Number.isNaN(NaN);
console.log(result7); // true
// Giải thích: Hàm Number.isNaN() trả về true nếu giá trị là NaN, false nếu không phải NaN. Trong trường hợp này, NaN là NaN nên kết quả là true