import Navbar from './navbar';
import Home from './home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* Add your other components here */}
      </div>
    </div>
  );
}

export default App;
