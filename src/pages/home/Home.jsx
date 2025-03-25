import "./Home.css";
import Button from "../../components/common/button/Button";

export default function Home() {
  return (
    <main>
      <Section1 />
    </main>
  );
}

function Section1() {
  return (
    <section className="home-section1">
      <div className="home-container-section1">
        <div className="section1-half">
          <h1>En SERVIS COEIN soluciones todo, excepto corazones rotos.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quisquam suscipit quaerat, magni vero, laborum provident debitis
            nisi, consequuntur placeat velit libero unde ipsam tempore
            laudantium praesentium non facilis repellat!
          </p>
          <Button link={"lin"} text={"Solicitar asesorita"} />
        </div>
      </div>
    </section>
  );
}
