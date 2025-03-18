let products = [  
    {  
        id: 1,  
        name: "mèn mén",  
        price: 20000,  
        quantity: 20,  
        category: "món ăn dân tộc Mông",  
    },  
    {  
        id: 2,  
        name: "mứt",  
        price: 80000,  
        quantity: 21,  
        category: "món ăn dân tộc Kinh",  
    },  
    {  
        id: 3,  
        name: "cơm lam",  
        price: 40000,  
        quantity: 15,  
        category: "món ăn dân tộc Mông",  
    },  
    {  
        id: 4,  
        name: "bánh đậu xanh",  
        price: 60000,  
        quantity: 30,  
        category: "món ăn dân tộc Kinh",  
    }  
];  
let carts=[];
let choice;
do{
    console.log(`
        1.Hiển thị các sản phẩm theo tên danh mục.
        2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
        3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
        Tăng dần.
        Giảm dần.
        4. Tính số tiền thanh toán trong giỏ hàng.
        5. Thoát.`);
    choice=+prompt(`Mời bạn nhập lựa chọn`);
    switch(choice){
            case 1:
                showProduct();
                break;
            case 2:
                choseProducts();
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
             case 6:
                break;       
            default :
            break;
    }
}while(choice!==6)
    // Hàm hiện thị sản phẩm theo danh mục
    function showProduct(){
        let chose=+prompt(`Moi bạn nhập lựa chọn
            1: Các món ăn dân tộc Kinh
            2:Các  món ăn dân tộc Mông`)
        if(chose==1){
            let abc=products.filter(product=>product.category=="món ăn dân tộc Kinh");
            console.log(abc);
        }else if(chose==2){
            let adc=products.filter(product=>product.category=="món ăn dân tộc Mông");
            console.log(adc);
        }else{
            console.log(`Lua chọn không hợp lệ`)
        }
    }
    // Hàm chọn mua sản phẩm
    function choseProducts(){
        let choseId=+prompt(` Mời bạn nhập id sản phẩm`);
        let indexProduct=products.findIndex(products=>products.id==choseId);
        if(indexProduct==-1){
            console.log(` Sản phẩm không có trong cửa hàng`);
        }else{
            let choseQuantity=+prompt(` Mời bạn nhập số lượng sản phẩm muốn mua`);
            if(products[indexProduct].quantity<choseQuantity){
                console.log(`sản phẩm chỉ còn ${products[indexProduct].quantity}`);
            }else{
                // Trừ số lượng sản phẩm trong cửa hàng
                products[indexProduct].quantity-=choseQuantity;
                // Thêm vào trong giỏ hàng
                // Kiểm tra sản phẩm có trong cửa hàng hay chưa
               let index=carts.findIndex(item=>item.id==choseId);
               if(index==-1){
                // Chứng tỏ sản phẩm không có trong giỏ hàng
                    carts.push({
                        id:choseId,
                        name:products[indexProduct].name,
                        quantity:choseQuantity,
                        price:products[indexProduct].price,
                        category:products[indexProduct].category,
                    })
                    // carts.push({...products[shop],quantity:choseQuantity});
                    console.log(carts);
                    
               }else{
                // Sản phẩm có trong giỏ hàng rồi cập nhập thêm số lượng
                    // carts[index].quantity+=choseQuantity;
                    carts[index].quantity=carts[index].quantity+choseQuantity;
                    console.log(carts);
               }
                
            }
        }


    }
        function sortProduct(){
            let sortCho=+prompt(`Mời bạn nhập lựa chọn 
                                1:Tăng dần
                                2:Giảm dần `);
            if(sortCho==1){
                products.
            }e
        }
       