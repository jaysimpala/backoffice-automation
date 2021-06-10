function countPresence(email){

  const dt = new Date()
  const mnth = dt.getMonth()
  const yr = dt.getFullYear()

  const getDaysInMonth = new Date(yr, mnth+1, 0).getDate()
  const dayOfDate = cd => new Date(yr, mnth,cd)
  const datePresence = tgl => new Date(tgl).getTime()

  const findUser = getUsers().filter(u => u.user === email)
  const getPresenceByDate = (tgl) => {
    return findUser.filter(u => datePresence(u.date) === dayOfDate(tgl).getTime())
  }

  var presence = 0
  var absent = 0
  
  for(var i = 1;i <= getDaysInMonth;i++){

    if(typeof getPresenceByDate(i) !== 'undefined' ){
      const data = getPresenceByDate(i)
      if(data.length > 0){
        if(data[0].shift === 'Malam'){
          if(data.length == 2){
              if(validatePresence(data[0].status) && validatePresence(data[1].status)){
                presence += 1
              }else if(validateAbsent(data[0].status) || validateAbsent(data[1].status)){
                absent += 1
              }else{
                false
              }
          }else if(data.length == 1){

            if(validatePresence(data[0].status)){
              presence += 1
            }else{
              absent += 1
            }

          }else{
            presence += 0
          }
        }else{
          if(validatePresence(data[0].status)){
            presence += 1
          }else{
            absent += 1
          }
        }
      }
    }
  }

  if(findUser[0].shift === 'Malam'){
    return `${email} : Total Presensi ${presence } - Absent : ${absent}`
  }else{
     return `${email} : Total Presensi ${presence} - Absent : ${absent}`
  }

}

// "MASUK SHIFT PAGI","PULANG SHIFT PAGI","MASUK SHIFT MALAM","PULANG SHIFT MALAM","ABSEN TERLAMBAT","Izin","Sakit"

function validatePresence(status){

  if(status === "MASUK SHIFT PAGI" || status === "PULANG SHIFT PAGI" || status === "ABSEN TERLAMBAT"){
    return true
  }else if(status === "MASUK SHIFT MALAM" || status === "PULANG SHIFT MALAM" || status === "ABSEN TERLAMBAT"){
    return true
  }else{
    return false
  }

}

function validateAbsent(status){

  if(status =="Izin" || status == "Sakit" ){
    return true
  }
  
}





