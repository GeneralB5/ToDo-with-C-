import React from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css'

import {
  Router,
  Routes,
  Route,
  ToastContainer,
  ContextProvider
} from './indexArc/index'

import {Layout,UserPage,LoginPage,ErrorPage,ErrorSession,Todopage,RegisterPage} from './indexArc/index.jsx'

function App() {

  return (
    <Router>
      <ContextProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/user' element={<UserPage />} />
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
