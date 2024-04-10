
import './perfil.css'

export const Perfil = () => {
    const usuario = {
        nome: "Sanderson",
        avatar: "https://github.com/SandersonGit.png"
    }
  return (


    <div>
        <img className='perfil-avatar' src={usuario.avatar} alt="" />
        <h3 className='perfil-titulo'> {usuario.nome} </h3>
    </div>
  )
}

