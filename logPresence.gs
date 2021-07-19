function createLog() {

  const dt = new Date()
  const mnth = dt.getMonth()
  const yr = dt.getFullYear()

  var headerStyle = {};  
  headerStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#336600';  
  headerStyle[DocumentApp.Attribute.BOLD] = true;  
  headerStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = '#FFFFFF';

  var cellStyle = {};
  cellStyle[DocumentApp.Attribute.BOLD] = false;  
  cellStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = '#000000';
  
  const destinationFolder = 
        DriveApp.getFolderById('1czd-FZCIYv1c1tKib_AMIuURUr3JQUu1')

  const doc = DocumentApp.create(`Rekap Presensi ${listMonth[mnth]}`)
  const docId = doc.getId()
  const docFile = DriveApp.getFileById(docId)

  var body = doc.getBody()
  var table = body.appendTable()
  var header = doc.addHeader()
  var footer = doc.addFooter()

  header.appendParagraph(`Rekap Presensi Periode Bulan : ${listMonth[mnth]}`)
  
  body.appendParagraph("")

  // console.log(employes.length)

  for(var i = 0; i <= employes.length; i++){
    var tr = table.appendTableRow();

      if(i == 0){
        var hdNo = tr.appendTableCell('No').setWidth(25)
        var hdName = tr.appendTableCell('Nama').setWidth(175)
        var hdPresence = tr.appendTableCell('Presence').setWidth(65)
        var hdAbsent = tr.appendTableCell('Absent').setWidth(65)
        var hdLembuir = tr.appendTableCell('Lembur').setWidth(65)
      }else{  
        const data = countPresence(employes[i - 1].email, employes[i - 1].fullName)
        var cellNo = tr.appendTableCell(i.toFixed(0))
        const cellName = tr.appendTableCell(data.fullName)
        const cellPresence = tr.appendTableCell(data.presence.toFixed(0))
        const cellAbsent = tr.appendTableCell(data.absent.toFixed(0))
        const cellLembur = tr.appendTableCell(data.lembur.toFixed(0))
      }
  }

  footer.appendParagraph("Bagian Footer")

  destinationFolder.addFile(docFile)
  DriveApp.getRootFolder().removeFile(docFile)

  
}







// id folder : 1czd-FZCIYv1c1tKib_AMIuURUr3JQUu1