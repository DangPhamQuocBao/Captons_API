function renderDSSP(productList) {
  var contentHTML = "";
  for (var i = 0; i < productList.length; i++) {
    var products = productList[i];
    var contentTr = `<div class="col-lg-4 col-12 text-center p-5">
        <div class="d-flex flex-column align-items-center">
          <h3 class="p-1">${products.name}</h3>
          <img class="p-1 " width="300" height="400" src="${products.img}" alt="">
          <p class="p-1">DESC: ${products.desc}</p>
          <p class="p-1">Screen: ${products.screen}</p>
          <p class="p-1">Back Camera: ${products.backCam}</p>
          <p class="p-1">Front Camera: ${products.frontCam}</p>
          <p class="p-1 text-success">Price: ${products.price}$</p>
          <button class="btn btn-danger mt-auto" >Add to Cart</button>
          </div>
      </div>`;
    contentHTML += contentTr;
  }
  document.getElementById("phoneList").innerHTML = contentHTML;
}
