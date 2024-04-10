

function App() {
  const nome = "Sanderson"

  function retornaNome () {
    return nome
  }

  const pessoa = {
    nome: "maria"
  }

  let estaDeDia = false;

  return (
    <>
    <h1>Olá, {pessoa.nome}</h1>
    <h2>Subtítulo</h2>
    {estaDeDia ? 'Bom dia!' : "Boa tarde!"}
    </>
  )
}

export default App
