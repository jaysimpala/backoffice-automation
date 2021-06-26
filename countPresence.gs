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
       let getShift = [...new Set(data.map(d => d.shift))]

        if(data.length == 1){
          
          if(validatePresence(data[0].status)){
            presence += 1
          }else{
            absent += 1
          }
        }else if(data.length == 2){
          if(validatePresence(data[0].status) && validatePresence(data[1].status)){
            presence += 1
          }else if(validatePresence(data[0].status) || validatePresence(data[1].status)){
            presence += 1
          }else if(getShift.includes("Malam") && getShift.includes("Pagi")){
            presence += 2
          }else{
            presence += 0
          }
        }else if(data.length == 3){
          if(getShift.includes("Malam") && getShift.includes("Pagi")){
            presence += 2
          }
        }
        
      }
     
    }
  
 

  // perhitungan baru
  // absen masuk dan pulang || masuk terlambat += 1
  // jika masuk shift baru += 2
    // presensi di hitung masuk 2 shift jika absen di tgl yang sama
    // jika ada shift Pagi dan Malam
  





  // if(findUser[0].shift === 'Malam'){
  //   return {email: email, presence: presence, absent: absent}
  // }else{
  //    return {email: email, presence: presence, absent: absent}
  // }

  return {email: email, presence: presence, absent: absent}

}

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

//  for(var i = 1;i <= getDaysInMonth;i++){

//     if(typeof getPresenceByDate(i) !== 'undefined' ){
//       const data = getPresenceByDate(i)
//       // console.log(data)
//       if(typeof data !== 'undefined'){
//         //  console.log(data)
//         if(data.length == 1){
//           if(validatePresence(data[0].status)){
//             presence += 1
//           }else{
//             absent += 1
//           }
//         }else if( data.length == 2){
//           if(data[0].shift === 'Pagi'){
//             if(validatePresence(data[0].status) && validatePresence(data[1].status)){
//               presence += 1
//             }
//           }else if(validatePresence(data[1].status) && validatePresence(getPresenceByDate(i+1)[0].status)){
//             presence += 1
//           }else if(validateAbsent(data[0].status) || validateAbsent(data[1].status)) {
//             absent += 1
//           }
//         }else if(data.length === 3){    
//           if(data.some(d => d.status === 'MASUK SHIFT MALAM') ||
//              getPresenceByDate(i+1).some(d => d.status === 'MASUK SHIFT PAGI') ){
//             presence += 2
//           }else if(validatePresence(data[1].status) && validatePresence(data[2].status)){
//               presence += 1
//           }
//         }
//       }
//     }
//   }




