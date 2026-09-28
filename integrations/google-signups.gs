// Paste into Extensions > Apps Script in the Google Sheet for signups.
// Set SPREADSHEET_ID and SIGNUP_TOKEN under Project Settings > Script properties.
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var data = JSON.parse(e.postData.contents);
    var properties = PropertiesService.getScriptProperties();
    var token = properties.getProperty('SIGNUP_TOKEN');
    if (!token || data.token !== token) return reply({ ok: false });
    var email = typeof data.email === 'string' ? data.email.trim() : '';
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return reply({ ok: false });
    lock.waitLock(5000);
    var spreadsheet = SpreadsheetApp.openById(properties.getProperty('SPREADSHEET_ID'));
    var sheet = spreadsheet.getSheetByName('Early access') || spreadsheet.insertSheet('Early access');
    if (sheet.getLastRow() === 0) sheet.appendRow(['Email', 'Signed up at']);
    var existing = sheet.getLastRow() > 1
      ? sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getDisplayValues()
      : [];
    if (!existing.some(function (row) { return row[0].toLowerCase() === email.toLowerCase(); })) {
      // A leading apostrophe prevents user input from becoming a sheet formula.
      sheet.appendRow(["'" + email, new Date()]);
    }
    return reply({ ok: true });
  } catch (error) {
    return reply({ ok: false });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function reply(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}
