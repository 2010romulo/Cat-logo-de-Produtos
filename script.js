function verProduto() {
    let produto = document.getElementById("produto").value;

    // IF → validação
    if (produto === "") {
        alert("Selecione um produto válido");
        return;
    }

    // SWITCH → catálogo
    switch (produto) {
        case "notebook":
            document.getElementById("nome").innerText = "Notebook";
            document.getElementById("descricao").innerText = "Notebook potente";
            document.getElementById("preco").innerText = "R$ 3.500";
            document.getElementById("imagem").src = "img/notebook.png";
            break;

        case "mouse":
            document.getElementById("nome").innerText = "Mouse";
            document.getElementById("descricao").innerText = "Mouse sem fio";
            document.getElementById("preco").innerText = "R$ 80";
            document.getElementById("imagem").src = "img/mouse.png";
            break;

        case "teclado":
            document.getElementById("nome").innerText = "Teclado";
            document.getElementById("descricao").innerText = "Teclado mecânico";
            document.getElementById("preco").innerText = "R$ 200";
            document.getElementById("imagem").src = "img/teclado.png";
            break;

        case "monitor":
            document.getElementById("nome").innerText = "Monitor";
            document.getElementById("descricao").innerText = "Monitor 24 polegadas";
            document.getElementById("preco").innerText = "R$ 900";
            document.getElementById("imagem").src = "img/monitor.png";
            break;
    }
}

// Botão limpar
function limpar() {
    document.getElementById("produto").value = "";
    document.getElementById("nome").innerText = "";
    document.getElementById("descricao").innerText = "";
    document.getElementById("preco").innerText = "";
    document.getElementById("imagem").src = "padrao.png";
}