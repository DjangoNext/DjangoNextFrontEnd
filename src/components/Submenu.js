import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import styles from 'styles/Layout/Header.scss'

const SubmenuItem = ({ href, title }) => {
  if (href, title)
    return (
      <li className='submenu__item'>
        <Link href={ href }>
          <a>{ title }</a>
        </Link>
        <style jsx>{styles}</style>
      </li>)
  else
    return (
      <li className='submenu__item'>
        Fail
        <style jsx>{styles}</style>
      </li>)
}

class Submenu extends PureComponent {
  renderItems({ href, title }) {
    return <SubmenuItem href={href} title={title} />
  }
  render () {
    console.log(this.props.data.map);
    return (
      <nav className='submenu'>
        <div className="container">
          <ul>
            { this.props.data.map(this.renderItems) }
          </ul>
        </div>
        <style jsx>{styles}</style>
      </nav>
    )
  }
}

function mapStateToProps({ submenu }) {
  console.log(submenu);
  return {
    data: submenu.data
  }
}

export default connect(mapStateToProps)(Submenu)