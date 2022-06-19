var service = new Servcies();
var validation = new Valid();
var unitOfCurrency = new Intl.NumberFormat("vn-VN");


function getEle(id) {
  return document.getElementById(id);
}

function getListProducts() {
  service
    .getListProductApi()
    .then(function (result) {
      renderListProducts(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListProducts();

// --------------------------------------------
function renderListProducts(data) {
  var contentHTML = "";

  data.forEach(function (product, index) {
    contentHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${unitOfCurrency.format(parseFloat(product.price))} VND</td>
            <td>${product.screen}</td>
            <td>${product.backCamera}</td>
            <td>${product.frontCamera}</td>
            <td>
                <img class="img-fluid" src="./../../assets/img/${product.img
      }"  width="50"/>
            </td>
            <td>${product.desc}</td>
            <td>${product.type}</td>
            <td>
                <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editProduct(${product.id
      })">Sửa</button>
                <button class="btn btn-danger" onclick="deleteProduct(${product.id
      })">Xoá</button>
            </td>
        </tr>
    `;
  });

  getEle("tblDanhSachSP").innerHTML = contentHTML;
}


// -------------------------------------------------------------------------
function getInfoProduct(isAdd) {
  var name = getEle("TenSP").value;
  var price = getEle("GiaSP").value;
  var screen = getEle("ktSP").value;
  var backCamera = getEle("backCam").value;
  var frontCamera = getEle("frontCam").value;
  var img = getEle("HinhSP").value;
  var desc = getEle("MoTa").value;
  var type = getEle("loaiSP").value;


  var isValid = true;


  if (isAdd) {
    isValid &=
      validation.kiemTraRong(name, "tbName", "(*) Vui lòng nhập tên sản phẩm");

    isValid &=
      validation.kiemTraRong(price, "tbPrice", "(*) Vui lòng nhập giá sản phẩm");

    isValid &=
      validation.kiemTraRong(screen, "tbScreen", "(*) Vui lòng nhập kích thước màn hình");

    isValid &=
      validation.kiemTraRong(backCamera, "tbBack", "(*) Nhập độ phân giải camera sau");

    isValid &=
      validation.kiemTraRong(frontCamera, "tbFront", "(*) Nhập độ phân giải camera trước");

    isValid &=
      validation.kiemTraRong(img, "tbImg", "(*) Thêm hình ảnh sản phẩm");

    isValid &=
      validation.kiemTraRong(desc, "tbDesc", "(*) Mô tả sản phẩm");

    isValid &=
      validation.kiemTraRong(type, "tbBrand", "(*) Chọn thương hiệu");
  }
  if (!isValid) return;

  var product = new Product(
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type,
  )

  return product;
}
// -------------------------------------------------------------------------
/**
 * Xoa SP
 */
function deleteProduct(id) {
  service
    .deleteProductApi(id)
    .then(function () {
      //render table
      getListProducts();
    })
    .catch(function (error) {
      console.log(error);
    });
}

getEle("btnThemSP").onclick = function () {
  //Sửa lại title modal
  document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm SP";

  //Thêm nút "Add" vào footer modal
  var footer = `<button class="btn btn-success" onclick="addProduct()">Add</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

  getEle("TenSP").value = "";
  getEle("GiaSP").value = "";
  getEle("ktSP").value = "";
  getEle("backCam").value = "";
  getEle("frontCam").value = "";
  getEle("HinhSP").value = "";
  getEle("MoTa").value = "";
  getEle("loaiSP").value = "";
};

/**
 * Add Product
 */
function addProduct() {
  var name = getEle("TenSP").value;
  var price = getEle("GiaSP").value;
  var screen = getEle("ktSP").value;
  var backCamera = getEle("backCam").value;
  var frontCamera = getEle("frontCam").value;
  var img = getEle("HinhSP").value;
  var desc = getEle("MoTa").value;
  var type = getEle("loaiSP").value;

  //doi tuong product
  var product = new Product("", name, price, screen, backCamera, frontCamera, img, desc, type);

  let validProduct = getInfoProduct(true);

  if (validProduct) {
    service
      .addProductApi(product)
      .then(function () {
        //render table
        getListProducts();
        //close modal
        document.getElementsByClassName("close")[0].click();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

/**
 * Edit Product
 */
function editProduct(id) {
  //Sửa lại title modal
  document.getElementsByClassName("modal-title")[0].innerHTML = "Edit SP";

  //Thêm nút "Update" vào footer modal
  var footer = `<button class="btn btn-success" onclick="updateProduct(${id})">Update</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

  //getProductById
  service
    .getProductById(id)
    .then(function (result) {
      // show thông tin ra các thẻ input
      getEle("TenSP").value = result.data.name;
      getEle("GiaSP").value = result.data.price;
      getEle("ktSP").value = result.data.screen;
      getEle("backCam").value = result.data.backCamera;
      getEle("frontCam").value = result.data.frontCamera;
      getEle("HinhSP").value = result.data.img;
      getEle("MoTa").value = result.data.desc;
      getEle("loaiSP").value = result.data.type;
    })
    .catch(function (error) {
      console.log(error);
    });
}

/**
 * Update product
 */
function updateProduct(id) {
  var name = getEle("TenSP").value;
  var price = getEle("GiaSP").value;
  var screen = getEle("ktSP").value;
  var backCamera = getEle("backCam").value;
  var frontCamera = getEle("frontCam").value;
  var img = getEle("HinhSP").value;
  var desc = getEle("MoTa").value;
  var type = getEle("loaiSP").value;

  var product = new Product(id, name, price, screen, backCamera, frontCamera, img, desc, type);

  service
    .updateProductApi(product)
    .then(function () {
      //render table
      getListProducts();
      //close modal
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}
