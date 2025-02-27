let ngay1str=new Date("2025-03-12");
let ngay2str=new Date("2025-02-16");
let chenhLechtime=Math.abs(ngay1str-ngay2str)/(1000*60*60*24);
document.write("Số ngày chênh lệch là ",chenhLechtime)