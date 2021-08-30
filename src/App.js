import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import VideoPlayer from './components/VideoPlayer';
function App() {
  return (
    <div className="App">
          <div className="container">
            <Router>
              <Route exact path="/home">
               <Home />
              </Route>
              <Route path={`/video/:videoid`}>
                <VideoPlayer />
              </Route>
            </Router>
          </div>
    </div>
  );
}
export default App;
