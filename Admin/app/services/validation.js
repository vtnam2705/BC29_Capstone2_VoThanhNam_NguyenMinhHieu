function Valid() {
    // Kiểm tra ô nhập thông tin rỗng
    this.kiemTraRong = function (value, errorId, mess) {
        if (value === "") {
            //error
            getEle(errorId).style.color = "red";
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        }

        getEle(errorId).innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
    };



    // Kiểm tra độ dài ký tự 
    // this.kiemTraDoDaiKiTu = function (value, errorId, min, max, mess) {
    //     if (value.trim().length >= min && value.trim().length <= max) {
    //         //true
    //         getEle(errorId).innerHTML = "";
    //         getEle(errorId).style.display = "none";
    //         return true;
    //     }

    //     //false
    //     getEle(errorId).innerHTML = mess;
    //     getEle(errorId).style.display = "block";
    //     return false;
    // };


    // 


    // Kiểm chuỗi số
    this.kiemChuoiSo = function (value, errorId, mess) {
        var checkString = "/^[0-9]+$/";

        if (value.match(checkString)) {
            //true
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }

        //false
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }

    // Kiểm tra chuỗi ký tự
    // this.kiemChuoiKyTu = function (value, errorId, mess) {
    //     var letter =
    //         "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
    //         "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
    //         "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

    //     if (value.match(letter)) {
    //         //true
    //         getEle(errorId).innerHTML = "";
    //         getEle(errorId).style.display = "none";
    //         return true;
    //     }

    //     //false
    //     getEle(errorId).innerHTML = mess;
    //     getEle(errorId).style.display = "block";
    //     return false;
    // }


    // Kiểm tra độ dài textarea
    // this.kiemTraDoDaiText = function (value, errorId, mess, minLength) {
    //     // var checkLuong = "";
    //     if (value == minLength) {
    //         getEle(errorId).innerHTML = "";
    //         getEle(errorId).style.display = "none";
    //         return true;
    //     } else {
    //         getEle(errorId).innerHTML = mess;
    //         getEle(errorId).style.display = "block";
    //         return false;
    //     }
    // }


    // Kiểm tra khách hàng, ngôn ngữ
    this.kiemTraOption = function (selectID, errorId, mess) {
        if (getEle(selectID).selectedIndex !== 0) {
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }

        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }


    // Kiểm tra tồn tại
    this.kiemTraTonTai = function (value, errorId, mess, arr) {
        var isStatus = true;

        arr.forEach(function (item) {
            if (item.account === value) {
                //MaSV ton tai
                isStatus = false;
            }
        });

        if (isStatus) {
            //true
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }

        //false
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    };
}


// Lặp từng phần tử trong nhanVien kiểm tra giá trị từng property
//  Nếu giá trị value trong từng ô nhạp giá trị bằng rỗng => xuất hiện thông báo 



