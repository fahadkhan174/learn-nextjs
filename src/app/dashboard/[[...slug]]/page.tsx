import React from 'react'

type Props = { params: { slug: string[] } }

const Page = ({ params }: Props) => {
  return <div>Dashboard Page optional catch-all : {params.slug}</div>
}

export default Page