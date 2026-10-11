import { Link } from "react-router-dom";

export default function Login(){
  return(
    <div className="flex flex-col">
      <h2>Login</h2>
      <form action="" method="get">
        <label htmlFor="email" className="block">E-mail</label>
        <input type="email" />

        <label htmlFor="password" className="block">Senha</label>
        <input type="password" />
      </form>
      <hr />
      <span>Ainda não tem uma conta?</span>
      <Link to="/register">Criar uma conta</Link>
    </div>
  )
}