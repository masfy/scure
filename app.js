
const formInput = document.getElementById("formUrl");
const video = document.getElementById("qr-video");

function startExam() {
  const url = formInput.value.trim();
  if (!url.startsWith("http")) {
    alert("Masukkan URL Google Form yang valid.");
    return;
  }
  localStorage.setItem("exam-url", url);
  window.location.href = "exam.html";
}

function startScanner() {
  video.style.display = "block";
  const qr = new Html5Qrcode("qr-video");
  qr.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    qrCodeMessage => {
      qr.stop();
      video.style.display = "none";
      formInput.value = qrCodeMessage;
    }
  ).catch(err => {
    alert("Gagal mengakses kamera: " + err);
  });
}
