import React, { useState, useEffect } from 'react'

const ReeditIput = ({url}) => {
  const [posts, setTitles] = useState([])
  const getPost = () => {
    fetch(`https://www.reddit.com/r/${url}.json`)
      .then(res => res.json())
      .then(data => setTitles(data.data.children))
      .catch(err => console.log(err))
  }
  useEffect(getPost)

  return (
    <div>
      <h1>Reedit titles</h1>
      {posts.map((post, i) => {
        return <p key={i}>{post.data.title}</p>
      })}
    </div>
  )
}

export default ReeditIput
