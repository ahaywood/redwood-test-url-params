import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ProductsPage = ({ id }) => {
  return (
    <>
      <Metadata title="Products" description="Products page" />

      <h1>Products Page</h1>
      <pre>
        <code>{id}</code>
      </pre>
    </>
  )
}

export default ProductsPage
