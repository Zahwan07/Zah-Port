<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nim = $_POST['nim'];
    $nama = $_POST['nama'];
    $jenis_kelamin = $_POST['jenis_kelamin'];
    $alamat = $_POST['alamat'];
    $no_hp = $_POST['no_hp'];
    $email = $_POST['email'];

    $file = 'data_mahasiswa.csv';

    if (!file_exists($file)) {
        $header = ['NIM', 'Nama', 'Jenis Kelamin', 'Alamat', 'No HP', 'Email'];
        $handle = fopen($file, 'w');
        fputcsv($handle, $header);
        fclose($handle);
    }

    $handle = fopen($file, 'a');

    $data = [$nim, $nama, $jenis_kelamin, $alamat, $no_hp, $email];

    fputcsv($handle, $data);

    fclose($handle);

    header("Location: form_input.html");
    exit();
}
?>
