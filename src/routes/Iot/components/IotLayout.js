import React from 'react'
import Header from './Header'
import classes from './IotLayout.scss'

export const IotLayout = ({ children }) => (
  <div className={classes.outContainer}>
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

IotLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default IotLayout
