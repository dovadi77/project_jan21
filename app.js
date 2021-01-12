const list_success = ['Produk Teruji',
  'Test Market',
  'Konsumen Mudah Mendapatkan Produk',
  'Izin BPOM & Sertifikasi Halal',
  'Memastikan Kesediaan Stok',
  'Tidak Perang Harga',
  'Foto & Video Produk',
  'Konten Iklan',
  'Konten Postingan di Social Media',
  'Endorsement oleh Influencers',
  'Testimoni Pembeli',
  'Bonus untuk Pembeli',
  'Mendatangkan Pembeli(Traffic)',
  'Customer Service'];

let listSuccess = document.querySelector('#listSuccess');

list_success.forEach(element => {
  $(listSuccess).append(`<li class="list-padding list-font list-type">
            <div class="list-container">
            <svg class="icon-list" viewBox="0 0 512 512" data-id="icon-dot-circle-solid" data-name="" style="color: rgb(7, 171, 57) !important;">
            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"></path>
        </svg>
        </div>
        <span class="list-text">
                ${element}</span>
          </li>`);
});


const about_fibro = [
  'Detoks harian, membersihkan saluran pencernaan, membuang kotoran sisa - sisa makanan.',
  'Vitamin dan mineral dari ekstrak sayuran & buah - buahan dengan rasa lemon.',
  'Suplemen pendamping untuk program penurunan berat badan.'
]

let aboutFibro = document.querySelector('#aboutFibro')

about_fibro.forEach(element => {
  $(aboutFibro).append(`<li class="list-padding list-font list-type">
            <div class="list-container">
            <svg class="icon-list" viewBox="0 0 512 512" data-id="icon-dot-circle-solid" data-name="" style="">
            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"></path>
        </svg>
        </div>
        <span class="list-text">
                ${element}</span>
          </li>`);
})


const manfaat_fibro = [
  'Manfaat Fibro bisa langsung terasa dalam beberapa hari pemakaian.',
  'Membantu proses diet dalam menurunkan berat badan & merampingkan perut buncit.',
  'Menangani masalah pencernaan seperti diare, sembelit, wasir, ambeien dan susah BAB.',
  'Membantu menjaga daya tahan tubuh karena mengandung Vitamin C & serat, sangat bagus di masa pandemi.',
  'Memberikan rasa kenyang sehingga membantu mengendalikan rasa lapar.',
  'Lolos uji BPOM, Halal, HACCP.Aman untuk dikonsumsi.',
  'Disertai dengan Tips Diet, sudah terbukti oleh banyak customers Fibro dan secara ilmiah.'
]

let mFibro = document.querySelector('#manfaatFibro');

manfaat_fibro.forEach(element => {
  $(mFibro).append(`<li class="list-padding list-font list-type">
            <div class="list-container">
            <svg class="icon-list" viewBox="0 0 512 512" data-id="icon-dot-circle-solid" data-name="" style="">
            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"></path>
        </svg>
        </div>
        <span class="list-text">
                ${element}</span>
          </li>`);
});



let testomoni = document.querySelector('#testimoni');
for (let index = 0; index < 6; index++) {
  $(testimoni).append(`
    <div class="col-12 col-lg-4">
          <img
          src="img/Testimoni${index}.jpg"
          alt="Testimoni ${index + 1}"
          class="d-block mb-3"
          style=width:100%
        />
        </div>
  `);
}

const element_bisnis = [
  '<strong>Produk</strong> yang sudah <strong>terbukti bagus</strong>(Sudah dijual lebih dari 2 tahun)',
  'Konsumen <strong>mudah mendapatkan produk</strong>(Distribusi kami tersebar di seluruh Indonesia)',
  'Fibro adalah produk yang <strong>bisa dikonsumsi habis</strong>, sehingga <strong>customers akan melakukan repeat order dari Anda</strong>.',
  '<strong>Sales / Marketing Kit yang Lengkap.</strong>',
  '<strong>Foto & Video Produk.</strong>',
  '<strong>Konten Postingan & Iklan.</strong>',
  '<strong>Testimoni Pembeli.</strong>',
  '<strong>Testimoni Influencers.</strong>',
  '<strong>Izin BPOM & Sertifikasi Halal</strong>',
  '<strong>Template Chat Customers Service</strong>. Anda tidak lagi bingung menjawab pertanyaan customers.',
  '<strong>Bonus untuk customers</strong>.Bonus ini bisa membantu customers repeat order dari Anda.',
  '<strong>Pengiriman Cepat & Murah.</strong>',
  'Setiap pembelian Anda akan mendapat poin. <strong>Poin dapat ditukarkan hadiah LANGSUNG TANPA DIUNDI</strong> berupa laptop, televisi, sampai Umroh.'
]

let elementBisnis = document.querySelector('#elementBisnis');

element_bisnis.forEach(element => {
  $(elementBisnis).append(`
    <li>${element}</li>
  `);
});

const benefit_agen = [
  '<strong>Menikmati semua benefit Reseller seperti yang sudah disebutkan di atas.</strong>',
  '<strong><span class="bg-yellow">Nama Anda akan muncul di website detoxfibro.com</span> yang diiklankan jutaan rupiah per hari.</strong>',
  'Anda juga akan mendapat <strong><span class="bg-yellow">rekomendasi dari pusat</span></strong> karena <strong>Anda menjadi perwakilan brand Fibro</strong> di kota Anda.',
  'Anda akan <strong>diperkenalkan sebagai Agen Fibro di komunitas Dusdusan.com</strong> (Ratusan ribu resellers), sehingga <strong><span class="bg-yellow">Resellers bisa secara manual menghubungi Anda untuk order Fibro</span></strong> dengan harga member kepada Anda.',
  'Nama Anda akan muncul di sistem Dusdusan.com sebagai Agen untuk produk Fibro sehingga <strong><span class="bg-yellow">reseller secara otomatis akan order kepada Anda jika ada customers di kota Anda</span></strong> (Sistem ini akan dilaunch di akhir tahun 2020)',
  '<strong><span class="bg-yellow">Agen di setiap daerah akan dibatasi</span></strong>, sehingga Anda bisa menguasai penjualan di kota itu. <strong>SIAPA CEPAT DIA DAPAT</strong>.',
  '<strong>Relasi</strong> dengan pemilik brand Fibro <strong>lebih dekat</strong>.'
]

let benefitAgen = document.getElementById('benefitAgen');

benefit_agen.forEach(element => {
  $(benefitAgen).append(`<li>${element}</li>`);
})