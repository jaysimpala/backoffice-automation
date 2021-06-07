function myFunction() {

  // employes.map((value) => {
  //   console.log(hitungTotalPresensi(value.email))
  // })

  // testing code
  // console.log(getUsers())
  // const tgl = new Date().getMonth() - 1
  // console.log(tgl)
  // console.log(hitungTotalAbsensi("novapriyaa25@gmail.com"))

  // hitungTotalAbsensi("novapriyaa25@gmail.com")

  // console.log(hitungJmlMasuk("novapriyaa25@gmail.com").length)
  // console.log(hitungJmlPulang("novapriyaa25@gmail.com").length)

}


function getUsers(){

  const lastRow = sheetPresence.getLastRow();
  const users = sheetPresence.getRange(2,1,lastRow,6).getValues();
  const objUsers = users.map((user) => {
   return {user: user[3],shift: user[4],status: user[5], date: user[1], time: user[2]}
  })

  return objUsers;

}

/*

IF(AND([Time] >= "07:45",[Time] <= "09:15"),"MASUK SHIFT PAGI",
IF(AND([Time] >= "16:00", [Time] <= "17:20"),"PULANG SHIFT PAGI",
IF(AND([Time] >= "17:25", [Time] <= "19:15"),"MASUK SHIFT MALAM",
IF(AND([Time] >= "02:30", [Time] <= "07:45"), "PULANG SHIFT MALAM",
"ABSEN TERLAMBAT"))))

*/

/*

get bulang sekarang
hitung total hari pada bulan sekarang
hitung jam presensi masuk karyawan , jika terlambat masuk dalam hitungan presensi
hitung jam presensi pulang karyawan , jika terlambat masuk dalam hitungan presensi 

- jika karyawan tidak absensi di jam masuk ataupun pulang maka masuk dalam hitungan presensi 

total presensi pada bulan sekarang


*/







