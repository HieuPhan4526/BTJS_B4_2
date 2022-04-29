
/**
 * input
 * so1, so2, so3
 * 
 * Các bước xử lý
 *  B1: tìm các thẻ bằng id
 *  B2: tạo hàm
 *      + lấy trị từ form
 *      + Nếu (so1 và so2 và so3) đều chia hết cho 2 => soChan = 3 , soLe = 0
 *      + Nếu so1 và so2 đều chia hết cho 2 => soChan = 2, sole++
 *       hoặc so2 và so3 đều chia hết cho 2 => soChan = 2, sole++
 *       hoặc so1 và so3 đều chia hết cho 2 => soChan = 2, sole++
 *      + Nếu so1 hoặc so2 hoặc so3 chia hết cho 2 => soChan++, soLe = 2;
 *      + Ngược lại => soLe = 3
 *      + Hiển thị kết quả
 * B3: gắn sự kiện onclick
 * 
 * 
 * output: soChan, soLe
 */

///! Bài làm

function chanLe() {

    var so1 = document.getElementById("soMot").value;
    var so2 = document.getElementById("soHai").value;
    var so3 = document.getElementById("soBa").value;

    var soChan = 0;
    var soLe = 0;

    if(so1 % 2 == 0 && so2 % 2 == 0 && so3 % 2 == 0){
        soChan = 3;
        soLe = 0
    }else if(so1 % 2 == 0 && so2 % 2 == 0){
        soChan = 2;
        soLe++
    }else if(so1 % 2 == 0 && so3 % 2 == 0){
        soChan = 2;
        soLe++
    }else if(so2 % 2 == 0 && so3 % 2 == 0){
        soChan = 2;
        soLe++
    }else if(so1 % 2 == 0 || so2 % 2 == 0 || so3 % 2 == 0){
        soChan++;
        soLe = 2
    }else{
        soChan = 0;
        soLe = 3;
    }


    document.getElementById("ketQua").innerHTML ="Có " + soChan + " số chẵn" + "<br> Có " + soLe + " lẻ";
}
