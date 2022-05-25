import "./App.css";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

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
        <Form />
      </section>
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Lista zadań</h2>
          <Buttons />
        </header>
        <div className="section__body">
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>
        </div>
      </section>
    </main>
  );
}

export default App;
