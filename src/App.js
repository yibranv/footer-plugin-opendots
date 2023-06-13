import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <footer className="App-footer">
        <div className="divLinks">
          <ul className="list-inline text-md-right">
            <li className="list-inline-item mr-2">
              <a 
                className='App-link'
                href="https://joinopendots.org/" 
                target="_blank" 
                rel="noopener noreferrer">
                Inicio
              </a>
            </li>
            <li className="list-inline-item mr-2">
              <a className="App-link"
                href="#"
                rel="noopener noreferrer">
                Política de privacidad
              </a>
            </li>
            <li className="list-inline-item">
              <a className="App-link"
              href="https://joinopendots.org/es/contact" 
              target="_blank"
              rel="noopener noreferrer">
                Contacto
              </a>
            </li>
          </ul>    
        </div>
        <div className="divleft">
          <a href="https://joinopendots.org/" 
             target="_blank" 
             className="footer-brand text-white"
             rel="noopener noreferrer">
            <img src="https://joinopendots.org/img/opendots-w.png" width="130" alt="logo" />
          </a>
        </div>
        <div>
          <small>
            Todos los materiales y contenidos de OpenDots están bajo una licencia <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"> CC-BY 4.0 Internacional </a>, a menos que se indique lo contrario.
          </small>
        </div>
    </footer>
  );
}

export default App;
