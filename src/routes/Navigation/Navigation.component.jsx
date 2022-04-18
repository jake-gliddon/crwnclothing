import {React, Fragment} from 'react'
import {Outlet, Link} from 'react-router-dom'
import './navigation.styles.scss'
import {ReactComponent as TriamondLogo} from '../../Assets/crown.svg'

const Navigation = () => {
    return (
      <Fragment>
        <navbar className='navigation'>
          <Link className='logo-container' to='/' >
            <TriamondLogo className='logo' />
          </Link>
          <section className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            <Link className='nav-link' to='/signin'>
              SIGN IN
            </Link>
            <Link className='nav-link' to='/register'>
              REGISTER
            </Link>
          </section>
        </navbar>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation