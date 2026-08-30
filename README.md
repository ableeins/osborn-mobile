<div align="center">

# 📍 OsbornTracker

**Sistem Pelacakan GPS Real-Time dengan Arsitektur Serverless**

[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://instagram.com/ableeins)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/6281210181427)

<br>

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

<br>

## ✨ Tentang Proyek
**OsbornTracker** adalah ekosistem pelacakan lokasi berkinerja tinggi yang menjembatani aplikasi seluler dan dasbor pemantau secara langsung (*real-time*). Proyek ini dirancang dengan filosofi *lightweight*—alih-alih menggunakan *framework* web yang berat, dasbor pemantau murni diracik menggunakan **HTML, CSS, dan Vanilla JavaScript**, memberikan performa *render* peta yang super cepat dan sangat responsif di browser apa pun.

## 🚀 Fitur Unggulan
*   📡 **Live GPS Telemetry:** Aplikasi seluler (berbasis React Native/Expo) memancarkan koordinat presisi tinggi tanpa jeda.
*   ⚡ **Vanilla JS Dashboard:** Dasbor web interaktif dibangun menggunakan HTML/CSS dan **Vanilla JavaScript** murni yang dipadukan dengan Leaflet.js, memastikan eksekusi kode klien yang sangat ringan.
*   🔥 **Serverless Sync:** Mengandalkan *snapshot listener* dari Firebase Cloud Firestore untuk sinkronisasi pergerakan *marker* peta secara seketika (*real-time*).

---

## 📂 Arsitektur Repositori
Repositori ini mengusung konsep *monorepo* sederhana yang memuat dua klien berbeda:
1.  `osborn-mobile/` : *Source code* aplikasi seluler (Frontend Klien).
2.  `osborn-web/` : *Source code* dasbor pemantau (HTML/CSS & Vanilla JS).

---

## 🛠️ Panduan Instalasi & Eksekusi

### 1. Konfigurasi Backend (Firebase)
1. Buat *project* di [Firebase Console](https://console.firebase.google.com/).
2. Aktifkan **Firestore Database** dan inisialisasi menggunakan opsi **Start in Test Mode**.
3. Dapatkan objek kredensial `firebaseConfig` Anda.

### 2. Memulai Klien Seluler (React Native)
```bash
# Pindah ke direktori mobile app
cd osborn-mobile

# Unduh dependensi Node.js
npm install

# Jalankan server pengembangan (clear cache)
npx expo start -c
