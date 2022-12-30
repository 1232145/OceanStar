import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import {publicRoutes} from './router/index'
import NotFound from './pages/error'

function App() {
  return (
   <Router>
      <div className="App">
        <Routes>
            {publicRoutes.map((items,index)=> {
              const Page = items.component
              return <Route key={index} path={items.path} element={<Page/>}/>
            })}
            <Route path='*' exact={true} element={<NotFound />}/>
        </Routes>
      </div>
   </Router>
  );
}

export default App;
