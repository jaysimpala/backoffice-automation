function myFunction() {

  
  employes.map(u => {
    console.log(countPresence(u.email, u.fullName))
  })
  
  // let arr = ["Malam","Malam", "Pagi"]
  // let obj = [...new Set(arr)];
  // console.log(obj.includes("Malam") && obj.includes("Pagi"))
  // console.log(getUsers().filter(u => u.user === "hartosin0798@gmail.com"))
  // countPresence("novapriyaa25@gmail.com")
  // getPresencePreviousMonth("hartosin0798@gmail.com")
  // console.log(countPresence("hartosin0798@gmail.com"))
  // console.log(getUsers()[0])
  // const mnth = dt.getMonth()
  // const yr = dt.getFullYear()
  // const getDaysInMonth = new Date(yr, mnth, 0).getDate()
  // console.log(getDaysInMonth)

  let emptyArr = []
  console.log()

}


function getUsers(){

  const lastRow = sheetPresence.getLastRow();
  const users = sheetPresence.getRange(2,1,lastRow,7).getValues();
  const objUsers = users.map((user) => {
   return {user: user[3],shift: user[4],status: user[5], date: user[1], time: user[2], note: user[6]}
  })

  return objUsers;

}

// hitung absensi dari tgl 30
// buat perhitungan gaji



