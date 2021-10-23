document.querySelector(".fa-refresh").addEventListener("click", function () {
  location.reload();
  return false;
});
document.querySelector(".calc").addEventListener("click", function () {
  let edu = Number(document.querySelector("#edu").value);
  let fnw = Number(document.querySelector("#fnw").value);
  let caste = Number(document.querySelector("#caste").value);
  var skilll = [];
  var rep = [];
  console.log(fnw);
  var ele = document.getElementsByTagName("input");
  let j = 0;
  let age;
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].type == "checkbox" && ele[i].name == "skill") {
      if (ele[i].checked) {
        skilll[j] = ele[i].value;
        j++;
      }
    }
  }

  j = 0;
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].type == "checkbox" && ele[i].name == "rep") {
      if (ele[i].checked) {
        rep[j] = ele[i].value;
        j++;
      }
    }

    if (ele[i].type == "radio") {
      if (ele[i].checked) {
        age = ele[i].value;
      }
    }
  }

  let result;
  result = 100 * edu * fnw + caste;

  for (let i = 0; i < skilll.length; i++) {
    result += Number(skilll[i]);
  }

  result *= age;
  for (let i = 0; i < rep.length; i++) {
    if (Number(rep[i]) < 0) {
      result = result + Number(rep[i]);
    } else {
      result = result * Number(rep[i]);
    }
  }
  coefs = {
    edu: edu,
    FamilyNetWorth: fnw,
    caste: caste,
    skill: skilll[0],
    age: age,
    rep: rep[0],
  };
  if (Number.isNaN(result)) {
    alert("Please choose the age range!");
  } else {
    document.getElementById("price").innerHTML = result;
    document.querySelector("body").style.backgroundColor = "#327034";
    setTimeout(alert.bind(null, "Cangrats the price is " + result + "!"));
  }
  if (skilll.length === 0) {
    document.getElementById("skillChosen").innerHTML =
      "Your bride/groom has no skills!";
  }
  if (rep.length === 0) {
    document.getElementById("repChosen").innerHTML =
      "Your bride/groom has good reputation!";
  }
});
