import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div>
      <nav>
        <Link className='link' to='/'>top</Link>
        <Link className='link' to='/remark'>remark</Link>
        <Link className='link' to='/marked'>marked</Link>
      </nav>
      {children}
    </div>
  )
}

export default Layout