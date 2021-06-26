function myFunction() {

  employes.map(u => {
    console.log(countPresence(u.email))
  })
  
  // let arr = ["Malam","Malam", "Pagi"]
  // let obj = [...new Set(arr)];
  // console.log(obj.includes("Malam") && obj.includes("Pagi") )
  // console.log(getUsers().filter(u => u.user === "novapriyaa25@gmail.com"))
  // console.log(countPresence("novapriyaa25@gmail.com"))
  // console.log(countPresence("hartosin0798@gmail.com"))

}

function getUsers(){

  const lastRow = sheetPresence.getLastRow();
  const users = sheetPresence.getRange(2,1,lastRow,6).getValues();
  const objUsers = users.map((user) => {
   return {user: user[3],shift: user[4],status: user[5], date: user[1], time: user[2]}
  })

  return objUsers;

}






