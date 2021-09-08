function mudarLivro(nome){
    let titulo = document.querySelector('.titulo')
    let descricao = document.querySelector('.descricao')
    let capa = document.querySelector(`.livro-principal`)
    let botoes = document.querySelector(`.botoes`)
    let currentBook = bookData.filter(el=>el.alt===nome)
    let capaPath = `../img/capa/${nome}.jpg`
    let nomeLivro = currentBook[0].nome.split(" ").join("+")

    botoes.style = `display:block;`
    descricao.innerHTML = currentBook[0].descricao
    titulo.innerHTML = currentBook[0].nome
    capa.style = `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%),
    url(${capaPath})`
    botoes.innerHTML = `<a>
                            <button class="botao">
                            <i class="fas fa-info-circle"></i>
                            Mais Informações</button>
                        </a>
                        <a  href="https://openlibrary.org/search?q=${nomeLivro}&mode=everything"
                            class="livro-link">
                                        <button class="botao">
                                        <i class="fas fa-book"></i>
                                        Ler agora
                                        </button>        
                        </a>
                        `
  }