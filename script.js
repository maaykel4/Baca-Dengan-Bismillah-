const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const nextBtn = document.querySelector(".next-btn");

let nextClicked = false;

nextBtn.addEventListener("click", () => {
  if (!nextClicked) {
    question.innerHTML = "Selamat Bulan Juni,ya! Kalau kata Pak Sapardi, 'Tak ada yang lebih tabah dari Hujan di Bulan Juni' semoga lo bisa setabah itu menghadapi sisa-sisa waktu Kadin di Bulan Juni ini, walaupun kita udah ngga berteman, but i'll be ur number one supporter di saat semua orang Kadin memusuhi lo karena aneh. Deni Manusia Ikan, makasih banyak udah membantu gua melewati masa-masa sulit dua minggu terakhir, it was my lowest point in my life, ngga tau kalo lo gak bantu memberi distraksi gua akan sehancur apa. Lo keren, se-worth it itu, jangan pernah berkecil hati karena yang kecil hanya gaji intern Kadin. Semoga kita bisa mereview Kopi Tuku sambil memijakkan kaki di Bulan! #ApresiasiGueYangSeharianBelajarNgodingBuatIni";
    gif.src = "https://github.com/DzarelDeveloper/Img/blob/main/okey.gif";
    nextBtn.innerHTML = "reply";
    nextClicked = true;
  } else {
    window.location.href = "https://wa.me/085692923745?text=reply%20message%20whatever";
  }
});