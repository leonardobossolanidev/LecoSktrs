// Dados de exemplo (substitua pela lógica de suas funções Python, se necessário)
const vendas = [
    { produto: "Mouse", categoria: "Eletrônicos", quantidade: 3, preco_unitario: 50.00 },
    { produto: "Teclado", categoria: "Eletrônicos", quantidade: 2, preco_unitario: 150.00 },
    { produto: "Cadeira", categoria: "Móveis", quantidade: 1, preco_unitario: 300.00 }
];

// Função para calcular total de vendas
function calcularTotalVendas(vendas) {
    const totalPorCategoria = {};
    vendas.forEach(venda => {
        const categoria = venda.categoria;
        const totalVenda = venda.quantidade * venda.preco_unitario;

        totalPorCategoria[categoria] = (totalPorCategoria[categoria] || 0) + totalVenda;
    });
    return totalPorCategoria;
}

// Função para calcular média de preços
function calcularMediaPrecos(vendas) {
    const somaPrecos = {};
    const contagemItens = {};
    
    vendas.forEach(venda => {
        const categoria = venda.categoria;
        const precoUnitario = venda.preco_unitario;

        somaPrecos[categoria] = (somaPrecos[categoria] || 0) + precoUnitario;
        contagemItens[categoria] = (contagemItens[categoria] || 0) + 1;
    });

    const mediaPorCategoria = {};
    for (const categoria in somaPrecos) {
        mediaPorCategoria[categoria] = somaPrecos[categoria] / contagemItens[categoria];
    }
    return mediaPorCategoria;
}

// Função para exibir resultados na tabela
function exibirResultados() {
    const totalVendas = calcularTotalVendas(vendas);
    const mediaPrecos = calcularMediaPrecos(vendas);

    const totalVendasTable = document.getElementById('totalVendasTable').getElementsByTagName('tbody')[0];
    const mediaPrecosTable = document.getElementById('mediaPrecosTable').getElementsByTagName('tbody')[0];

    for (const categoria in totalVendas) {
        const row = totalVendasTable.insertRow();
        row.insertCell(0).innerText = categoria;
        row.insertCell(1).innerText = totalVendas[categoria].toFixed(2);
    }

    for (const categoria in mediaPrecos) {
        const row = mediaPrecosTable.insertRow();
        row.insertCell(0).innerText = categoria;
        row.insertCell(1).innerText = mediaPrecos[categoria].toFixed(2);
    }
}

// Chama a função para exibir resultados ao carregar a página
window.onload = exibirResultados;
