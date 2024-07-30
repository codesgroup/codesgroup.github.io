import './App.css';
import Routing from './routing';  // Import the Routing component

function App() {
  return (
    <div className="App bg-black h-screen pt-10 text-white flex flex-col ">
      <Routing />  {/* Use Routing component here */}
    </div>
  );
}

export default App;
