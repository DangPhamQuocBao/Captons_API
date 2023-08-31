function renderDSSP(productList) {
  var contentHTML = "";
  for (var i = 0; i < productList.length; i++) {
    products = productList[i];
    var contentTr = `<tr>
                    <td>${products.id}</td>
                    <td>${products.name}</td>
                    <td>${products.price}</td>
                    <td>${products.img}</td>
                    <td>${products.desc}</td>
                    <td>
                        <button class="btn btn-danger" onclick ="xoaSP(${products.id})">Xóa</button>
                        <button class="btn btn-warning" onclick="capNhatSp(${products.id})">Sửa</button>
                    </td>
                 </tr>`;
    contentHTML += contentTr;
  }
  document.getElementById("tablePhone").innerHTML = contentHTML;
}
function batLoading() {
  document.getElementById("spinner").style.display = "flex";
}
function tatLoading() {
  document.getElementById("spinner").style.display = "none";
}
function layThongTinTuForm() {
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var screen = document.getElementById("screen").value;
  var backCam = document.getElementById("backCam").value;
  var frontCam = document.getElementById("frontCam").value;
  var img = document.getElementById("img").value;
  var desc = document.getElementById("desc").value;
  var type = document.getElementById("type").value;
  return {
    name: name,
    price: price,
    screen: screen,
    backCam: backCam,
    frontCam: frontCam,
    img: img,
    desc: desc,
    type: type,
  };
}
