import React, { PureComponent } from 'react'
import { Link } from '/../routes'
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
  renderItems({ slug, title }) {
    return <SubmenuItem href={`/category/${slug}`} title={title} />
  }
  render () {
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