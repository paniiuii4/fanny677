const form = document.getElementById("absenForm");
const riwayatList = document.getElementById("riwayat");

function loadRiwayat() {
    let data = JSON.parse(localStorage.getItem("absensi_pikr")) || [];
    riwayatList.innerHTML = "";

    data.forEach((item) => {
        let li = document.createElement("li");
        li.className = "p-2 bg-gray-200 rounded";
        li.textContent = `${item.nama} - ${item.kelas} (${item.tanggal})`;
        riwayatList.appendChild(li);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const kelas = document.getElementById("kelas").value;
    const tanggal = new Date().toLocaleString("id-ID");

    let data = JSON.parse(localStorage.getItem("absensi_pikr")) || [];

    data.push({ nama, kelas, tanggal });

    localStorage.setItem("absensi_pikr", JSON.stringify(data));

    form.reset();
    loadRiwayat();
});

loadRiwayat();
