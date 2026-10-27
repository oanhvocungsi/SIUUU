# Giao diện điểm danh SIU – bản có clip mèo

## Gồm những gì
- `index.html` – toàn bộ giao diện (đăng nhập → màn bay → cổng logo → điểm danh). Dán nguyên file vào Apps Script.
- `Code.gs` – `doGet` + 3 hàm `apiLogin`, `apiSubmit`, `apiReportWrong` (đang để trống, bạn nối vào sheet).
- `assets/` – 14 clip mp4 đã nén (~9 MB), ảnh poster `idle.jpg`, `logo.png`.

## Clip nào dùng ở đâu
| Bước | PC | Điện thoại |
|---|---|---|
| Mèo nằm chờ (lặp) | `idle` | `idle` |
| Bấm vào ô nhập: mèo lấy máy ra | `lap-take` | `phone-take` |
| Đang gõ (lặp) | `lap-type` | `phone-type` |
| Sai mã lớp / PIN | `lap-wrong` | `phone-wrong` |
| Bấm "Vào lớp": chuẩn bị bay | `fly-ready` | `fly-ready` |
| Đang tìm lớp (lặp) | `fly-lap` | `fly-phone` |
| Bay tới cổng, đáp xuống | `arrive` | `arrive` |
| Quay lại chỉ vào logo | `point` | `point` |
| Gửi điểm danh xong | `lap-ok` | `phone-ok` |

## Cài đặt
1. Apps Script không lưu được video, nên đưa cả thư mục `assets/` lên GitHub repo `oanhvocungsi/siu-vip` (nhánh `main`, thư mục `assets/`). Nếu đổi repo thì sửa `REPO_BASE` ở đầu phần `<script>`.
2. Apps Script: tạo file HTML tên `index` dán `index.html` vào; dán `Code.gs`; nối 3 hàm api.
3. Deploy → Quản lý bản triển khai → Chỉnh sửa → Phiên bản mới.

Lưu ý: jsDelivr lưu đệm file `@main` khoảng 12 giờ. Khi thay clip, mở `https://purge.jsdelivr.net/gh/oanhvocungsi/siu-vip@main/assets/<tên file>` để làm mới.

## Chỉnh nhanh (đầu phần `<script>`)
- `RATE`: tốc độ cảnh bay. Lần đầu 1.25, các lần sau 1.7 (đã xem rồi thì nhanh hơn).
- Thử điện thoại trên máy tính: thêm `?device=phone` vào link; thử PC: `?device=pc`.
- Mở thẳng `index.html` (cần chạy qua http, ví dụ `python -m http.server`): dùng dữ liệu mẫu, PIN `000000` sẽ báo sai.
