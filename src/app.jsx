import Slider from "./components/slider";

function App() {
  return (
    <>
      <body>
        <main>
          <section className="main-square">
            <article id="inside">
              <h1 id="head">Simula tu crédito</h1>
              <p>MONTO TOTAL</p>
            </article>
            <article id="monto"></article>
            <Slider />

            {/* <input className="slider" type="range" min="5000" max="50000" /> */}
          </section>
        </main>
      </body>
    </>
  );
}

export default App;
