import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Layout from './components/layout/Layout'
import Todopage from './pages/ToDoPage';
import {ToastContainer} from "react-toastify"
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/register';
import { UserContext,ContextProvider} from './Context/Context.jsx';
import ErrorPage from './pages/ErrorPage';
import ErrorSession from './pages/ErrorNoSession.jsx';

function App() {

  return (
    <Router>
      <ContextProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/ToDo' element={<Todopage/>}/>
          <Route path='/Error/session' element={<ErrorSession />}/>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </Layout>
      </ContextProvider>
      <ToastContainer />
    </Router>
  )
}

export default App
