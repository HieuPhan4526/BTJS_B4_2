/**
 * input
 * thanhVienGiaDinh
 *
 * Các bước xử lý
 * B1: tìm các thẻ = id
 * B2: tạo hàm
 *      + lấy giá trị từ form
 *      + Nếu thành viên là bố => Chào bố.
 *      + Nếu thành viên là Mẹ => Chào mẹ.
 *      + Nếu thành viên là Anh => Chào Anh.
 *      + ngược lại là Em gái => Em gái.
 * B3: hiển thị kết quả
 * B4: Gắn sự kiện onclick
 * 
 * output: loiChao
 */

//! Bài làm

function chaoHoi() {
    var thanhVienGiaDinh = document.getElementById("selectPercent").value;

    var loiChao = "";

    switch (thanhVienGiaDinh) {
        case "Bố": loiChao = "chào bố"

            break;
        case "Mẹ": loiChao = "chào Mẹ"

            break;
        case "Anh": loiChao = "chào Anh"

            break;

        default: loiChao = "chào Em gái"
            break;
    }

    document.getElementById("Hello").innerHTML = "Chào " + thanhVienGiaDinh;
}
document.getElementById("btn").onclick = chaoHoi;