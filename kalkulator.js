function tambah(a,b){
  return a + b;
}
function kurang(a,b){
  return a - b;
}
function kali(a,b){
  return a * b;
}
function bagi(a,b){
  return a / b;
}

let perintah = prompt("Masukkan Perintah (+) (-) (*) (/)");
if(perintah == "+"){
  var a = parseInt(prompt("Masukkan Nilai 1 : "))
  var b = parseInt(prompt("Masukkan Nilai 2 : "))
  var c = tambah(a,b)
}else if(perintah == "-"){
  var a = parseInt(prompt("Masukkan Nilai 1 : "))
  var b = parseInt(prompt("Masukkan Nilai 2 : "))
  var c = kurang(a,b)
}else if(perintah == "*"){
  var a = parseInt(prompt("Masukkan Nilai 1 : "))
  var b = parseInt(prompt("Masukkan Nilai 2 : "))
  var c = kali(a,b)
}else if(perintah == "/"){
  var a = parseInt(prompt("Masukkan Nilai 1 : "))
  var b = parseInt(prompt("Masukkan Nilai 2 : "))
  var c = bagi(a,b)
}

console.log(`Angka Pertama : ${a}`);
console.log(`Perintah : ${perintah}`);
console.log(`Angka Kedua : ${b}`);
console.log(`Hasil : ${c}`);

document.write(`Angka Pertama : ${a} <br/>`)
document.write(`Perintah : ${perintah} <br/>`)
document.write(`Angka Kedua : ${b} <br/>`)
document.write(`Hasil : ${c}`)
