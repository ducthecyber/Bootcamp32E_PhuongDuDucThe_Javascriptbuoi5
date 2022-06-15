//Bài tập 1: Quản lý tuyển sinh
document.getElementById("btnBai1").onclick = function () {
    //input: number: diemChuan, diem1, diem2, diem3,diemTongKet,diemUuTien
    //number: khuVuc, doiTuong
    var diemDau = Number(document.getElementById("diemChuan").value);
    var khuVuc = Number(document.getElementById("khuVuc").value);
    var doiTuong = Number(document.getElementById("doiTuong").value);
    var diemA = Number(document.getElementById("diem1").value);
    var diemB = Number(document.getElementById("diem2").value);
    var diemC = Number(document.getElementById("diem3").value);
    var diemUuTien = khuVuc + doiTuong;
    var diemTongKet = diemA + diemB + diemC + diemUuTien;
    //output: ketQuaBai1: string
    var ketQuaBai1 = "";
    //progress
    if (diemTongKet >= diemDau &&
        diemA > 0 && diemB > 0 && diemC > 0
    ) {
        ketQuaBai1 = "Bạn đã trúng tuyển!" + " Số điểm tổng: " + diemTongKet + " đ";

    }
    else if (diemA == 0 || diemB == 0 || diemC == 0) {
        ketQuaBai1 = "Bạn không vượt qua kỳ thi do có môn 0 điểm"
    }
    else {
        ketQuaBai1 = "Bạn không vượt qua kỳ thi do tổng điểm nhỏ hơn điểm chuẩn ." + "Số điểm tổng: " + diemTongKet + " đ";
    }
    document.getElementById("ketQuaBai1").innerHTML = ketQuaBai1;
}

//Bài tập 2: Tính tiền điện dựa theo số KW

document.getElementById("btnTienDien").onclick = function () {
    //input: tenNguoi: string, soKw: number
    var ten = document.getElementById("tenNguoi").value;
    var congToDien = Number(document.getElementById("soKw").value);
    //output: tienDien: number
    var tienDien = 0;
    //progress
    if (congToDien <= 50) {
        tienDien = congToDien * 500;
    }
    else if (congToDien > 50 && congToDien <= 100) {
        tienDien = congToDien * 650;
    }
    else if (congToDien > 100 && congToDien <= 200) {
        tienDien = congToDien * 850;
    }
    else if (congToDien > 200 && congToDien <= 350) {
        tienDien = congToDien * 1100;
    }
    else {
        tienDien = congToDien * 1300;
    }
    document.getElementById("ketQuaBai2").innerHTML = "Họ tên: " + ten + " ; Tiền điện của bạn: " + tienDien + " VND";
}

//Bài tập 3: Tính thuế thu nhập

document.getElementById("btnThuNhap").onclick = function () {
    //input: tongThuNhap: number, ten: string, nguoiPhuThuoc: number
    var thuNhapNam = Number(document.getElementById("tongThuNhap").value);
    var name = document.getElementById("ten").value;
    var soNguoi = Number(document.getElementById("nguoiPhuThuoc").value);
    //output: thueThuNhap: number
    var thueThuNhap = 0;
    //progress
    var thuNhapTinhThue = thuNhapNam - 4e+6 - soNguoi * 1.6e+6;
    if (thuNhapTinhThue <= 60e+6) {
        thueThuNhap = thuNhapTinhThue * 0.05;
    }
    else if (thuNhapTinhThue > 60e+6 && thuNhapTinhThue <= 120e+6) {
        thueThuNhap = 60e+6 * 0.05 + (thuNhapTinhThue - 60e+6) * 0.1;
    }
    else if (thuNhapTinhThue > 120e+6 && thuNhapTinhThue <= 210e+6) {
        thueThuNhap = 60e+6 * 0.05 + 60e+6 * 0.1 + (thuNhapTinhThue - 120e+6) * 0.15;
    }
    else if (thuNhapTinhThue > 210e+6 && thuNhapTinhThue <= 384e+6) {
        thueThuNhap = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6*0.15 + (thuNhapTinhThue - 210e+6) * 0.2;
    }
    else if (thuNhapTinhThue > 384e+6 && thuNhapTinhThue <= 624e+6) {
        thueThuNhap = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + (thuNhapTinhThue - 384e+6) * 0.25;
    }
    else if (thuNhapTinhThue > 624e+6 && thuNhapTinhThue <= 960e+6) {
        thueThuNhap = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + (thuNhapTinhThue - 624e+6) * 0.3;
    }
    else {
        thueThuNhap = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.30 + (thuNhapTinhThue - 960e+6) * 0.35;
    }
    document.getElementById("ketQuaBai3").innerHTML = thueThuNhap + " VND";
}