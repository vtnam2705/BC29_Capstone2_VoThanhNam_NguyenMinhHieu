function Servcies() {
  this.getListProductApi = function () {
    return axios({
      url: "https://6290babf27f4ba1c65c05bfd.mockapi.io/Products",
      method: "GET",
    });
  };

  this.deleteProductApi = function (id) {
    return axios({
      url: `https://6290babf27f4ba1c65c05bfd.mockapi.io/Products/${id}`,
      method: "DELETE",
    });
  };

  this.addProductApi = function (product) {
    return axios({
      url: "https://6290babf27f4ba1c65c05bfd.mockapi.io/Products",
      method: "POST",
      data: product,
    });
  };

  this.getProductById = function (id) {
    return axios({
      url: `https://6290babf27f4ba1c65c05bfd.mockapi.io/Products/${id}`,
      method: "GET",
    });
  };

  this.updateProductApi = function (product) {
    return axios({
      url: `https://6290babf27f4ba1c65c05bfd.mockapi.io/Products/${product.id}`,
      method: "PUT",
      data: product,
    });
  };
}
