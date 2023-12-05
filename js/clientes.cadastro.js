function obterDadosDoFormulario() {
    const nomeInput = document.querySelector("#nome");
    const telefoneInput = document.querySelector("#telefone");
    const emailInput = document.querySelector("#email");

    const dadosCliente = {
        nome: nomeInput.value,
        email: emailInput.value,
        telefone: telefoneInput.value,
    };

    return dadosCliente;
}

function salvarCliente() {
    const cliente = obterDadosDoFormulario();
    const valido = validarCamposFormulario();

    if (valido) {
        salvarDadosLocalStorage(cliente);
        limparCampos();
        window.location.href = "./clientes.html";
    } else {
        console.log("Preencha todos os campos");
        alert("Preencha todos os campos");
    }
}

function validarCamposFormulario() {
    const cliente = obterDadosDoFormulario();

    if (
        cliente.nome !== "" &&
        cliente.email !== "" &&
        cliente.telefone !== ""
    ) {
        return true;
    } else {
        return false;
    }
}

function obtemDadosLocalStorage() {
    const clientes = localStorage.getItem("clientes");
    return JSON.parse(clientes) || [];
}

function salvarDadosLocalStorage(cliente) {
    const clientes = obtemDadosLocalStorage();
    clientes.push(cliente);

    const clientesLS = JSON.stringify(clientes);
    localStorage.setItem("clientes", clientesLS);
}

function limparCampos() {
    const nomeInput = document.querySelector("#nome");
    const telefoneInput = document.querySelector("#telefone");
    const emailInput = document.querySelector("#email");

    nomeInput.value = "";
    telefoneInput.value = "";
    emailInput.value = "";
}
