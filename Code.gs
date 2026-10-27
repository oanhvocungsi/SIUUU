/**
 * Code.gs – khung tối thiểu để chạy giao diện điểm danh (index.html) trên Google Apps Script.
 * Ba hàm api* bên dưới đang để trống: thay phần TODO bằng code đọc/ghi Google Sheet của bạn.
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Điểm danh lớp học phần – SIU')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/** Đăng nhập: trả về {ok, message, cls:{name,term,code,size,teacher,leader}, sessions:[{n,label}], students:[{mssv,name,cls}]} */
function apiLogin(classId, pin) {
  // TODO: kiểm tra mã lớp + PIN trong sheet, rồi trả danh sách lớp
  return { ok: false, message: 'Chưa kết nối phụ trợ.' };
}

/** Gửi điểm danh: payload = {classId, pin, session, date, mode:'study'|'off', absent:[{mssv, type:'KP'|'CP'}]} */
function apiSubmit(payload) {
  // TODO: ghi vào sheet. KP = không phép, CP = có phép; sinh viên không nằm trong absent là có mặt.
  return { ok: false, message: 'Chưa kết nối phụ trợ.' };
}

/** Báo sai danh sách lớp */
function apiReportWrong(classId, text) {
  // TODO: ghi log hoặc gửi mail cho phòng
  return { ok: true };
}
