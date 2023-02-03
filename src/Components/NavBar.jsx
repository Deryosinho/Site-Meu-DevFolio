import Style from "../assets/CSS/Web.css";

export default function NavBar() {
  return (
    <div>
      <nav className="NavBar">
        <li className="itens">
          <a href="#" className="links">
            Inicio
          </a>
        </li>
        <li className="itens">
          <a href="#" className="links">
            Sobre
          </a>
        </li>
        <li className="itens">
          <a href="#" className="links">
            Projetos
          </a>
        </li>
        <li className="itens">
          <a href="#" className="links">
            Contato
          </a>
        </li>
      </nav>
    </div>
  );
}
