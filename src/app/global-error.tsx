'use client' // Error components must be Client Components

import React from 'react'

type Props = {
  error: Error
  reset: () => void
}

const GlobalError = ({ error, reset }: Props) => {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}

export default GlobalError
