import Style from "../assets/CSS/Web.css";
import Eu from "../assets/Imagens/Eu.png";

export default function Presentation() {
  return (
    <div>
      <section className="Presentation">
        <h1>
          Dev<span>Fólio</span>
        </h1>
        <div className="Separator">
          <img src={Eu} />
          <h2>Davi de Andrade Lindoso</h2>
        </div>
      </section>
    </div>
  );
}
