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

  const dt = new Date()
  const mnth = dt.getMonth()
  const yr = dt.getFullYear()

  const getDaysInMonth = new Date(yr, mnth, 0).getDate()
  const dayOfDate = cd => new Date(yr, mnth -1,cd)
  const datePresence = tgl => new Date(tgl).getTime()

  const findUser = getUsers().filter(u => u.user === "novapriyaa25@gmail.com")
  const getPresenceByDate = (tgl) => {
    return findUser.find(u => datePresence(u.date) === dayOfDate(tgl).getTime())
  }

  for(var i = 1;i <= getDaysInMonth;i++){

    if(typeof getPresenceByDate(i) !== 'undefined' ){
      console.log(getPresenceByDate(i))
    }

  }

}


function hitungJmlMasuk(email){

  const jmlAbsen = getUsers().filter((u) => u.user === email && validateMasuk(u))
                      .map((p) => {

                        const tgl = p.date.toLocaleString().split(",")[0]
                        const wkt = new Date(p.time).toLocaleTimeString()                        
                        
                        return { user: p.user , timePresence: tgl + " " + wkt, status: p.status }

                      })
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
                    .map((p) => {
            
                      const tgl = p.date.toLocaleString().split(",")[0]
                      const wkt = new Date(p.time).toLocaleTimeString()                        
                      
                      return { user: p.user , timePresence: tgl + " " + wkt, status: p.status }

                  })

  return jmlAbsen;

}

function validatePulang(arg){

  /*

    get shift 
    jika shift pagi, validasi rule absen shift pagi
    jika shift malam, validasi rule absen shift malam

  */

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


  // for(var i = 1;i <= getLastDay();i++){

  //   const data = finByDate.find(d => getTgl(d.date) === getDaysInMonth(i).getTime())
  //   if(typeof data !== 'undefined'){
  //     console.log(data)
  //   }

  // }



