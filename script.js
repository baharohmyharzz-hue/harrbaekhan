const cards = document.querySelectorAll('.card');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');

const foto = document.getElementById('popup-foto');
const nama = document.getElementById('popup-nama');
const usia = document.getElementById('popup-usia');
const hobi = document.getElementById('popup-hobi');
const profesi = document.getElementById('popup-profesi');
const closeBtn = document.querySelector('.close-btn');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // isi popup sesuai data
    foto.src = card.dataset.foto;
    nama.textContent = card.dataset.nama;
    usia.textContent = card.dataset.usia + " tahun";
    hobi.textContent = card.dataset.hobi;
    profesi.textContent = card.dataset.profesi;

    overlay.classList.add('active');
    popup.classList.add('active');
  });
});

// klik overlay buat nutup popup
overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
  popup.classList.remove('active');
});

// klik tombol close buat nutup popup
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
  popup.classList.remove('active');
});
