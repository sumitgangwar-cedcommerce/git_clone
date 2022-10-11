import React from 'react'
import { Route, Routes } from 'react-router'
import Profile from './component/Profile'
import Search from './Search'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Search />} />
      <Route path='profile' element = {<Profile />} />
    </Routes>
  )
}

export default App