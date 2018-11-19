import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setSubMenuData } from 'actions/submenu'

import Index from 'components/Index'

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class IndexContainer extends Component {
  static async getInitialProps ({ store, query }) {
    await timeout(300)
    store.dispatch(setSubMenuData([
      {
        href: '/category/asd',
        title: 'Asd'
      },
      {
        href: '/category/das',
        title: 'Das'
      },
      {
        href: '/category/gre',
        title: 'Gre'
      }
    ]))
  }

  render () {
    return (
      <Index />
    )
  }
}

function mapStateToProps (store) {
  return {}
}

export { IndexContainer }
export default connect(mapStateToProps)(IndexContainer)
