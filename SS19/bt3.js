
let choice=+prompt("Hãy nhập 1 lựa chọn bất kì")
switch(choice){
    case 1:
        let money1 =+prompt("Hãy nhập số tiền bất kì")    
    let USD=money1/23000;
       
        document.write(`${USD} USD`)
        break;
    default:
        let money2 =+prompt("Hãy nhập số tiền bất kì")
        let vnD=money2*23000;
        document.write(`${vnD} VNĐ`)

    }   