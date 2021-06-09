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
  
  for(var i = 1;i <= getDaysInMonth;i++){

    if(typeof getPresenceByDate(i) !== 'undefined' ){
      const data = getPresenceByDate(i)
      if(data.length > 0){
        if(validatePresence(data[0].status)){
          presence += 1
        }
      }
    }

  }

  return "Total Presensi " + presence

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





