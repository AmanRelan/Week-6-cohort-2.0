import Callback from "./components/Callback";
import CardWrapper from "./components/CardWrapper";
import Header from "./components/Header";
import HeaderMemoized from "./components/HeaderMemoized";
import HeaderWithButton from "./components/HeaderWithButton";
import KeysComponent from "./components/KeysComponent";
import TextComponent from "./components/TextComponent";
import TodoWithId from "./components/TodoWithId";
// import TodosFromServer from "./components/TodosFromServer";
import { useState } from "react";
import UseMemoHookExample from "./components/useMemoHookExample";
import BusinessCard from "./components/BusinessCard";
import SolutionBusinessCard from "./components/SolutionBusinessCard";

function App() {
  const [selectedTodoId, setSelectedTodoId] = useState(1);
  return (
    <>
      <div className="week-5-assignment">
        <h1>Business Card</h1>
        <BusinessCard />
      </div>
      <div className="solution-business-card">
        <h1>Solution Business Card</h1>
        <SolutionBusinessCard
          name="Aman Relan"
          description="Node.js developer with 4+ years Of experience"
          interests={["React.js", "Node.js", "Web Dev"]}
          linkedin="linkedin.com/in/aman-relan"
          twitter="twitter.com/AmanRelan"
        />
      </div>
      <div className="week-6.2" style={{ margin: 30 }}>
        <h1>Week 6.2</h1>
        <h3>Use Memo Hook Example</h3>
        <UseMemoHookExample />
        <button
          onClick={() => {
            setSelectedTodoId(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setSelectedTodoId(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setSelectedTodoId(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setSelectedTodoId(4);
          }}
        >
          4
        </button>
        <div>
          <TodoWithId todoId={selectedTodoId} />
        </div>
        <div className="useCallback-hook" style={{ margin: 30 }}>
          <Callback />
        </div>
      </div>
      <div className="normal-header" style={{ margin: 30 }}>
        <h1>Week 6.1</h1>
        <h1>Header with title props passed from parent to child</h1>
        <Header title="Week 6.1" />
      </div>
      <div className="header-with-state-pushed-down" style={{ margin: 30 }}>
        <h1>Header with State Pushed Down</h1>
        <HeaderWithButton />
        <Header title="Week 6.1" />
        <Header title="Week 6.1" />
      </div>
      <div className="memoized-header" style={{ margin: 30 }}>
        <h1>Header with Memoized</h1>
        <HeaderMemoized />
        <Header title="Week 6.1" />
        <Header title="Week 6.1" />
      </div>
      <div className="keys-component" style={{ margin: 30 }}>
        <h1>KEYS Explanation</h1>
        <KeysComponent />
      </div>
      <div className="wrapper-component" style={{ margin: 30 }}>
        <h1>This is Example of Wrapper Component</h1>
        <CardWrapper>HI There</CardWrapper>
        <CardWrapper>
          <TextComponent />
        </CardWrapper>
      </div>
      <div className="todo-server-use-effect" style={{ margin: 30 }}>
        <h1>This is todos Coming from server every 2 seconds.</h1>
        {/* <TodosFromServer /> */}
      </div>
    </>
  );
}

export default App;
