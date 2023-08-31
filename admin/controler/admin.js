function fetchProductList() {
  batLoading();

  axios({
    url: "https://64ddb297825d19d9bfb164a3.mockapi.io/products",
    method: "GET",
  })
    .then(function (res) {
      renderDSSP(res.data);
      tatLoading();

      // tableHasData = true;
      // sortTableByPrice(); // Gọi hàm sắp xếp ban đầu
    })
    .catch(function (err) {
      tatLoading();
    });
}
fetchProductList();
function xoaSP(id) {
  axios({
    url: `https://64ddb297825d19d9bfb164a3.mockapi.io/products/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      fetchProductList();

      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}
function themSp() {
  var sp = layThongTinTuForm();
  console.log(sp);
  axios({
    url: "https://64ddb297825d19d9bfb164a3.mockapi.io/products/",
    method: "POST",
    data: sp,
  })
    .then(function (res) {
      console.log(res);
      $("#exampleModal").modal("hide");
      fetchProductList();
    })
    .catch(function (err) {
      console.log(err);
    });
}
function capNhatSp(id) {
  $("#exampleModal").modal("show");

  console.log(id);
}
