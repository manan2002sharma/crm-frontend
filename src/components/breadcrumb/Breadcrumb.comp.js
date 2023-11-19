import React from 'react'

export const PageBreadcrumb = ({page}) => {
  return (
    <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">{page}</li>
  </ol>
</nav>
  )
}
