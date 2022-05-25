import "./App.css";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zrobić obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <main className="container">
      <h1>Lista zadań</h1>
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Dodaj nowe zadanie</h2>
        </header>
        <form className="form">
          <input
            className="form__input"
            placeholder="Co jest do zrobienia?"
            autofocus
          />
          <button className="form__button">Dodaj zadanie</button>
        </form>
      </section>
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Lista zadań</h2>
          <div className="buttons"></div>
        </header>
        <div className="section__body">
          <ul className="tasks"></ul>
        </div>
      </section>
    </main>
  );
}

export default App;
