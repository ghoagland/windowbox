import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {

  const { children, handleClick, isLoggedIn } = props;

  return (
    <div>

      <nav className="navSize" >

        {
          isLoggedIn ?
            <div className="nav">
              <h1><Link to='/'>WINDOWBOX</Link></h1>
               {/* The navbar will show these links after you log in */}
              <ul className="nav-links">
                <li><Link to="/products">PRODUCTS</Link></li>
                <a href="#" onClick={handleClick}>Logout</a>
              </ul>
            </div> :

            <div className="nav">
              <h1><Link to='/'>WINDOWBOX</Link></h1>
               {/* The navbar will show these links before you log in */}
              <ul className="nav-links">
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/cart">Cart</Link></li>
              </ul>
            </div>
        }
      </nav>
      <hr />
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.userReducer.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
