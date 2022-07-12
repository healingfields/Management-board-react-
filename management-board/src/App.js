import './App.css';
import Header from './components/Header/Header';
import Backlog from './pages/Backlog/Backlog';
import Board from './pages/Board/Board';

function App() {
  return (
    <div className='app'>
      <Header />
      <Board />
      <Backlog />
    </div>
  );
}

export default App;
