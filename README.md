# Điểm danh SIU – giao diện mèo mascot (video)

## Cấu trúc
- `apps-script/` : Code.gs, Index.html, Style.html, Script.html → dán vào dự án Apps Script (tên file giữ nguyên).
- `assets/` : `logo.png`, `video/*.mp4` (14 clip), `poster/*.jpg` → upload vào repo `oanhvocungsi/siu-vip` thư mục `assets/` (nhánh main).
- `preview-index.html` : bản một file để mở thử trên trình duyệt (dùng demo data).

## Triển khai
1. Upload `assets/` lên GitHub (ghi đè thư mục assets hiện có, giữ tên file).
2. Apps Script: tạo 4 file như trên; trong Code.gs dán lại thân 3 hàm `apiLogin / apiSubmit / apiReportWrong` từ code cũ.
3. Deploy → Web app. Nếu đổi repo/nhánh, sửa `ASSET_BASE` đầu Script.html.
4. Sau khi đổi asset trên GitHub, jsDelivr cache ~12h: dùng `@<commit>` thay `@main` để cập nhật ngay.

## Luồng
Chọn thiết bị → mèo ngồi trên sách → bắt đầu gõ: lấy máy ra (`lay_*`) rồi gõ đồng bộ nhịp người dùng (`go_*`/`bam_dt`, tốc độ video theo tốc độ gõ) → Vào lớp: `chuan_bi_bay` → `bay1` → `nhan_logo` → `cho_logo` + nút logo → bấm/thả: tia sét → trang điểm danh. Sai PIN: `sai_*`. Gửi thành công: `*_thanh_cong`.
`bay.mp4` chưa dùng (chuỗi bay đã đủ dài). Có nút "Bỏ qua ›"; tôn trọng prefers-reduced-motion. Chưa có âm thanh.
