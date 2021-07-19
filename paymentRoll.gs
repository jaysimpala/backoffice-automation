function mainApp() {
  
  const dt = new Date()
  const mnth = dt.getMonth()
  const yr = dt.getFullYear()

  const getLastPreviousDate = new Date(yr, mnth-1, 30).getDate()
  const getCurrentLastMonth = new Date(yr, mnth+1, 0).getDate()

  const periodeAwal = `${getLastPreviousDate} ${strMonth(mnth -1)}`
  const periodeAkhir = `${getCurrentLastMonth} ${strMonth(mnth)}`

  // employes.map(u => {

  //   const getPresence = countPresence(u.email, u.fullName)
    
  //   const copy = slipTemplate.makeCopy(`Slip Gaji ${u.fullName}`,slipFolderId)
  //   const doc = DocumentApp.openById(copy.getId())
  //   const body = doc.getBody()

  //    body.replaceText('{{ periodeAwal }}', periodeAwal)
  //    body.replaceText('{{ periodeAkhir }}', periodeAkhir)
  //    body.replaceText('{{ fullName }}', u.fullName)
  //    body.replaceText('{{ empCode }}', u.empCode)
  //    body.replaceText('{{ title }}',u.title)

  //    body.replaceText('{{ presence }}', getPresence.presence)
  //    body.replaceText('{{ absent }}', getPresence.absent)
  //    body.replaceText('{{ wovertime }}', getPresence.lembur)

  //   doc.saveAndClose()

  // })

  employes.forEach(u => {
    const getPresence = countPresence(u.email, u.fullName)
    console.log(totalSalary(getPresence))
  })


}

function totalSalary({presence,absent, lembur, fullName}){
  const workDays = 22
  var salary = 0
  var deduction = absent * 100000
  var bonus = 0
  var earnings = 0
  let overtimePay = lembur * 200000

  if(presence > workDays){
    bonus = 150000 * (presence - workDays)
    salary = bonus + 4000000
  }else if(presence == workDays){
    salary = 4000000
  }else{
    if(absent == 0){
      deduction = (workDays - presence) * 100000
      salary = 4000000 - deduction
    }else{
      salary = 4000000 - deduction
    }
  
  }

  earnings = salary + overtimePay
  return {earnings: earnings, overtime: overtimePay, fullName: fullName}
  
}

function newSalarySlip({fullName}){
  return fullName
}

function strMonth(index){

  const str = listMonth[index]

  return str

}
