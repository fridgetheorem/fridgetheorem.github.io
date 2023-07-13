import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TimelinePage } from './components/Pages/TimelinePage';
import { Menu } from './components/Menu/Menu';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TimelinePage />
    }
  ])
  return (
    <div className="App">
      <Menu right/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
