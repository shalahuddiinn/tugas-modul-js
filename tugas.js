// TUGAS 3, 4, & 5 

const nilaiMahasiswa = [
  { tugas: 20, uts: 50, uas: 30 },
  { tugas: 80, uts: 70, uas: 90 },
  { tugas: 60, uts: 55, uas: 65 },
  { tugas: 40, uts: 50, uas: 45 },
  { tugas: 90, uts: 85, uas: 95 }
];

function hitungNilaiAkhir(tugas, uts, uas) {
  return (tugas + uts + uas) / 3;
}

function tentukanGrade(nilaiAkhir) {
  if (nilaiAkhir >= 85) return "A";
  if (nilaiAkhir >= 70) return "B";
  if (nilaiAkhir >= 55) return "C";
  if (nilaiAkhir >= 40) return "D";
  return "E";
}

function tampilkanHasil(data) {
  data.forEach((mhs, i) => {
    let nilaiAkhir = hitungNilaiAkhir(mhs.tugas, mhs.uts, mhs.uas);
    let grade = tentukanGrade(nilaiAkhir);

    console.log(`Mahasiswa ${i+1} => Nilai Akhir: ${nilaiAkhir.toFixed(2)} |e Grade: ${grade}`);
  });
}

tampilkanHasil(nilaiMahasiswa);
