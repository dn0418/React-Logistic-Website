import React from 'react'
import {Routes, Route} from 'react-router-dom'
import DashboardNotFound from './pages/dashboard/NotFound'

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/shop-for-me" element={<ShopForMe />} />
      <Route path="/*" element={<DashboardNotFound />}/>
    </Routes>
  )
}

export default Dashboard