import React from 'react'
import Layout from './../components/Layout/Layout.js'
import { useAuth } from '../context/auth.js'

const HomePage = () => {
  const [auth,setAuth]=useAuth();
  return (
    <Layout title={'Home Page-Ecommerce App'}>

    </Layout>
  )
}

export default HomePage;
