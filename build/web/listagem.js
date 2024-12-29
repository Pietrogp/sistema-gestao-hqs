// Array local para armazenar HQs simulando um banco de dados
const hqs = JSON.parse(localStorage.getItem('hqs')) || [];

// Função para listar HQs
document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    hqs.forEach(hq => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${hq.titulo}</td>
            <td>${hq.autor}</td>
            <td>${hq.ano}</td>
            <td>${hq.numeracao}</td>
        `;
        tbody.appendChild(tr);
    });
});
