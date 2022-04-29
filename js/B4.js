/**
 * input
 * a, b ,c
 * 
 * các bức xử lý
 * B1: tìm thẻ bằng id
 * B2: tạo hàm
 *      + Lấy giá trị từ form
 *      + Lập công thức tính toán
 *      + Kiểm tra 3 cạnh có phải là 1 tam giác không
 *      + Nếu a + b bé hơn bằng c => Không hợp lệ
 *        Hoặc a + c bé hơn bằng b => Không hợp lệ
 *        Hoặc b + c bé hơn bằng a => Không hợp lệ
 *      + Ngược lại
 *          + Nếu a = b = c => tamGiac đều
 *          + Nếu a = b khác c => tamGiac cân
 *          + Nếu c^2 = a^2 + b^2 => tamGiac vuông
 *          + ngược lại tam giác bth
 *      + hiển thi kết quả
 * B3: gắn sự kiên click
 * 
 * output: tamGiac
 */

//! Bài Làm
function xetTamGiac() {

    var a = document.getElementById("canhTamGiac1").value;
    var b = document.getElementById("canhTamGiac2").value;
    var c = document.getElementById("canhTamGiac3").value;

    a = Number(a);
    b = Number(b);
    c = Number(c);


    var tamGiac = "";

    if((a + b) <= c || (b + c) <= a  || (a + c) <= b){
        tamGiac = "Không phải là tam giác"

    }else{
        if(a == b && b == c ){
            tamGiac = "Tam Giác đều"
        }else if(a == b && b !== c){
            tamGiac = "Tam Giác cân"
        }else if(a == c && c !== b){
            tamGiac = "Tam Giác cân"
        }else if(b == c && c !== a){
            tamGiac = "Tam Giác cân"
        }
        else if( Math.pow(c, 2) == (Math.pow(a, 2) + Math.pow(b, 2)) ||  Math.pow(a, 2) == (Math.pow(b, 2) + Math.pow(c, 2)) ||  Math.pow(b, 2) == (Math.pow(a, 2) + Math.pow(c, 2))){
            tamGiac = "Tam Giác vuông"
        }else{
            tamGiac = "Tam giác khác"
        }

    }
    document.getElementById("hinhHoc").innerHTML = tamGiac;



    
}