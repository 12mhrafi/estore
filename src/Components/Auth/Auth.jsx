import React from 'react'

const Auth = () => {

    

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'kminchelle',
          password: '0lelplR',
          // expiresInMins: 60, // optional
        })
      })
      .then(res => res.json())
      .then(data => console.log(data));

  return (
    <div>
        
    </div>
  )
}

export default Auth