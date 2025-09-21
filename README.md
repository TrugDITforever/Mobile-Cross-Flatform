# 📖 Recipe Book (PWA)

## Giới thiệu
Recipe Book là một **Progressive Web App (PWA)** được xây dựng bằng **ReactJS**.  
Ứng dụng cho phép bạn:
- Thêm, sửa, xóa công thức nấu ăn.
- Lưu trữ công thức cục bộ (LocalStorage).
- Tìm kiếm công thức theo **nguyên liệu**.
- Hỗ trợ **offline** nhờ Service Worker.
- Có thể **cài đặt trên điện thoại hoặc desktop**.

---

## Công nghệ sử dụng
- **ReactJS (Create React App PWA template)**
- **HTML, CSS, JavaScript (ES6)**
- **LocalStorage** để lưu dữ liệu công thức
- **Service Worker** để cache và chạy offline
- **Manifest.json** để cài đặt app trên thiết bị

---

## Tính năng chính
- ➕ Thêm công thức mới (tên món, nguyên liệu, các bước).
- 🗑️ Xóa công thức.
- 🔍 Tìm kiếm công thức theo nguyên liệu.
- 📦 Dữ liệu được lưu trong LocalStorage, không mất khi reload.
- 📱 Hỗ trợ cài đặt app trên **Android, iOS, Desktop**.

---

## Cách chạy project

### 1. Clone project từ GitHub
### 2. Install node_module 
npm install
### 3. Run project
npm run build
npx serve -s build
