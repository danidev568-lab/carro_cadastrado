
function cadastrarCarro() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let ano = document.getElementById("ano").value;
    let placa = document.getElementById("placa").value;
    let cor = document.getElementById("cor").value;

    if (marca === "" || modelo === "" || ano === "" || placa === "" || cor === "") {
        alert("Preencha todos os campos!");
        return;
    }

    alert(
        "Carro cadastrado com sucesso!\n" +
        "Marca: " + marca +
        "\nModelo: " + modelo +
        "\nAno: " + ano +
        "\nPlaca: " + placa +
        "\nCor: " + cor
    );
}
