import CardWrapper from './components/CardWrapper'
import Header from './components/Header'
import HeaderMemoized from './components/HeaderMemoized'
import HeaderWithButton from './components/HeaderWithButton'
import KeysComponent from './components/KeysComponent'
import TextComponent from './components/TextComponent'
import TodosFromServer from './components/TodosFromServer'

function App() {
  return (
    <>
      <div className="normal-header" style={{ margin: 30 }}>
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
        <TodosFromServer />
      </div>
    </>
  )
}

export default App
