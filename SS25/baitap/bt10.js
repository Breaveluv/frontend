/*Cửa hàng sẽ bán các sản phẩm số lượng và giá được lưu vào trong mảng sau:

let products= [ [“mì tôm”, 5, 5000], [“bánh mì”, 12, 15000], [“bánh bao”, 5, 8000], [“mèn mén”, 30, 20000]]

Khởi tạo giỏ hàng let cart=[]

Viết chương trình  cho phép người dùng:

Xem danh sách sản phẩm có sẵn trong cửa hàng.
Chọn sản phẩm để mua bằng cách nhập tên sản phẩm.
Sản phẩm không có trong cửa hàng hiển thị thông báo.
Sản phẩm có trong cửa hàng khi mua số lượng sẽ giảm đi một, khi số lượng về 0 thì thông báo sản phẩm đã hết.
Sản phẩm khi mua đã có trong giỏ hàng thì tăng số lượng lên một
            VD giỏ hàng sau khi mua:  [[“mèn mén”, 4, 20000], [“bánh bao”, 3, 8000]]

Tính tổng tiền và hiển thị hóa đơn.
Thoát chương trình.*/
 

    

let products= [ ["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5,
8000], ["mèn mén", 30, 20000]];
let cart=[];
let total=0;
let check=true;
let check1=true;
let check2=true;
let check3=true;
let check4=true;
let check5=true;
let check6=true;
let check7=true;
let check8=true;
let check9=true;
let check10=true;
let check11=true;
let check12=true;
let check13=true;


while(check){   
    let input=prompt("1. Xem danh sách sản phẩm có sẵn trong cửa hàng \n2. Chọn sản phẩm để mua \n3. Tính tổng tiền và hiển thị hóa đơn \n4. Thoát chương trình");
    if(input=="1"){
        for(let i=0;i<products.length;i++){
            console.log(products[i]);
        }
    }
    else if(input=="2"){
        let product=prompt("Nhập tên sản phẩm bạn muốn mua: ");
        if(product=="mì tôm"){
            if(products[0][1]>0){
                if(check1){
                    cart.push([products[0][0],1,products[0][2]]);
                    products[0][1]--;
                    check1=false;
                }
                else{
                    cart[0][1]++;
                    products[0][1]--;
                }
            }
            else{
                console.log("Sản phẩm đã hết");
            }
        }
        else if(product=="bánh mì"){
            if(products[1][1]>0){
                if(check2){
                    cart.push([products[1][0],1,products[1][2]]);
                    products[1][1]--;
                    check2=false;
                }
                else{
                    cart[1][1]++;
                    products[1][1]--;
                }
            }
            else{
                console.log("Sản phẩm đã hết");
            }
        }
        else if(product=="bánh bao"){
            if(products[2][1]>0){
                if(check3){
                    cart.push([products[2][0],1,products[2][2]]);
                    products[2][1]--;
                    check3=false;
                }
                else{
                    cart[2][1]++;
                    products[2][1]--;
                }
            }
            else{
                console.log("Sản phẩm đã hết");
            }
        }
        else if(product=="mèn mén"){
            if(products[3][1]>0){
                if(check4){
                    cart.push([products[3][0],1,products[3][2]]);
                    products[3][1]--;
                    check4=false;
                }
                else{
                    cart[3][1]++;
                    products[3][1]--;
                }
            }
            else{
                console.log("Sản phẩm đã hết");
            }
        }  
        else{
            console.log("Sản phẩm không có trong cửa hàng");
        }
    }
    else if(input=="3"){
        for(let i=0;i<cart.length;i++){
            total+=cart[i][1]*cart[i][2];
        }
        console.log(cart);
        console.log("Tổng tiền: "+total);
    }
    else if(input=="4"){
        check=false;
    }
    else{
        console.log("Nhập sai");
    }
}



