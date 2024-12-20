const hqs = [];

function adicionarHQ(titulo, autor, ano, numeracao) {
    hqs.push({ titulo, autor, ano, numeracao });
}

function listarHQs() {
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
}

// Chame a função listarHQs quando a página carregar
document.addEventListener('DOMContentLoaded', listarHQs);