function myFunction() {

  console.log(countPresence("fahrisyaifullah@gmail.com"))

}


function getUsers(){

  const lastRow = sheetPresence.getLastRow();
  const users = sheetPresence.getRange(2,1,lastRow,6).getValues();
  const objUsers = users.map((user) => {
   return {user: user[3],shift: user[4],status: user[5], date: user[1], time: user[2]}
  })

  return objUsers;

}






