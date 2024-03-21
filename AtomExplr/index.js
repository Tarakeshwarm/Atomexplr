let p = document.getElementById("p")
let e = document.getElementById("e")
let n = document.getElementById("n")
let amu = document.getElementById("amu")
let v = document.getElementById("valency")
let ve = document.getElementById("valence_electrons")
let en = document.getElementById("element")
let es = document.getElementById("element_symbol")
let i1 = document.getElementById("i1")
let i2 = document.getElementById("i2")
let i3 = document.getElementById("i3")
let img = document.getElementById("img")
let model1 = document.getElementById("hydrogen")
let model2 = document.getElementById("helium")
let model3 = document.getElementById("lithium")
let model4 = document.getElementById("berrylium")
let model5 = document.getElementById("boron")
let model6 = document.getElementById("carbon")
let model7 = document.getElementById("nitrogen")
let model8 = document.getElementById("oxygen")
let model9 = document.getElementById("flourine")
let model10 = document.getElementById("neon")
let model11 = document.getElementById("sodium")
let model12 = document.getElementById("magnesium")
let model13 = document.getElementById("aluminium")
let model14 = document.getElementById("silicon")
let model15 = document.getElementById("phosphorus")
let model16 = document.getElementById("sulphur")
let model17 = document.getElementById("chlorine")
let model18 = document.getElementById("argon")
let model19 = document.getElementById("potassium")
let model20 = document.getElementById("calcium")
let button = document.getElementById("button")
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  if (document.getElementById("myDropdown").classList.contains("show")) {
    document.getElementById("main_btn").innerHTML = '<i class="fa-solid fa-xmark fa-lg"></i>';
  } else {
    document.getElementById("main_btn").innerHTML = '<i class="fa-solid fa-chevron-down fa-lg"></i>';
  }
}
function model() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    button.innerHTML = '<i class="fa-solid fa-moon fa-lg"></i>';
  } else {
    button.innerHTML = '<i class="fa-solid fa-sun-bright fa-lg"></i>';
  }
}
function filterFunction() {
  var input, filter, button, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  button = div.getElementsByTagName("button");
  for (i = 0; i < button.length; i++) {
    txtValue = button[i].textContent || button[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      button[i].style.display = "";
    } else {
      button[i].style.display = "none";
    }
  }
}
function hydrogen() {
  p.innerHTML = "1";
  e.innerHTML = "1";
  n.innerHTML = "0";
  amu.innerHTML = "1u";
  v.innerHTML = "1";
  ve.innerHTML = "1";
  en.innerHTML = "Hydrogen";
  es.innerHTML = "H";
  img.src = "electron_arrangement/Hydrogen.svg";
  model1.style.display = "block";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model9.style.display = "none";
  model10.style.display = "none";
  model11.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "Protium";
  i2.innerHTML= "Deuterium";
  i3.innerHTML= "Tritium";
}
function helium() {
  p.innerHTML = "2";
  e.innerHTML = "2";
  n.innerHTML = "2";
  amu.innerHTML = "4u";
  v.innerHTML = "0";
  ve.innerHTML = "2";
  en.innerHTML = "Helium";
  es.innerHTML = "He";
  img.src = "electron_arrangement/Helium.svg";
  model1.style.display = "none";
  model2.style.display = "block";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model9.style.display = "none";
  model10.style.display = "none";
  model11.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "He-3";
  i2.innerHTML= "He-4";
  i3.innerHTML= "       ";
}
function lithium() {
  p.innerHTML = "3";
  e.innerHTML = "3";
  n.innerHTML = "4";
  amu.innerHTML = "7u";
  v.innerHTML = "1";
  ve.innerHTML = "1";
  en.innerHTML = "Lithium";
  es.innerHTML = "Li";
  img.src = "electron_arrangement/Lithium.svg";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "block";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model9.style.display = "none";
  model10.style.display = "none";
  model11.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "Li-6";
  i2.innerHTML= "Li-7";
  i3.innerHTML= "       ";
}
function beryllium() {
  p.innerHTML = "4";
  e.innerHTML = "4";
  n.innerHTML = "5";
  amu.innerHTML = "9u";
  v.innerHTML = "2";
  ve.innerHTML = "2";
  en.innerHTML = "Beryllium";
  es.innerHTML = "Be";
  img.src = "electron_arrangement/Beryllium.svg";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "block";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model9.style.display = "none";
  model10.style.display = "none";
  model11.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "Be-9";
  i2.innerHTML= "       ";
  i3.innerHTML= "       ";
}
function boron() {
  p.innerHTML = "5";
  e.innerHTML = "5";
  n.innerHTML = "6";
  amu.innerHTML = "11u";
  v.innerHTML = "3";
  ve.innerHTML = "3";
  en.innerHTML = "Boron";
  es.innerHTML = "B";
  img.src = "electron_arrangement/Boron.svg";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "block";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model9.style.display = "none";
  model10.style.display = "none";
  model11.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "B-10";
  i2.innerHTML= "         ";
  i3.innerHTML= "         ";
}
function carbon() {
  p.innerHTML = "6";
  e.innerHTML = "6";
  n.innerHTML = "6";
  amu.innerHTML = "12u";
  v.innerHTML = "4";
  ve.innerHTML = "4";
  en.innerHTML = "Carbon";
  es.innerHTML = "C";
  img.src = "electron_arrangement/Carbon.svg";
  model6.style.display = "block";
  model7.style.display = "none";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model8.style.display = "none";
  model9.style.display = "none";
  model10.style.display = "none";
  model11.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "C-12";
  i2.innerHTML= "C-13";
  i3.innerHTML= "C-14";
}
function nitrogen() {
  p.innerHTML = "7";
  e.innerHTML = "7";
  n.innerHTML = "7";
  amu.innerHTML = "14u";
  v.innerHTML = "3";
  ve.innerHTML = "5";
  en.innerHTML = "Nitrogen";
  es.innerHTML = "N";
  img.src = "electron_arrangement/Nitrogen.svg";
  model7.style.display = "block";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model8.style.display = "none";
  model9.style.display = "none";
  model10.style.display = "none";
  model11.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "N-14";
  i2.innerHTML= "N-15";
  i3.innerHTML= "        ";
}
function oxygen() {
  p.innerHTML = "8";
  e.innerHTML = "8";
  n.innerHTML = "8";
  amu.innerHTML = "16u";
  v.innerHTML = "2";
  ve.innerHTML = "6";
  en.innerHTML = "Oxygen";
  es.innerHTML = "O";
  img.src = "electron_arrangement/Oxygen.svg";
  model8.style.display = "block";
  model9.style.display = "none";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model10.style.display = "none";
  model11.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "O-16";
  i2.innerHTML= "O-17";
  i3.innerHTML= "O-18";
}
function flourine() {
  p.innerHTML = "9";
  e.innerHTML = "9";
  n.innerHTML = "10";
  amu.innerHTML = "19u";
  v.innerHTML = "1";
  ve.innerHTML = "7";
  en.innerHTML = "Flourine";
  es.innerHTML = "F";
  img.src = "electron_arrangement/Flourine.svg";
  model9.style.display = "block";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model10.style.display = "none";
  model11.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "F-19";
  i2.innerHTML= "      ";
  i3.innerHTML= "         ";
}
function neon() {
  p.innerHTML = "10";
  e.innerHTML = "10";
  n.innerHTML = "10";
  amu.innerHTML = "20u";
  v.innerHTML = "0";
  ve.innerHTML = "8";
  en.innerHTML = "Neon";
  es.innerHTML = "Ne";
  img.src = "electron_arrangement/Neon.svg";
  model10.style.display = "block";
  model9.style.display = "none";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model11.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "Ne-20";
  i2.innerHTML= "Ne-21";
  i3.innerHTML= "Ne-22";
}
function sodium() {
  p.innerHTML = "11";
  e.innerHTML = "11";
  n.innerHTML = "12";
  amu.innerHTML = "23u";
  v.innerHTML = "1";
  ve.innerHTML = "1";
  en.innerHTML = "Sodium";
  es.innerHTML = "Na";
  img.src = "electron_arrangement/Sodium.svg";
  model11.style.display = "block";
  model9.style.display = "none";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model10.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "Na-22";
  i2.innerHTML= "Na-23";
  i3.innerHTML= "Na-24";
}
function magnesium() {
  p.innerHTML = "12";
  e.innerHTML = "12";
  n.innerHTML = "12";
  amu.innerHTML = "24u";
  v.innerHTML = "2";
  ve.innerHTML = "2";
  en.innerHTML = "Magnesium";
  es.innerHTML = "Mg";
  img.src = "electron_arrangement/Magnesium.svg";
  model12.style.display = "block";
  model11.style.display = "none";
  model9.style.display = "none";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model10.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "Mg-24";
  i2.innerHTML= "Mg-25";
  i3.innerHTML= "Mg-26";
}
function aluminium() {
  p.innerHTML = "13";
  e.innerHTML = "13";
  n.innerHTML = "14";
  amu.innerHTML = "27u";
  v.innerHTML = "3";
  ve.innerHTML = "3";
  en.innerHTML = "Aluminium";
  es.innerHTML = "Al";
  img.src = "electron_arrangement/Aluminium.svg";
  model13.style.display = "block";
  model11.style.display = "none";
  model9.style.display = "none";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model10.style.display = "none";
  model12.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "Al-26";
  i2.innerHTML= "Al-27";
  i3.innerHTML= "Al-28";
}
function silicon() {
  p.innerHTML = "14";
  e.innerHTML = "14";
  n.innerHTML = "14";
  amu.innerHTML = "28u";
  v.innerHTML = "4";
  ve.innerHTML = "4";
  en.innerHTML = "Silicon";
  es.innerHTML = "Si";
  img.src = "electron_arrangement/Silicon.svg";
  model14.style.display = "block";
  model11.style.display = "none";
  model9.style.display = "none";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model10.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "Si-28";
  i2.innerHTML= "Si-29";
  i3.innerHTML= "Si-30";
}
function phosphorus() {
  p.innerHTML = "15";
  e.innerHTML = "15";
  n.innerHTML = "16";
  amu.innerHTML = "31u";
  v.innerHTML = "3";
  ve.innerHTML = "5";
  en.innerHTML = "Phosphorus";
  es.innerHTML = "P";
  img.src = "electron_arrangement/Phosphorus.svg";
  model15.style.display = "block";
  model11.style.display = "none";
  model9.style.display = "none";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model10.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "P-31";
  i2.innerHTML= "P-32";
  i3.innerHTML= "P-33";
}
function sulphur() {
  p.innerHTML = "16";
  e.innerHTML = "16";
  n.innerHTML = "16";
  amu.innerHTML = "32u";
  v.innerHTML = "2";
  ve.innerHTML = "6";
  en.innerHTML = "Sulphur";
  es.innerHTML = "S";
  img.src = "electron_arrangement/Sulphur.svg";
  model16.style.display = "block";
  model11.style.display = "none";
  model9.style.display = "none";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model10.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "S-32";
  i2.innerHTML= "S-33";
  i3.innerHTML= "S-34";
}
function chlorine() {
  p.innerHTML = "17";
  e.innerHTML = "17";
  n.innerHTML = "18";
  amu.innerHTML = "35u";
  v.innerHTML = "1";
  ve.innerHTML = "7";
  en.innerHTML = "Chlorine";
  es.innerHTML = "Cl";
  img.src = "electron_arrangement/Chlorine.svg";
  model17.style.display = "block";
  model11.style.display = "none";
  model9.style.display = "none";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model10.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "Cl-35";
  i2.innerHTML= "Cl-37";
  i3.innerHTML= "       ";
}
function argon() {
  p.innerHTML = "18";
  e.innerHTML = "18";
  n.innerHTML = "22";
  amu.innerHTML = "40u";
  v.innerHTML = "0";
  ve.innerHTML = "8";
  en.innerHTML = "Argon";
  es.innerHTML = "Ar";
  img.src = "electron_arrangement/Argon.svg";
  model18.style.display = "block";
  model11.style.display = "none";
  model9.style.display = "none";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model10.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model8.style.display = "none";
  model19.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "Ar-36";
  i2.innerHTML= "Ar-38";
  i3.innerHTML= "Ar-40";
}
function potassium() {
  p.innerHTML = "19";
  e.innerHTML = "19";
  n.innerHTML = "22";
  amu.innerHTML = "41u";
  v.innerHTML = "1";
  ve.innerHTML = "1";
  en.innerHTML = "Potassium";
  es.innerHTML = "K";
  img.src = "electron_arrangement/Potassium.svg";
  model19.style.display = "block";
  model11.style.display = "none";
  model9.style.display = "none";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model10.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model20.style.display = "none";
  i1.innerHTML= "K-39";
  i2.innerHTML= "K-40";
  i3.innerHTML= "K-41";
}
function calcium() {
  p.innerHTML = "20";
  e.innerHTML = "20";
  n.innerHTML = "20";
  amu.innerHTML = "40u";
  v.innerHTML = "2";
  ve.innerHTML = "2";
  en.innerHTML = "Calcium";
  es.innerHTML = "Ca";
  img.src = "electron_arrangement/Calcium.svg";
  model20.style.display = "block";
  model11.style.display = "none";
  model9.style.display = "none";
  model1.style.display = "none";
  model2.style.display = "none";
  model3.style.display = "none";
  model4.style.display = "none";
  model5.style.display = "none";
  model6.style.display = "none";
  model7.style.display = "none";
  model8.style.display = "none";
  model10.style.display = "none";
  model12.style.display = "none";
  model13.style.display = "none";
  model14.style.display = "none";
  model15.style.display = "none";
  model16.style.display = "none";
  model17.style.display = "none";
  model18.style.display = "none";
  model19.style.display = "none";
  i1.innerHTML= "C-40";
  i2.innerHTML= "C-42";
  i3.innerHTML= "C-44";
}