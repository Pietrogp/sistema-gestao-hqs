// Array local para armazenar HQs simulando um banco de dados
const hqs = JSON.parse(localStorage.getItem('hqs')) || [];

// Função para cadastrar uma HQ
function cadastrarHQ() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;
    const numeracao = document.getElementById('numeracao').value;

    // Validação básica
    if (!titulo || !autor || !ano || !numeracao) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Adicionar a HQ no array local
    hqs.push({ titulo, autor, ano, numeracao });

    // Atualizar o localStorage
    localStorage.setItem('hqs', JSON.stringify(hqs));

    alert('HQ cadastrada com sucesso!');
    document.getElementById('cadastroForm').reset();

    return false; // Evitar reload da página
}

