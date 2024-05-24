
const forms = document.getElementById("forms");
let linhas = '';

forms.addEventListener('submit', function(e) {
    e.preventDefault();
    
    addLinha();
    atualizaTabela();
});

function addLinha() {

    let inputNome = document.getElementById("Nome");
    let inputContato = document.getElementById("ContatoInput");
    console.log(inputNome);
    console.log(inputContato);
    
    let linha = `<tr>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputContato.value}</td>`;
    linha += `<tr>`;

    linhas += linha;

    inputNome.value = ' ';
    inputContato.value = ' ';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}