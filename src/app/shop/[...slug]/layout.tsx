import React from 'react'

type Props = {
  children: React.ReactNode
}

const DashboardLayout = ({
  children, // will be a page or nested layout
}: Props) => {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      Shop Layout
      {children}
    </section>
  )
}

export default DashboardLayout
