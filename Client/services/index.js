function Services() {

    this.getListProductApi = function (){
        return axios({
            url: "https://6290babf27f4ba1c65c05bfd.mockapi.io/Products",
            method:"GET"
        });
    };
}