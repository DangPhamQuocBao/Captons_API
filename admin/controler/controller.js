function renderDSSP(productList) {
  var contentHTML = "";
  for (var i = 0; i < productList.length; i++) {
    products = productList[i];
    var contentTr = `<tr>
                    <td>${products.id}</td>
                    <td>${products.name}</td>
                    <td>${products.price}</td>
                    <td><img src=${products.img} alt=""></img></td>
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
function showThongTinLenForm(data) {
  document.getElementById("name").value = data.name;
  document.getElementById("price").value = data.price;
  document.getElementById("screen").value = data.screen;
  document.getElementById("backCam").value = data.backCam;
  document.getElementById("frontCam").value = data.frontCam;
  document.getElementById("img").value = data.img;
  document.getElementById("desc").value = data.desc;
  document.getElementById("type").value = data.type;
}
