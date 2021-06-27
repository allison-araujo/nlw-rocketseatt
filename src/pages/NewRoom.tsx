import { Link } from "react-router-dom";
import illustrationImg from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import { Button } from "../components/Button";

import "../styles/auth.scss";
import { useAuth } from "../hooks/useAuth";

export function NewRoom() {
  const { user } = useAuth();
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="imagem" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="lgoo" />

          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>
            Quer entrar sala exitente<Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
