
function myFunction() {

  // const liburNasional = "20211226";
  // const year = liburNasional.slice(0,4)
  // const month = liburNasional.slice(4,6)
  // const day = liburNasional.slice(6,8)
  // const formatDate = `${year}/${month}/${day}`

  var tahun = "2021"

  // for(var bulan = 1;bulan <= 4;bulan++){
  //   console.log(`looping bulan ${bulan}`)
  //   for(var tgl = 1;tgl <= 31;tgl++ ){
  //     const reformatMont = "0"+bulan
  //     const formatDate = `${tahun}${reformatMont}${tgl}`
  //     // console.log(formatDate)
      
  //     if(typeof harLiburNasional[formatDate] !== "undefined" ){
  //         console.log(formatDate)
  //         console.log(harLiburNasional[formatDate])
  //     } 
  //   }
  // }
 
  // employes.map((value) => {
  //   console.log(hitungTotalPresensi(value.email))
  // })

  // testing code
  // console.log(getUsers())
  // const tgl = new Date().getMonth() - 1
  // console.log(tgl)
  // console.log(hitungTotalPresensi("novapriyaa25@gmail.com"))

  // const em = getUsers().map((emp) => {
  //   const getTgl = emp.date.toLocaleString().split(",")[0]
  //   const getWkt = new Date(emp.time).toLocaleTimeString()
  //   console.log(`${getTgl} ${getWkt}`)
  // })

  // var a = "06/02/2014 8:45 AM";
  // var b = "06/02/2014 8:30 AM";

  // const aDate = new Date(a).getTime();
  // const bDate = new Date(b).getTime();

  // if(aDate > bDate ){
  //   console.log("absen terlambat")
  // }else if(a < b){
  //   console.log("absen masuk")
  // }

  // console.log(aDate)
  // console.log(bDate)

  // const [from, to] = shcedulePresence.Pagi.jamMasuk
  // const wktu = new Date(from).getTime()

  // console.log(wktu)

  // console.log(hitungJmlMasuk("novapriyaa25@gmail.com").length)
  console.log(hitungJmlPulang("fahrisyaifullah@gmail.com").length)

  // console.log(getUsers().filter((u) => u.user === 'novapriyaa25@gmail.com').length)
 
}

function timeCompare(time){

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

Next Feature : 

save to sheet 
convert and save into google docs
and send to the boss
run the service at the end of the month

hitung jumlah absen masuk 

hitung jumlah absen pulang

*/

/*

IF(AND([Time] >= "07:45",[Time] <= "09:15"),"MASUK SHIFT PAGI",
IF(AND([Time] >= "16:00", [Time] <= "17:20"),"PULANG SHIFT PAGI",
IF(AND([Time] >= "17:25", [Time] <= "19:15"),"MASUK SHIFT MALAM",
IF(AND([Time] >= "02:30", [Time] <= "07:45"), "PULANG SHIFT MALAM",
"ABSEN TERLAMBAT"))))

*/









