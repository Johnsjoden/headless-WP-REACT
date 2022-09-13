import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {fetchData} from "../api"
export default function HomePage() {
  const [result, setResult] = useState([])
  const url = process.env.REACT_APP_API_URL
  console.log(url)
  useEffect(() => {
    fetchData(`${url}/posts`)
    .then(data => setResult(data.posts))
  }, [])
  return (
    <div>
      <h1>Click on a link to get to a detail page</h1>
      {result.map((item, index) => {
        return <div key={index}>
          <Link to={`/${item.ID}`}>Link to detail about {item.slug && item.slug}</Link>
        </div>
      }) }
    </div>
  )
}
