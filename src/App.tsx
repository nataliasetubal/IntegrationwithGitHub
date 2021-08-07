import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      {/* <Route path='/' component={Home}></Route> */}
      <Route path='/' component={Profile}></Route>
    </BrowserRouter>

  );
}

export default App;
