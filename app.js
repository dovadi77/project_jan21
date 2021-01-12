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
  $(listSuccess).append(`<li class="list-padding">
            <div class='row no-gutters'>
              <div class='col-2 icon-list py-md-2 py-lg-2'>
                <svg
                  class="color-list px-3 px-md-5 px-lg-5"
                  viewBox="0 0 512 512"
                  style="color: rgb(7, 171, 57)"
                >
                  <path
                    d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
                  ></path></svg>
              </div>
              <div class='col-10 list-font my-auto'>
                ${element}
              </div>
            </div>
          </li>`);
});

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
  $(mFibro).append(`
            <li class="list-padding">
              <div class="row no-gutters">
                <div class="col-2 icon-list py-md-2 py-lg-2">
                  <svg
                    class="color-list px-3 px-md-5 px-lg-5 primary-color"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
                    ></path>
                  </svg>
                </div>
                <div class="col-10 list-font my-auto">
                  ${element}
                </div>
              </div>
            </li>
  `);
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