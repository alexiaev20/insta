import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './paginas/Home' ;
import LoginForm from './paginas/Login';
import './paginas/LoginForm.css';

function App (){
  return(
    <div className='App'>
      <header className='App-header'>
    
      <Router>
        <div className='App'>
          <Routes>
                <Route path='/'element={<LoginForm />} />
                <Route path='/Home' element={<Home />}/>
          </Routes>
        </div>
      </Router>
      </header>
    </div>
  );

}
 
export default App;
