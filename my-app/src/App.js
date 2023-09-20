import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import DataPage from './components/dataPage/DataPage';
import AppRouter from './routers/AppRouters.js'

function App() {
  return (
    <div className="App-container">
         
           <AppRouter/>
    </div>
  );
}

export default App;
