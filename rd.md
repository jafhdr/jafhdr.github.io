# Portfolio Redesign — Astro + Tailwind CSS

Bertindak sebagai Senior Frontend Developer dan UI/UX Designer.

Redesign repository portofolio lokal saya menjadi website profesional yang terinspirasi dari:

https://themestarz.net/selfer/?storefront=envato-elements

Repository: https://github.com/jafhdr/jafhdr.github.io

Gunakan:
- Astro (versi stabil kompatibel terbaru)
- Tailwind CSS v4
- JavaScript untuk interaksi
- GitHub Pages untuk hosting statis

## 1. Audit dan Migrasi

Audit repository lokal terlebih dahulu, termasuk `git status`, HTML, CSS, JavaScript, aset gambar, dan CV.pdf.

Migrasikan website lama ke struktur Astro dengan mempertahankan konten relevan, foto profil, tautan sosial, dan simulasi Sistem Prediksi.

Jangan menghapus perubahan lokal yang belum di-commit. Hindari dependency berlebihan dan jangan melakukan commit/push.

## 2. Visual Design

Implementasikan desain orisinal dengan karakter Selfer, bukan menyalin source code atau aset berlisensi.

Target:
- Dark editorial aesthetic, minimalis dan premium.
- Hero full viewport, split layout: teks besar di kiri, foto profil dominan di kanan.
- Tipografi elegan, spacing luas, warna netral dengan satu aksen.
- Navigasi minimalis dan sticky.
- Transisi serta scroll reveal yang subtle.
- Project showcase yang lebih visual daripada kartu generik.
- Responsive mobile, tablet, desktop.
- Hindari glassmorphism, gradient berlebihan, dan komponen UI template generik.

Gunakan referensi visual Selfer untuk mengarahkan komposisi, tipografi, dan suasana desain.

## 3. Konten dari CV

Gunakan `CV.pdf` di repository sebagai sumber utama.

Identitas:
- Ja'far Maulana Ihsan
- Headline: Web Developer | AI & Data Enthusiast
- Email: ixanxnax299@gmail.com
- GitHub: https://github.com/jafhdr
- LinkedIn: https://linkedin.com/in/jafar-maulana-ihsan299

Bangun section:

1. **Home:** Hero, headline, foto, View Projects, Download CV.
2. **About:** Profil profesional berdasarkan ringkasan CV.
3. **Skills:** Web Development, AI/Data, Networking, Microsoft Office, Software & Hardware.
4. **Projects:** Sistem Prediksi Jumlah Siswa dengan demo interaktif yang dipertahankan. Jelaskan metode prediksinya secara akurat. Tambahkan CTI Web Application sebagai proyek *In Development* hanya jika informasi atau dokumentasinya tersedia dan terverifikasi.
5. **Experience:** Hanjuan Engineering (Data Entry Operator, Nov–Des 2023) dan Oppo Sales (Jun–Jul 2021).
6. **Education:** Universitas Muhammadiyah Cirebon, Teknik Informatika (2021–2025); SMK Yadika, Teknik Komputer Jaringan (2015–2018).
7. **Certifications:** Belajar Dasar AWS Cloud dan BNSP Junior Web Programming.
8. **Contact:** Email, GitHub, LinkedIn.

Gunakan Bahasa Indonesia profesional dengan istilah teknis Inggris seperlunya.

Jangan membuat pengalaman, pencapaian, statistik, sertifikasi, testimonial, atau proyek fiktif. Jangan menampilkan nomor telepon dan alamat rumah dari CV.

## 4. Struktur Teknis

Gunakan arsitektur Astro modular:

- `src/layouts/`
- `src/pages/index.astro`
- `src/components/`
- `src/styles/`
- `src/data/` untuk konten yang mudah diedit
- `public/` untuk foto dan CV

Gunakan komponen untuk Hero, Navbar, About, Skills, Projects, Experience, Education, Certifications, Contact, dan Footer.

Persyaratan:
- Static output, tanpa SSR.
- Tidak memerlukan backend.
- Semantic HTML dan accessible navigation.
- Responsive typography dan mobile menu.
- SEO metadata, Open Graph, favicon.
- Optimasi gambar dan lazy loading bila sesuai.
- Animasi menghormati `prefers-reduced-motion`.
- Hindari React kecuali benar-benar diperlukan.
- Pastikan simulasi prediksi tetap berjalan.

## 5. GitHub Pages

Konfigurasi deployment ke:

https://jafhdr.github.io/

Dalam `astro.config.mjs` gunakan:
- `site: 'https://jafhdr.github.io'`
- `output: 'static'`
- Tidak menggunakan project subpath/base.

Buat `.github/workflows/deploy.yml` menggunakan panduan resmi Astro dan GitHub Actions.

Pastikan workflow membangun dan memublikasikan output `dist/`, bukan source Astro mentah. Gunakan versi Actions yang kompatibel dan commit lockfile dependency.

Jangan melakukan push/deploy otomatis. Beri instruksi pengaturan GitHub Pages jika diperlukan.

## 6. Quality Assurance

Jalankan:
- Pemeriksaan kompatibilitas dependency.
- `npm run build`.
- Preview lokal jika memungkinkan.
- Pengecekan responsive pada 375px, 768px, dan 1440px.
- Uji navigasi, anchor, menu mobile, link eksternal, CV download, dan simulasi prediksi.
- Periksa console error, broken assets, horizontal overflow, dan aksesibilitas dasar.

Jangan mengklaim tes browser atau perbandingan visual telah dilakukan jika tidak tersedia alatnya.

## 7. Hasil Akhir

Berikan laporan ringkas:
1. Hasil audit dan migrasi.
2. File yang dibuat/diubah.
3. Fitur dan desain yang selesai.
4. Hasil validasi.
5. Cara menjalankan secara lokal.
6. Langkah manual untuk deploy ke GitHub Pages.

Fokus pada kualitas visual yang mendekati karakter Selfer, ketepatan konten CV, kode yang maintainable, dan hasil production-ready. Implementasikan perubahan secara lokal tanpa commit atau push.
