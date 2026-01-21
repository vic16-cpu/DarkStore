// Banco de dados dos produtos
const produtos = {
    'ghoul': {
        nome: "Raça V4 Ghoul",
        preco: "R$ 21,59",
        desc: "Desperte o poder noturno. A Raça Ghoul V4 oferece regeneração de vida acelerada e velocidade aumentada durante a noite. Essencial para PvP.",
        estoque: 8
    },
    'human': {
        nome: "Raça V4 Human",
        preco: "R$ 21,59",
        desc: "A evolução suprema. Aumenta drasticamente o dano de seus ataques e fornece o medidor de Rage inquebrável. Perfeito para caçadores de recompensa.",
        estoque: 12
    },
    'shark': {
        nome: "Raça V4 Shark",
        preco: "R$ 21,59",
        desc: "Domine os oceanos. Imunidade total à água e escudos de água que absorvem dano massivo. A escolha dos tanques.",
        estoque: 5
    },
    'mink': {
        nome: "Raça V4 Mink",
        preco: "R$ 21,59",
        desc: "Velocidade relâmpago. Torne-se intocável com a velocidade máxima do jogo e trilhas elétricas que atordoam inimigos.",
        estoque: 3
    },
    'angel': {
        nome: "Raça V4 Angel",
        preco: "R$ 21,59",
        desc: "Ascensão divina. Voe livremente e use a aura real para pressionar e curar aliados próximos.",
        estoque: 7
    },
    'cyborg': {
        nome: "Raça V4 Cyborg",
        preco: "R$ 21,59",
        desc: "Tecnologia avançada. Dano em área constante com orbes elétricos e instinto de observação aprimorado.",
        estoque: 4
    },
    'draco': {
        nome: "Raça V4 Draco",
        preco: "R$ 21,59",
        desc: "Poder dracônico ancestral. Transformação completa com sopro de fogo e armadura de escamas.",
        estoque: 2
    }
};

// Função para abrir o modal
function abrirModal(produtoId) {
    const modal = document.getElementById('modalProduto');
    const dados = produtos[produtoId];

    if (dados) {
        // Preenche as informações na tela
        document.getElementById('modal-nome').innerText = dados.nome;
        document.getElementById('modal-preco').innerText = dados.preco;
        document.getElementById('modal-desc').innerText = dados.desc;
        document.getElementById('modal-stock').innerText = "Estoque Disponível: " + dados.estoque;
        
        // Mostra a janela (muda o display de none para flex)
        modal.style.display = "flex";
    }
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('modalProduto').style.display = "none";
}

// Fechar se clicar fora da janela branca
window.onclick = function(event) {
    const modal = document.getElementById('modalProduto');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
