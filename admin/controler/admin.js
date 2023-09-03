function fetchProductList() {
  batLoading();

  axios({
    url: "https://64ddb297825d19d9bfb164a3.mockapi.io/products",
    method: "GET",
  })
    .then(function (res) {
      productList = res.data;
      sortProductList();
      renderDSSP(productList);
      tatLoading();
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
      tatLoading();
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
      jQuery("#exampleModal").modal("hide");
      fetchProductList();
    })
    .catch(function (err) {
      console.log(err);
    });
}

function capNhatSp(id) {
  jQuery("#exampleModal").modal("show");

  axios({
    url: `https://64ddb297825d19d9bfb164a3.mockapi.io/products/${id}`,
    method: "GET",
  })
    .then(function (res) {
      showThongTinLenForm(res.data);
      document.getElementById("btnUpdate").onclick = function () {
        updateProduct(id);
      };
    })
    .catch(function (err) {
      console.log(err);
      tatLoading();
    });
}

function updateProduct(id) {
  var updatedProduct = layThongTinTuForm();
  axios({
    url: `https://64ddb297825d19d9bfb164a3.mockapi.io/products/${id}`,
    method: "PUT",
    data: updatedProduct,
  })
    .then(function (res) {
      console.log(res);
      jQuery("#exampleModal").modal("hide");
      fetchProductList();
    })
    .catch(function (err) {
      console.log(err);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("searchInput");
  var searchButton = document.getElementById("searchButton");
  var tablePhone = document.getElementById("tablePhone");

  searchButton.addEventListener("click", function () {
    var searchText = searchInput.value.toLowerCase();
    var filteredProducts = [];
    for (var i = 0; i < productList.length; i++) {
      var productName = productList[i].name.toLowerCase();
      if (productName.includes(searchText)) {
        filteredProducts.push(productList[i]);
      }
    }
    renderDSSP(filteredProducts);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("searchInput");
  var searchButton = document.getElementById("searchButton");
  var tablePhone = document.getElementById("tablePhone");
  var priceHeader = document.getElementById("priceHeader");

  var productList = [];
  var ascendingOrder = true;

  function sortProductList() {
    productList.sort(function (a, b) {
      var priceA = parseFloat(a.price);
      var priceB = parseFloat(b.price);

      if (ascendingOrder) {
        return priceB - priceA;
      } else {
        return priceA - priceB;
      }
    });
  }

  priceHeader.addEventListener("click", function () {
    ascendingOrder = !ascendingOrder;
    sortProductList();
    renderDSSP(productList);
  });

  function fetchProductList() {
    batLoading();

    axios({
      url: "https://64ddb297825d19d9bfb164a3.mockapi.io/products",
      method: "GET",
    })
      .then(function (res) {
        productList = res.data;
        sortProductList();
        renderDSSP(productList);
        tatLoading();
      })
      .catch(function (err) {
        tatLoading();
      });
  }

  fetchProductList();
});
