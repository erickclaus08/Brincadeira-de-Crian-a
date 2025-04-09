document.addEventListener('DOMContentLoaded', function() {
    
    const contatoForm = document.getElementById('contatoForm');
    
    contatoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        if(nome && email && mensagem) {
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve pelo email ${email}.`);
            contatoForm.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
    
    
    window.adicionarAoCarrinho = function(nomeProduto, precoProduto) {
        alert(`"${nomeProduto}" foi adicionado ao carrinho!\nValor: R$ ${precoProduto.toFixed(2)}`);
        
    };
    
    
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
            
            history.pushState(null, null, targetId);
        });
    });
    
    const linhasTabela = document.querySelectorAll('table tbody tr');
    
    linhasTabela.forEach(linha => {
        const estoqueText = linha.cells[3].textContent;
        const estoque = parseInt(estoqueText);
        
        if(!isNaN(estoque) {
            if(estoque < 10) {
                linha.style.backgroundColor = '#fff4f4';
                linha.cells[3].innerHTML = estoqueText + ' <span style="color:red;">(Últimas unidades!)</span>';
            }
        }
    });
    
    
    function carregarBrinquedos() {
        fetch('brinquedos.json')
            .then(response => response.json())
            .then(data => {
                const container = document.querySelector('.brinquedos-container');
                container.innerHTML = '';
                
                data.forEach(brinquedo => {
                    container.innerHTML += `
                        <div class="brinquedo-card">
                            <img src="${brinquedo.imagem}" alt="${brinquedo.nome}">
                            <h3>${brinquedo.nome}</h3>
                            <p>${brinquedo.descricao}</p>
                            <p class="preco">R$ ${brinquedo.preco.toFixed(2)}</p>
                            <button class="btn" onclick="adicionarAoCarrinho('${brinquedo.nome}', ${brinquedo.preco})">Comprar</button>
                        </div>
                    `;
                });
            })
            .catch(error => console.error('Erro ao carregar brinquedos:', error));
    }
    
    carregarBrinquedos();
});


### Funcionalidades incluídas:

1. *Formulário de Contato*:
   - Validação básica dos campos obrigatórios
   - Feedback ao usuário quando o formulário é enviado
   - Reset do formulário após envio

2. *Carrinho de Compras*:
   - Função adicionarAoCarrinho que mostra um alerta com o produto selecionado
   - Comentários mostrando como poderia ser implementado o armazenamento local

3. *Navegação Suave*:
   - Rolagem suave ao clicar nos links do menu
   - Atualização da URL sem recarregar a página

4. *Destaque de Estoque Baixo*:
   - Identifica produtos com menos de 10 unidades na tabela
   - Destaca essas linhas com cor de fundo e texto adicional

5. *Exemplo de Carregamento Dinâmico* (comentado):
   - Código exemplo de como carregar brinquedos de um arquivo JSON
   - Mostra como poderia ser implementada uma solução mais dinâmica