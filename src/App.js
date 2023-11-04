
import './App.scss';
import KeyBoard from './components/key-board';
import Display from './components/display';
import { useSelector } from 'react-redux';

function App() {
  const formula = useSelector((state) => state)
  return (
    <div className="App">
      <div className="calculator">
        <Display formula={formula}></Display>
        <KeyBoard></KeyBoard>
      </div>
    </div>
  );
}

export default App;
