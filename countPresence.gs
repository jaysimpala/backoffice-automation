
function checkStatusPresence({status, shift}){

  if(shift === "Pagi"){
    if(status === statusPresence[0] || status === statusPresence[4]){
          return true
    }else if(status === statusPresence[5] || status === statusPresence[6]){
      return false
    }else{
      return false
    }
  }
  if(shift === "Malam"){
    if((status === statusPresence[2] || status === statusPresence[4])){
        return true
    }else{
      return false
    }
  }

  // (status === statusPresence[1] || status === statusPresence[4])
  // (status === statusPresence[1] || status === statusPresence[4])
  // (status === statusPresence[3] || status === statusPresence[4])

}

function hitungTotalPresensi(){

  // const getMonth = (mnth) => {
  //   mnth = new Date(mnth).getMonth(4);
  //   return mnth ;
  // }

  // const getCurrentMonth = new Date().getMonth() - 1;
  // const countPresence = getUsers().filter(user => 
    // ((user.user === email) && (getMonth(user.date) === getCurrentMonth )) && checkStatusPresence (user))

  // const users = getUsers().filter(user => user.user === email && checkStatusPresence(user))
  // const totalPresence = countPresence.length
  // const totalAbsensi = hitungTotalAbsensi(email)

  // return {user: email, totalPresence: totalPresence }


  // console.log(getMonth())
  
}

function hitungPresensiTerlambat(){

  const countLatePresence = getUsers().map((user) => {
    // return {name: user.user, time: new Date(user.time).toLocaleTimeString()}

    return new Date(user.time).toLocaleTimeString()
  })

  console.log(getRandomUser)

}

function hitungTotalAbsensi(email){

  const users = getUsers().filter(user => user.user === email && 
                (user.status === statusPresence[5] || user.status === statusPresence[6] ))
  const count = users.length

  return count

}

function hitungJmlMasuk(email){

  const jmlAbsen = getUsers().filter((u) => u.user === email && validateMasuk(u)) 
  return jmlAbsen;

}

function validateMasuk(arg){

  const tgl = arg.date.toLocaleString().split(",")[0]
  const wkt = new Date(arg.time).toLocaleTimeString()

  const absen = new Date(tgl + " " + wkt).getTime();
  const limitAbsen = new Date(tgl + " " + shcedulePresence.Pagi.jamMasuk[1]).getTime()

  if(absen < limitAbsen){
    return true
  }else{
    return false
  }

}

function hitungJmlPulang(email){

  const jmlAbsen = getUsers().filter((u) => u.user === email && validatePulang(u)) 
  return jmlAbsen;

}

function validatePulang(arg){

  const tgl = arg.date.toLocaleString().split(",")[0]
  const wkt = new Date(arg.time).toLocaleTimeString()

  const absen = new Date(tgl + " " + wkt).getTime();
  const limitAbsen = new Date(tgl + " " + shcedulePresence.Pagi.jamPulang[1]).getTime()

  if(absen < limitAbsen){
    return true
  }else{
    return false
  }

}



