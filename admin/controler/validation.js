function validateForm() {
  var name = document.getElementById("name").value.trim();
  var price = document.getElementById("price").value.trim();
  var screen = document.getElementById("screen").value.trim();
  var backCam = document.getElementById("backCam").value.trim();
  var frontCam = document.getElementById("frontCam").value.trim();
  var img = document.getElementById("img").value.trim();
  var desc = document.getElementById("desc").value.trim();
  var type = document.getElementById("type").value.trim();

  if (name === "") {
    document.getElementById("tbname").innerText = "Tên không được để trống.";
    return false;
  } else {
    document.getElementById("tbname").innerText = "";
  }

  if (price === "") {
    document.getElementById("tbprice").innerText = "Giá không được để trống.";
    return false;
  } else {
    document.getElementById("tbprice").innerText = "";
  }

  if (screen === "") {
    document.getElementById("tbscreen").innerText =
      "Màn hình không được để trống.";
    return false;
  } else {
    document.getElementById("tbscreen").innerText = "";
  }

  if (backCam === "") {
    document.getElementById("tbbackCam").innerText =
      "Camera sau không được để trống.";
    return false;
  } else {
    document.getElementById("tbbackCam").innerText = "";
  }

  if (frontCam === "") {
    document.getElementById("tbfrontCam").innerText =
      "Camera trước không được để trống.";
    return false;
  } else {
    document.getElementById("tbfrontCam").innerText = "";
  }

  if (img === "") {
    document.getElementById("tbimg").innerText =
      "Link hình ảnh không được để trống.";
    return false;
  } else {
    document.getElementById("tbimg").innerText = "";
  }

  if (desc === "") {
    document.getElementById("tbdesc").innerText = "Mô tả không được để trống.";
    return false;
  } else {
    document.getElementById("tbdesc").innerText = "";
  }

  if (type === "" || type === "Select brand") {
    document.getElementById("tbtype").innerText = "Hãy chọn thương hiệu.";
    return false;
  } else {
    document.getElementById("tbtype").innerText = "";
  }

  return true;
}
document.getElementById("formPhone").onsubmit = function () {
  return validateForm();
};
