function cadastrarHQ() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;
    const numeracao = document.getElementById('numeracao').value;

    if (titulo && autor && ano && numeracao) {
        alert('HQ cadastrada com sucesso!');
        // Aqui você pode adicionar a lógica para armazenar os dados
        return true;
    } else {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
}