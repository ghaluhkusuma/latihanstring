let namaDepan = "Ucup Surucup dan Ucup Markucup";
let namaLengkap = namaDepan.substring(-4, 2);
console.log(namaLengkap);

let namaLengkapsekali = namaDepan.slice(-4, 2);
console.log(namaLengkapsekali);

namaLengkap = namaDepan.replace(/Ucup/g, "Otong");
console.log(namaLengkap);
