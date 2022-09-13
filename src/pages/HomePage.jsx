import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {fetchData} from "../api"
import { Link } from 'react-router-dom'
export default function HomePage() {
  const [result, setResult] = useState(null)
  const url = process.env.REACT_APP_API_URL
  useEffect(() => {
    fetchData(url).then(data => {
      console.log(data)
      setResult(data.posts)
    })
  }, [])
  return (
    <div>
      <h1>Click on a link to get to a detail page</h1>
      {result ? result.map((item, index) => {
        return <div key={index}>
          <Link to={`/${item.ID}`}>Link to detail about {item.slug && item.slug}</Link>
        </div>
      }) : "not working"}
    </div>
  )
}
