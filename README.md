# Ayam & Bebek Bakar Kartosuro

Website menu Ayam & Bebek Bakar Kartosuro. Pesanan dikirim lewat WhatsApp.

## Isi folder

- `index.html` - halaman utama
- `style.css` - tampilan
- `main.js` - tombol tambah/kurang dan pesan WhatsApp
- `ayam-bakar.jpg`, `bebek-bakar.jpg`, `tahu-bakar.jpg`, `tempe-bakar.jpg` - foto
- `favicon.svg` - ikon tab
- `vercel.json` - pengaturan keamanan saat online di Vercel

## Ganti harga atau menu

Harga ada di dua tempat:

1. `main.js`, bagian `daftarMenu` (ini yang dipakai untuk hitung total dan pesan WhatsApp).
2. `index.html`, tulisan di `<span class="menu-price">` (hanya tampilan).

Kalau tambah menu baru, salin satu blok `<div class="menu-card" data-id="...">`, lalu tambahkan `data-id` yang sama di `daftarMenu`.

## Ganti nomor WhatsApp

- `main.js` baris pertama: `const nomorWA = '6283115601008';` (pakai 62, tanpa 0 di depan)
- `index.html`: cari `6283115601008` dan `0831-1560-1008`

## Keamanan

- Tidak ada form, database, atau login, jadi tidak ada data pengunjung yang disimpan.
- Harga dihitung di `main.js`, bukan dari tulisan di halaman. Jumlah dibatasi 50 per menu.
- Tidak ada script atau style inline, jadi `vercel.json` bisa memakai Content-Security-Policy yang ketat.
- Header lain: HSTS, `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`.
- Semua link keluar memakai `rel="noopener noreferrer"`.

## Cara online gratis (GitHub + Vercel)

1. Buat repo baru di github.com, upload semua isi folder ini.
2. Di vercel.com pilih **Continue with GitHub**, lalu **Add New > Project** dan pilih repo tadi.
3. Framework Preset pilih **Other**, klik **Deploy**.

Setiap file di GitHub diubah, Vercel otomatis memperbarui websitenya.

## Belum diisi

Alamat dan jam buka belum dicantumkan. Tambahkan di bagian `<!-- Kontak -->` di `index.html` kalau sudah ada.
