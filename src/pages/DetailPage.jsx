import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../api'
const parse = require("html-react-parser")

export default function DetailPage() {
  const [data, setResult] = useState([])
  const id = useParams().id
  const url = process.env.REACT_APP_NOT_SECRET_CODE
  useEffect(() => {
    fetchData(`${url}/${id}`)
    .then(data => {
      setResult(data)
    })
  }, [])
  return (
    <div>
      <h2>{data.slug}</h2>
      <p>{data.content && parse(data.content)}</p>
    </div>
  )
}
