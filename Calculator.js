let calculated = false;
function append(num) {
  if (calculated == true && !"+-*/%".includes(num))
    document.getElementById("result").value = 0;
  let ele = document.getElementById("result").value;
  if (ele == "0") {
    ele = num;
  } else {
    ele += num;
  }
  document.getElementById("result").value = ele;
  calculated = false;
}
function calculate() {
  try {
    let ele = document.getElementById("result").value;
    let result = eval(ele);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
  calculated = true;
}
function backSpace() {
  let ele = document.getElementById("result").value;

  if (ele.length == 1) document.getElementById("result").value = 0;
  else
    document.getElementById("result").value = ele.substring(0, ele.length - 1);
}
function memorySave() {
  let ele = document.getElementById("result").value;
  if (+ele != 0) localStorage.setItem("data", ele);
}
function memoryRestore() {
  let ele = localStorage.getItem("data");
  ele = ele ?? 0;
  document.getElementById("result").value = ele;
}
function memoryAdd() {
  let res = document.getElementById("result").value;
  if (+res !== 0) {
    let memdata = localStorage.getItem("data");
    memdata = memdata ?? 0;
    localStorage.setItem("data", +res + +memdata);
  }
}
function memoryMinus() {
  let res = document.getElementById("result").value;
  if (+res !== 0) {
    let memdata = localStorage.getItem("data");
    memdata = memdata ?? 0;
    let res1 = memdata - res;
    if (res1 == 0) {
      localStorage.removeItem("data");
    }
    localStorage.setItem("data", +memdata - +res);
  }
}
function memoryCancel() {
  localStorage.removeItem("data");
}
function clearAll() {
  document.getElementById("result").value = 0;
  calculated = false;
  localStorage.removeItem("data");
}
