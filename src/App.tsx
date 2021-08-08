import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home}></Route>
      <Route path='/profile/' component={Profile}></Route>
    </BrowserRouter>

  );
}

export default App;
