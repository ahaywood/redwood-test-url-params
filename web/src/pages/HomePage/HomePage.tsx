import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>Home Page</h1>

      <ul>
        <li>
          <Link to={routes.products({ id: 1 })}>Item 1</Link>
        </li>
        <li>
          <Link to={routes.products({ id: 2 })}>Item 2</Link>
        </li>
        <li>
          <Link to={routes.products({ id: 3 })}>Item 3</Link>
        </li>
      </ul>
    </>
  )
}

export default HomePage
