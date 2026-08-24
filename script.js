const form = document.getElementById("formAnggota");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;

    alert(
        "Terima kasih " + nama +
        "! Pendaftaran kamu berhasil."
    );

    form.reset();

});