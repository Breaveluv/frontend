let  students=[

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }

   ];
   let average=0;
   let líst=[];
    for (let i = 0; i < students.length; i++) {
         average=(students[i].scores.math+students[i].scores.english+students[i].scores.literature)/3;
        if(average>=8){
            líst.push(students[i].name + " - " + average);
        }
         
    }
    console.log(líst);
 
