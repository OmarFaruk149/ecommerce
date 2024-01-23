import './App.css';
import Navbar from './Components/Navbar';
import Post from './Components/Post';

function App() {
  return (
    <div className="flex-row">
      <Navbar />
      <Post />
    </div>
  );
}

export default App;
