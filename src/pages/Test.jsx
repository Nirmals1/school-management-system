import React from 'react'
import { useEffect } from 'react'
import axiosInstance from '../apiConfigs/axiosInstance'
import axios from 'axios'

const Test = () => {

    useEffect(() => {
        axios.post('http://localhost:8000/api/get-quicklinks-description');
    }, [])
    

  return (
    <div>Test</div>
  )
}

export default Test