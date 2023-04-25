    const monstros = [
    {
        id: 1,
        nome: 'Osvald',
        altura: 3,
        habilidade: 'superforça, inteligencia, teleptia, velocidade, controla mentes, regeneração, capacidade de voar ',
        foto: 'https://robohash.org/osvald'
    },
    {
        id: 2,
        nome: 'Megamente',
        altura: 2,
        habilidade: 'superforça, inteligencia, teleptia, velocidade, controla mentes, regeneração, capacidade de voar',
        foto: 'https://robohash.org/Megamente'
    },
    {
        id: 3,
        nome:  'Malafinho',
        altura: 7,
        habilidade: 'superforça, inteligencia, teleptia, velocidade, controla mentes, regeneração, capacidade de voar',
        foto: 'https://robohash.org/Malafinho'
    },
    {
        id: 4,
        nome: 'Abacate',
        altura: 1.5 ,
        habilidade: 'superforça, inteligencia, teleptia, velocidade, controla mentes, regeneração, capacidade de voar',
        foto: 'https://robohash.org/Abacate'
    },
] 

const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')

    
}) 

const TodosOsMonstros = monstros.map((monstros) => {
    return `<div>
    <p>Nome: ${monstros.nome}</p>
    <p>Altura: ${monstros.altura}</p>
    <img src="${monstros.foto}">
    <p class="habilidades">Habilidades: ${monstros.habilidade}</p> 
    </div>`
})

secao.innerHTML = TodosOsMonstros