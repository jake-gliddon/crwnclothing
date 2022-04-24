import {React, Fragment, useContext} from 'react'
import {Outlet, Link} from 'react-router-dom'
import './navigation.styles.scss'
import {ReactComponent as TriamondLogo} from '../../Assets/crown.svg'
import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'
import { signOutUser } from '../../Utils/Firebase/Firebase.utils'
import CartIcon from '../../Components/cart-icon/cart-icon.component'
import CartDropdown from '../../Components/cart-dropdown/CartDropdown.component'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext) ;

  
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
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser}>{''}SIGN OUT{''}</span>
              ) : (
                <Link className='nav-link' to='/sign-in'>
                  SIGN IN
                </Link>
              )
            }
            <CartIcon/>
          </section>
          {isCartOpen && <CartDropdown />}
        </navbar>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation