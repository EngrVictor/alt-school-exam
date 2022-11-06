import React from 'react'
import useFetch from './hooks/useFetch'

const Notifications = () => {
   const [data] = useFetch('https://api.github.com/users/engrvictor/repos')
    console.log(data)
  
  return (
    <div><h1>Nothing to see here (' v ')</h1></div>
  )
}

export default Notifications
