import './App.css';

import AlbumsContext from './AlbumContext';
import NavBar from './Components/NavBar';
import Albums from './Components/Albums';

function App() {
  return (
    <div className="App">
      <AlbumsContext>
        <NavBar/>
        <Albums/>
      </AlbumsContext>
    </div>
  );
}

export default App;
