import Header from "./components/Header";
import Categories from "./components/Categories";
import PizzaList from "./components/pizzaList/PizzaList";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <Categories/>
          <PizzaList/>
        </div>
      </div>
    </div>
  );
}

export default App;
