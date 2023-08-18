import './App.css';
import Test from './Test';
import Products from './Products';
import Landing from './Landing';
import Root from './routes/root';
import ErrorPage from './error-page';
import router from './routes/router';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {
  return (
    <div className='App'>

      <RouterProvider router={router} />
    </div>

  );
}

export default App;
