function countPresence(email, fullName){

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

  let previousMonth = getPresencePreviousMonth(email)

  var lembur = 0 + previousMonth.lembur;
  var presence = 0 + previousMonth.presence;
  var absent = 0 + previousMonth.absent;

      // var lembur = 0
      // var presence = 0
      // var absent = 0

   for(var i = 1;i <= getDaysInMonth;i++){

     // check presensi berdasarkan shift
    
      if(typeof getPresenceByDate(i) !== 'undefined' ){
       const data = getPresenceByDate(i)
      //  console.log(data)
       
      let getShift = [...new Set(data.map(d => d.shift))]

              if(data.length == 1){
                if(validatePresence(data[0].status)){
                  if(data[0].note == 'Lembur'){
                    lembur += 1
                  }else{
                    presence += 1
                  }      
                }else{
                  absent += 1
                }
              }else if(data.length == 2){
                if(validatePresence(data[0].status) && validatePresence(data[1].status)){
                  if(data[0].note == 'Lembur' || data[1].note == 'Lembur'){
                    lembur += 1
                  }else{
                    presence += 1
                  }
                }else if(validatePresence(data[1].status)){
                  if(data[1].note){
                    lembur += 1
                  }else{
                    presence += 1
                  }
                }else if(getShift.includes("Malam") && getShift.includes("Pagi")){
                  if(data[0].note == 'Lembur' || data[1].note == 'Lembur'){
                    lembur += 1
                    presence += 1
                  }else{
                    presence += 2
                  }
                }else if(validateAbsent(data[1].status)){
                  absent += 1
                }else{
                  presence += 0
                }
              }else if(data.length == 3){
                if(getShift.includes("Malam") && getShift.includes("Pagi")){
                  if(data[0].note == 'Lembur' || data[1].note == 'Lembur' || data[2].note == 'Lembur'){
                    lembur += 1
                    presence += 1
                  }else{
                    presence += 2
                  }
                }
              } 
          }
      }
  
  
  
  return {fullName: fullName, email: email, presence: presence, absent: absent, lembur: lembur}

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

function getPresencePreviousMonth(email){

  const dt = new Date()
  const mnth = dt.getMonth()
  const yr = dt.getFullYear()

  const getDaysInMonth = new Date(yr, mnth, 0).getDate()
  const dayOfDate = cd => new Date(yr, mnth-1,cd)
  const datePresence = tgl => new Date(tgl).getTime()

  const findUser = getUsers().filter(u => u.user === email)
  const getPresenceByDate = (tgl) => {
    return findUser.filter(u => datePresence(u.date) === dayOfDate(tgl).getTime())
  }

  var lembur = 0;
  var presence = 0
  var absent = 0

   for(var i = 30;i <= getDaysInMonth;i++){
    
     if(typeof getPresenceByDate(i) !== 'undefined' ){
       const data = getPresenceByDate(i)
      //  console.log(data)
       
       let getShift = [...new Set(data.map(d => d.shift))]

        if(data.length == 1){
          if(validatePresence(data[0].status)){
            if(data[0].note == 'Lembur'){
              lembur += 1
            }else{
              presence += 1
            }      
          }else{
            absent += 1
          }
        }else if(data.length == 2){
          if(validatePresence(data[0].status) && validatePresence(data[1].status)){
            if(data[0].note == 'Lembur' || data[1].note == 'Lembur'){
              lembur += 1
            }else{
              presence += 1
            }
          }else if(validatePresence(data[1].status)){
            if(data[1].note){
              lembur += 1
            }else{
              presence += 1
            }
          }else if(getShift.includes("Malam") && getShift.includes("Pagi")){
            if(data[0].note == 'Lembur' || data[1].note == 'Lembur'){
              lembur += 1
              presence += 1
            }else{
              presence += 2
            }
          }else if(validateAbsent(data[1].status)){
            absent += 1
          }else{
            presence += 0
          }
        }else if(data.length == 3){
          if(getShift.includes("Malam") && getShift.includes("Pagi")){
            if(data[0].note == 'Lembur' || data[1].note == 'Lembur' || data[2].note == 'Lembur'){
              lembur += 1
              presence += 1
            }else{
              presence += 2
            }
          }
        } 
      }
    }

  return {presence: presence, absent: absent, lembur: lembur}

}



  // let getShift = [...new Set(data.map(d => d.shift))]

  //       if(data.length == 1){
  //         if(validatePresence(data[0].status)){
  //           if(data[0].note == 'Lembur'){
  //             lembur += 1
  //           }else{
  //             presence += 1
  //           }      
  //         }else{
  //           absent += 1
  //         }
  //       }else if(data.length == 2){
  //         if(validatePresence(data[0].status) && validatePresence(data[1].status)){
  //           if(data[0].note == 'Lembur' || data[1].note == 'Lembur'){
  //             lembur += 1
  //           }else{
  //             presence += 1
  //           }
  //         }else if(validatePresence(data[1].status)){
  //           if(data[1].note){
  //             lembur += 1
  //           }else{
  //             presence += 1
  //           }
  //         }else if(getShift.includes("Malam") && getShift.includes("Pagi")){
  //           if(data[0].note == 'Lembur' || data[1].note == 'Lembur'){
  //             lembur += 1
  //             presence += 1
  //           }else{
  //             presence += 2
  //           }
  //         }else if(validateAbsent(data[1].status)){
  //           absent += 1
  //         }else{
  //           presence += 0
  //         }
  //       }else if(data.length == 3){
  //         if(getShift.includes("Malam") && getShift.includes("Pagi")){
  //           if(data[0].note == 'Lembur' || data[1].note == 'Lembur' || data[2].note == 'Lembur'){
  //             lembur += 1
  //             presence += 1
  //           }else{
  //             presence += 2
  //           }
  //         }
  //       } 
  //     }




