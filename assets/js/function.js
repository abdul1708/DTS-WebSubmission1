
function leader() {
  alert("LEADER");
}

function member1() {
  alert("MEMBER-1");
}

function member2() {
  alert("MEMBER-2");
}

function member3() {
  alert("MEMBER-3");
}

function member4() {
  alert("MEMBER-4");
}

function saran() {
  const nama = prompt("Tuliskan nama Anda?");
  const saran = prompt("Berikan saran?");

  const user = {
    nama: nama,
    saran: saran
  };

  alert("Terima Kasih " + nama + ". " + "Masukan Anda telah kami terima!");
}