function fetchProductList() {
  //   batLoading();

  axios({
    url: "https://64ddb297825d19d9bfb164a3.mockapi.io/products",
    method: "GET",
  })
    .then(function (res) {
      console.log(res);
      renderDSSP(res.data);
      //   tatLoading();
    })
    .catch(function (err) {
      console.error(err);
    });
}
fetchProductList();

function filterProducts() {
  var selectedBrand = document.getElementById("selectList").value;

  axios({
    url: "https://64ddb297825d19d9bfb164a3.mockapi.io/products",
    method: "GET",
  })
    .then(function (res) {
      var productList = res.data;

      if (selectedBrand !== "all") {
        productList = productList.filter(function (products) {
          return products.brand === selectedBrand;
        });
        console.log(productList);
        console.log(selectedBrand);
      }

      renderDSSP(productList);
    })
    .catch(function (err) {
      console.error(err);
    });
}
