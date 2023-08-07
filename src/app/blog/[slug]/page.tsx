import React from 'react'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  )

  return posts.map((post: { id: number; title: string }) => ({
    slug: post.title,
  }))
}

type Props = { params: { slug: string } }

const Page = ({ params }: Props) => {
  return <div>My Post: {params.slug}</div>
}

export default Page
