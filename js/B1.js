/**
 * 
 * input
 * num1,num2,num3
 * 
 * Các bước xử lý
 * 
 * B1: tìm các thẻ bằng id
 * B2: tạo hàm 
 *      + lấy giá trị từ form
 *      + Nếu num1<num2<num3 => num1,num2,num3
 *      + Nếu num1<num3<num2 => num1,num3,num2
 *      + Nếu num2<num3<num1 => num2,num3,num1  
 *      + Nếu num2<num1<num3 => num2,num1,num3
 *      + Nếu num3<num1<num2 => num3,num1,num2
 *      + ngược lại 
 *          num3<num2<num1 => num3,num2,num1
 *      + Hiển thị kết quả
 * B3: gắn sự kiện onlick.
 * 
 * 
 * 
 * output: num1,num2,num3
 */

//! Bài làm

function giaTriTangDan() {
    var num1 = document.getElementById("soNguyen1").value;
    var num2 = document.getElementById("soNguyen2").value;
    var num3 = document.getElementById("soNguyen3").value;

    num1=Number(num1);
    num2=Number(num2);
    num3=Number(num3);
    

    var sapXep = "" ;


    if(num1 < num2 && num2 < num3){
       
         sapXep = num1 + "<" + num2  + "<" + num3 ;
        

    }else if(num1 < num3 && num3 < num2){
        
         sapXep = num1 + "<" + num3 + "<" + num2;

    }else if(num2 < num3 && num3 < num1){
       
         sapXep = num2 + "<" + num3 + "<" + num1;

    }else if(num2 < num1 && num1 < num3){

         sapXep = num2 + "<" + num1 + "<" + num3;

    }else if(num3 < num1 && num1 < num2){

         sapXep = num3 + "<" + num1 + "<" + num2;

        
    }else if(num3 < num2 && num2 < num1){
        sapXep = num3 + "<" + num2 + "<" + num1;
    }
    else{
         sapXep = "Không thể so sánh";
    }
    document.getElementById("num").innerHTML ="Sắp xếp: " + sapXep;
}