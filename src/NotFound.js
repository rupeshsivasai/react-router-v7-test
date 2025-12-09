import React from 'react'
import { useEffect } from 'react'

const NotFound = () => {
    useEffect(() => {
        document.title = "404 Not Found";
    }, []);
  return (
    <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh'}}>NotFound</h1>
  )
}

export default NotFound;