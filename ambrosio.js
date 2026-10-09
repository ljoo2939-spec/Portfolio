const input = document.getElementById("input_comando");
const resultado = document.getElementById("resultado");
const nome = document.getElementById("João_Lucas");
const contato = document.getElementById("contato");

let temporizador;


input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const comando = input.value.trim().toLowerCase();

        clearTimeout(temporizador);
        resultado.textContent = "";

        if (comando === "1") {
            contato.style.display = "none";
            nome.style.display = "none";

            const texto =
                "Sobre mim: Sou João Lucas, aluno do 2º ano do Cotemig. " +
                "Procuro uma oportunidade de estágio e valorizo bastante o trabalho em equipe.\n" +
                "Gosto bastante de vôlei e tenho conhecimentos em diversas áreas de TI.\n" +
                "Sempre faço as coisas com o máximo de praticidade e excelência possível.";

            escreverTexto(texto);
        }

        else if (comando === "3") {
            contato.style.display = "none";
            nome.style.display = "none";

            const texto =
                "Nada ainda"

            escreverTexto(texto);
        }

        else if (comando === "2") {
            contato.style.display = "none";
            nome.style.display = "none";

            const texto =
                "Tenho conhecimentos em HTML e CSS para a criação e estilização de páginas web, " +
                "C# para desenvolvimento de aplicações e lógica de programação, " +
                "e MySQL para consultas e gerenciamento de bancos de dados.";

            escreverTexto(texto);
        }

        else if (comando === "4") {
            resultado.textContent = "";
            nome.style.display = "none";
            contato.style.display = "block";

            const formulario = document.getElementById("form-contato");
            const botao = formulario.querySelector("button[type='submit']");

            formulario.reset();

            botao.textContent = "Enviar mensagem";
            botao.disabled = false;
            botao.style.opacity = "1";
            botao.style.cursor = "pointer";
        }

        else if (comando === "5") {
            contato.style.display = "none";
            nome.style.display = "none";

            const texto =
                "Nada ainda"

            escreverTexto(texto);
        }

        else if (comando === "v") {
            resultado.textContent = "";
            contato.style.display = "none";
            input.value = "";
            nome.style.display = "block";
        }

        else {
            contato.style.display = "none";
            resultado.textContent = "Comando não encontrado.";
        }

        input.value = "";
    }
});

function escreverTexto(texto) {
    let i = 0;

    function escrever() {
        if (i < texto.length) {
            resultado.textContent += texto.charAt(i);
            i++;

            temporizador = setTimeout(escrever, 15);
        }
    }

    escrever();
}

document.getElementById("form-contato").addEventListener("submit", function (event) {
    event.preventDefault();

    const formulario = this;
    const botao = formulario.querySelector("button[type='submit']");

    if (botao.disabled) {
        return;
    }

    formulario.reset();

    botao.textContent = "Mensagem enviada";

    botao.disabled = true;
    botao.style.opacity = "0.7";
    botao.style.cursor = "not-allowed";
});