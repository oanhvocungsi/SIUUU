/** Điểm danh lớp học phần – SIU. Dán file này + Index/Style/Script.html vào dự án Apps Script. */
function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
    .setTitle('Điểm danh lớp học phần – SIU')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function include(name) { return HtmlService.createHtmlOutputFromFile(name).getContent(); }

/* ===== 3 hàm backend: GIỮ code cũ của bạn, thay phần thân dưới đây =====
   (xóa mọi khóa/secret trước khi gửi code cho ai) */
function apiLogin(classId, pin)        { throw new Error('Chưa nối backend'); }
function apiSubmit(payload)            { throw new Error('Chưa nối backend'); }
function apiReportWrong(payload)       { throw new Error('Chưa nối backend'); }
