var  dateofbirth, gender;

//arrays
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["akosua", "adwoa", "abenna", "akua", "yaa", "afua", "ama"];

function displayName(){
for(i in maleNames){
  var output = document.getElementById('output').innerHTML = maleNames[i];
  alert(maleNames[i]);
}
  return output;
}
