import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'

export default function AdminLayout(props) {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='w-full px-8 py-2'>
            {props.children}
        </div>
    </div>
  )
}
