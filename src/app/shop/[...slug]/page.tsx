import React from 'react'

type Props = { params: { slug: string[] } }

const Page = ({ params }: Props) => {
  return <div>Page catch-all : {params.slug}</div>
}

export default Page
