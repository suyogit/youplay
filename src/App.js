import './App.css';
import Body from './component/Body';
import Header from './component/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './component/MainContainer';
import WatchPage from './component/WatchPage';
import Demo from './component/Demo';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: <Demo />,
      }
    ]
  }
]
)


function App() {
  return (
    <Provider store={store}>
    <div>

      <Header />
        <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}
export default App;
