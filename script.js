// BANCO DE DADOS (Informações dos produtos)
const produtosDB = {
    'ghoul': {
        nome: "RAÇA GHOUL V4",
        preco: "R$ 21,59",
        desc: "A melhor escolha para PvP noturno. Inclui regeneração de vida vampírica e velocidade aprimorada.",
        estoque: 15
    },
    'human': {
        nome: "RAÇA HUMAN V4",
        preco: "R$ 21,59",
        desc: "Dano bruto e imparável. A Raça Human V4 possui o medidor de Rage que torna seus ataques devastadores.",
        estoque: 8
    },
    'shark': {
        nome: "RAÇA SHARK V4",
        preco: "R$ 21,59",
        desc: "Imortalidade nos mares. O escudo Leviathan absorve dano massivo e anula o efeito da água.",
        estoque: 12
    },
    'mink': {
        nome: "RAÇA MINK V4",
        preco: "R$ 21,59",
        desc: "Velocidade sônica. Ninguém consegue fugir ou te alcançar. Gera tornados elétricos ao correr.",
        estoque: 5
    },
    'angel': {
        nome: "RAÇA ANGEL V4",
        preco: "R$ 21,59",
        desc: "O poder dos céus. Voe livremente e use a Aura do Rei para pressionar inimigos próximos.",
        estoque: 9
    },
    'cyborg': {
        nome: "RAÇA CYBORG V4",
        preco: "R$ 21,59",
        desc: "Tecnologia de ponta. Dano em cadeia e instinto aprimorado para detectar qualquer movimento.",
        estoque: 4
    },
    'draco': {
        nome: "RAÇA DRACO V4",
        preco: "R$ 21,59",
        desc: "Fúria ancestral. Transformação completa em dragão com habilidades de fogo.",
        estoque: 2
    }
};

// --- FUNÇÕES ---

// Função que abre o modal
function abrirModal(idProduto) {
    // 1. Acha o modal e os elementos de texto
    const modal = document.getElementById('modal-overlay');
    const produto = produtosDB[idProduto];

    // Se o produto existir no banco de dados
    if (produto) {
        // 2. Preenche as informações
        document.getElementById('m-nome').innerText = produto.nome;
        document.getElementById('m-desc').innerText = produto.desc;
        document.getElementById('m-preco').innerText = produto.preco;
        document.getElementById('m-stock').innerText = "Estoque Imediato: " + produto.estoque;

        // 3. Mostra a janela (Muda de display: none para flex)
        modal.style.display = 'flex';
    } else {
        console.error("Produto não encontrado: " + idProduto);
    }
}

// Função que fecha o modal
function fecharModal() {
    const modal = document.getElementById('modal-overlay');
    modal.style.display = 'none';
}

// Fechar se clicar na parte escura fora da janela
window.onclick = function(event) {
    const modal = document.getElementById('modal-overlay');
    if (event.target === modal) {
        fecharModal();
    }
}
