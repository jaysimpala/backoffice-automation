const getDays = []

function listDays() {

  const getMonth = (mnth) => {
    mnth = new Date(mnth).getMonth();
    return mnth ;
  }

  const getCurrentMonth = new Date().getMonth();

  const listUsers = getUsers().map(user => `Date : ${getMonth(user.date)}`)
  const getListMonthofMay = getUsers().filter(user => 
        ((user.user === 'fahrisyaifullah@gmail.com') && (getMonth(user.date) === getCurrentMonth )) &&
        checkStatusPresence(user))

  console.log(getListMonthofMay.length)
  console.log(getListMonthofMay)
  // console.log(getCurrentMonth)

}

function listDateCurrentMonth(){

  // const getCurrentMonth = new Date("10/11/2009")
  // console.log(getCurrentMonth.getMonth())

}
