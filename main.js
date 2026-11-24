const nomorWA = '6283115601008';
const maksPerMenu = 50;

// harga dipegang di sini, bukan dibaca dari halaman
const daftarMenu = {
  ayam: { nama: 'Ayam Bakar', harga: 17000 },
  bebek: { nama: 'Bebek Bakar', harga: 25000 },
  tahu: { nama: 'Tahu Bakar', harga: 2000 },
  tempe: { nama: 'Tempe Bakar', harga: 2000 }
};

const semuaMenu = document.querySelectorAll('.menu-card');
const keranjang = document.getElementById('keranjang');
const linkPesan = document.getElementById('linkPesan');
const totalItem = document.getElementById('totalItem');
const totalHarga = document.getElementById('totalHarga');

function formatRupiah(angka) {
  return 'Rp' + angka.toLocaleString('id-ID');
}

function ubahJumlah(card, tambah) {
  const jumlahEl = card.querySelector('.jumlah');
  let jumlah = (parseInt(jumlahEl.textContent, 10) || 0) + tambah;
  jumlah = Math.min(Math.max(jumlah, 0), maksPerMenu);

  jumlahEl.textContent = jumlah;
  card.classList.toggle('dipilih', jumlah > 0);
  updateKeranjang();
}

function updateKeranjang() {
  let jumlahItem = 0;
  let total = 0;
  let pesan = 'Halo Ayam & Bebek Bakar Kartosuro, saya mau pesan:\n';

  semuaMenu.forEach(function (card) {
    const menu = daftarMenu[card.dataset.id];
    const jumlah = parseInt(card.querySelector('.jumlah').textContent, 10) || 0;
    if (!menu || jumlah < 1) return;

    jumlahItem += jumlah;
    total += menu.harga * jumlah;
    pesan += '- ' + menu.nama + ' x ' + jumlah + ' = ' + formatRupiah(menu.harga * jumlah) + '\n';
  });

  pesan += 'Total: ' + formatRupiah(total);

  totalItem.textContent = jumlahItem + ' item';
  totalHarga.textContent = formatRupiah(total);
  linkPesan.href = 'https://wa.me/' + nomorWA + '?text=' + encodeURIComponent(pesan);

  keranjang.classList.toggle('tampil', jumlahItem > 0);
  document.body.classList.toggle('ada-pesanan', jumlahItem > 0);
}

semuaMenu.forEach(function (card) {
  card.querySelector('.btn-tambah').addEventListener('click', function () {
    ubahJumlah(card, 1);
  });
  card.querySelector('.btn-plus').addEventListener('click', function () {
    ubahJumlah(card, 1);
  });
  card.querySelector('.btn-kurang').addEventListener('click', function () {
    ubahJumlah(card, -1);
  });
});
