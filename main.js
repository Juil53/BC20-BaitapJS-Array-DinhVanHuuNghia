var Arr = [];
//THÊM SỐ
function themSo() {
    var num = Number(document.querySelector("#themso").value);
    Arr.push(num);
    document.querySelector("#txtResult").innerHTML = "Các số trong mảng gồm: " + Arr;
}
document.querySelector("#btnResult").onclick = themSo;

// TỔNG SỐ DƯƠNG
function tongSoDuong() {
    var sum = 0;
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] > 0) {
            sum += Arr[i];
        }
    }
    document.querySelector("#b1txtResult").innerHTML = "TỔNG SỐ DƯƠNG: " + sum;
}
document.querySelector("#b1btnResult").onclick = tongSoDuong;

//ĐẾM SỐ DƯƠNG
function demSoDuong() {
    var count = "";
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] > 0) {
            count++;
        }
    }
    document.querySelector("#b2txtResult").innerHTML = "SỐ DƯƠNG: " + count;
}
document.querySelector("#b2btnResult").onclick = demSoDuong;

//TÌM SỐ NHỎ NHẤT
function timSoNhoNhat() {
    var viTri = 0;
    var min = Arr[viTri];
    for (var i = 0; i < Arr.length; i++) {
        if (min > Arr[i]) {
            min = Arr[i]
        }
    }
    document.querySelector("#b3txtResult").innerHTML = "SỐ NHỎ NHẤT: " + min;
}
document.querySelector("#b3btnResult").onclick = timSoNhoNhat;

//TÌM SỐ DƯƠNG NHỎ NHẤT
function timSoDuongNhoNhat() {
    //Tìm mảng số dương từ mảng Arr
    var arrDuong = [];
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] > 0) {
            arrDuong.push(Arr[i]);
        }
    }
    if (arrDuong.length > 0) {
        var viTri = 0;
        var min = arrDuong[viTri];
        for (var i = 0; i < arrDuong.length; i++) {
            if (min > arrDuong[i]) {
                min = arrDuong[i]
            }
        }
        document.querySelector("#b4txtResult").innerHTML = "SỐ DƯƠNG NHỎ NHẤT: " + min;
    } else {
        document.querySelector("#b4txtResult").innerHTML = "KHÔNG CÓ SỐ DƯƠNG NHỎ NHẤT";
    }
}
document.querySelector("#b4btnResult").onclick = timSoDuongNhoNhat;

//TÌM SỐ CHẴN CUỐI CÙNG
function timSoChanCuoi(){
    var soChan = [];
    for(var i = 0; i < Arr.length; i++){
        if(Arr[i] % 2 == 0){
            soChan.push(Arr[i]);
        }
    }
    document.querySelector("#b5txtResult").innerHTML = "SỐ CHẴN CUỐI LÀ: " + soChan[soChan.length - 1];
}
document.querySelector("#b5btnResult").onclick = timSoChanCuoi;

//ĐỔI CHỖ
function doiCho(){
    var viTri1 = Number(document.querySelector("#vitri1").value);
    var viTri2 = Number(document.querySelector("#vitri2").value);
    var temp = "";
    for(var i = 0; i < Arr.length; i++){
        if(i == viTri1){
            temp = Arr[viTri1];
        }
    }
    for(var j = 0; j < Arr.length; j++){
        if(j == viTri2){
            Arr[viTri1] = Arr[viTri2];
            Arr[viTri2] = temp;
        }
    }
    document.querySelector("#b6txtResult").innerHTML = "Vị trí mới: " + Arr;
}
document.querySelector("#b6btnResult").onclick = doiCho;

// SĂP XẾP TĂNG DẦN
function sapXepTang(){
    var newArr = [];
    for(var i=0; i<Arr.length;i++){
        newArr.push(Arr[i]);
    }
    for(var i=0; i<newArr.length;i++){
        for(var j=0; j<newArr.length;j++){
            if(newArr[j]>newArr[j+1]){
                var temp = newArr[j];
                newArr[j] = newArr[j+1];
                newArr[j+1] = temp;
            }
        }
    }
    document.querySelector("#b7txtResult").innerHTML = " MẢNG SAU KHI SẮP XẾP: " + newArr;
}
document.querySelector("#b7btnResult").onclick = sapXepTang;

//TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN
function kiemTraSnt(num){
    if(num < 2){
        return false;
    }else if(num == 2){
        return true;
    }else if(num % 2 == 0){
        return false;
    }else{
        for (var i = 3; i< num - 1; i+=2){
            if(num % i == 0){
                return false;
            }  
        }    return true;
    }
}
function timSoNguyenToDauTien(){
    for(var i= 0; i < Arr.length;i++){
        if(kiemTraSnt(Arr[i]) == true){
            break;
        } 
    }
    document.querySelector("#b8txtResult").innerHTML = "SỐ NGUYÊN TỐ ĐẦU TIÊN: " + Arr[i];
}
document.querySelector("#b8btnResult").onclick = timSoNguyenToDauTien;

//ĐẾM SỐ NGUYÊN
function demSoNguyen(){
    var count = 0;
    for(var i = 0; i < Arr.length; i++){
        if(Number.isInteger(Arr[i]) == true){
            count++;
        }
    }
    document.querySelector("#b9txtResult").innerHTML = "SỐ NGUYÊN LÀ: " + count;
}
document.querySelector("#b9btnResult").onclick = demSoNguyen;

//SO SÁNH
function soSanhAmDuong(){
    var soDuong = 0;
    var soAm = 0;
    for(var i=0; i < Arr.length; i++){
        if(Arr[i] > 0){
            soDuong++;
        } else {
            soAm++;
        }
    }
    
    if(soDuong > soAm){
        document.querySelector("#b10txtResult").innerHTML = "SỐ DƯƠNG > SỐ ÂM";
    } else if(soDuong == soAm){
        document.querySelector("#b10txtResult").innerHTML = "SỐ DƯƠNG = SỐ ÂM";
    } else{
        document.querySelector("#b10txtResult").innerHTML = "SỐ DƯƠNG < SỐ ÂM";
    }
}
document.querySelector("#b10btnResult").onclick = soSanhAmDuong;