import { Link } from 'react-router-dom';

export default function Register(){
  return(
    <div className="flex flex-col">
      <h2>Login</h2>
      <form action="" method="post">
        <label htmlFor="first_name" className="block">Nome</label>
        <input type="text" />

        <label htmlFor="last_name" className="block">Sobrenome</label>
        <input type="text" />

        <label htmlFor="email" className="block">E-mail</label>
        <input type="email" />

        <label htmlFor="password" className="block">Senha</label>
        <input type="password" />
      </form>
      <hr />
      <span>Já é registrado?</span>
      <Link to="/login">Entrar na conta</Link>
    </div>
  )
}