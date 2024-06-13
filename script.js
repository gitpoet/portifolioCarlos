const form = document.querySelector('#dados');
const res = document.querySelector('.res');
const btn = document.querySelector('#btn');
const lista = document.querySelector('.lista');

function handleChange() {
  const autor = document.getElementById('autor').value;
  const obra = document.getElementById('obra').value;
  const paginas = document.getElementById('paginas').value;
  const generos = document.getElementById('generos').value;
  const resultado = document.getElementById('portf-res');

  resultado.innerHTML = `${autor} ${obra} ${paginas} ${generos}`;
  const dados = resultado.textContent;

  window.localStorage.setItem('livro', JSON.stringify(dados));
}

btn.addEventListener('click', handleChange);

window.localStorage.getItem('livro', JSON.stringify(livros));

let livros = Array.from(livros);
