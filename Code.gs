async function myFunction() {

  await createSalarySlip()
  await sendReport()

}

function sendReport() {

  var folder = DriveApp.getFolderById('1M30r5d1mHhubhYk3lm5qP3gnPyX8BiUU')

  employes.forEach((e, index) => {

    var files = folder.getFilesByName(listSlipSalary[index]);

    while(files.hasNext()){
      var file = files.next().getId();
      sendReport(file)
      var message = {
        to: e.email,
        subject: "Monthly Salary",
        body: `Hi ${e.fullName},\n\nhere is your monthly payslip.\n\nThank you,\nPuhun Yang Maha Esa`,
        name: "Puhun Yang Maha Esa",
        attachments: [DocumentApp.openById(file)]
      }
      MailApp.sendEmail(message);
    }
  })

}


function getUsers(){

  const lastRow = sheetPresence.getLastRow();
  const users = sheetPresence.getRange(2,1,lastRow,7).getValues();
  const objUsers = users.map((user) => {
   return {user: user[3],shift: user[4],status: user[5], date: user[1], time: user[2], note: user[6]}
  })

  return objUsers;

}


  // employes.map(u => {
  //   console.log(countPresence(u.email, u.fullName))
  // })
  // let arr = ["Malam","Malam", "Pagi"]
  // let obj = [...new Set(arr)];
  // console.log(obj.includes("Malam") && obj.includes("Pagi"))
  // console.log(getUsers().filter(u => u.user === "hartosin0798@gmail.com"))
  // countPresence("novapriyaa25@gmail.com")
  // console.log(getPresencePreviousMonth("hartosin0798@gmail.com"))
  // console.log(countPresence("hartosin0798@gmail.com"))
  // console.log(getUsers()[0])
  // const mnth = dt.getMonth()
  // const yr = dt.getFullYear()
  // const getDaysInMonth = new Date(yr, mnth, 0).getDate()
  // console.log(getDaysInMonth)


  // var folder = DriveApp.getFolderById('1pFX6a5O59NllI_7zJ-r64dkJiWzv_j7v')
  // var files = folder.getFiles();

  // while(files.hasNext()){
  //   var file = files.next().getName();
  //   Logger.log(file)
  // }



