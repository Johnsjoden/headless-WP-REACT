import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {fetchData} from "../api"
import { Link } from 'react-router-dom'
export default function HomePage() {
  const [result, setResult] = useState([])
  const url = process.env.REACT_APP_NOT_SECRET_CODE
  useEffect(() => {
    fetchData(url).then(data => {
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
