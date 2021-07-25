function totalSalary({presence,absent, lembur, fullName}){
  const workDays = 22
  var salary = 0
  var deduction = absent * 100000
  var bonus = 0
  let overtimePay = lembur * 200000

  if(presence > workDays){
    bonus = 150000 * (presence - workDays)
    salary = bonus + 4000000
  }else if(presence === workDays){
    salary = 4000000
  }else{
    deduction = (workDays - presence) * 100000
    salary = 4000000 - deduction
  }

  totalEarning = salary + overtimePay
  return {earnings: salary, overtime: overtimePay, fullName: fullName, total: totalEarning }
  
}

function createSalarySlip(){
  const dt = new Date()
  const mnth = dt.getMonth()
  const yr = dt.getFullYear()

  const getLastPreviousDate = new Date(yr, mnth-1, 30).getDate()
  const getCurrentLastMonth = new Date(yr, mnth+1, 29).getDate()

  const periodeAwal = `${getLastPreviousDate} ${strMonth(mnth -1)}`
  const periodeAkhir = `${getCurrentLastMonth} ${strMonth(mnth)}`

  employes.map(u => {

    const getPresence = countPresence(u.email, u.fullName)
    const getSalary = totalSalary(getPresence)
    
    const copy = slipTemplate.makeCopy(`Slip Gaji ${u.fullName} - ${strMonth(mnth)}`,slipFolderId)
    const doc = DocumentApp.openById(copy.getId())
    const body = doc.getBody()

     body.replaceText('{{ periodeAwal }}', periodeAwal)
     body.replaceText('{{ periodeAkhir }}', periodeAkhir)
     body.replaceText('{{ fullName }}', u.fullName)
     body.replaceText('{{ empCode }}', u.empCode)
     body.replaceText('{{ title }}',u.title)

     body.replaceText('{{ presence }}', getPresence.presence)
     body.replaceText('{{ absent }}', getPresence.absent)
     body.replaceText('{{ wovertime }}', getPresence.lembur)

     body.replaceText('{{ workDays }}', getPresence.presence )
     body.replaceText('{{ salary }}', getSalary.earnings )
     body.replaceText('{{ overtime }}', getSalary.overtime)
     body.replaceText('{{ totalSalary }}', getSalary.total )

    doc.saveAndClose()

    const fileName = `Slip Gaji ${u.fullName} - ${strMonth(mnth)}`
    listSlipSalary.push(fileName)

    console.log(`Slip Salary ${getPresence.fullName} has been created !`)

  }) 
}

function strMonth(index){

  const str = listMonth[index]

  return str

}
