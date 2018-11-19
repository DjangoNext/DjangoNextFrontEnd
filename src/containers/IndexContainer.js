import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setSubMenuData } from 'actions/submenu'
import { setPostsData } from 'actions/posts'

import Index from 'components/Index'

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const testPostsData = {
  type: 'multi',
  data: [
    {
      title: 'Новейшее_в_блоге',
      slug: 'all',
      posts: [
        {
          previewImage: 'https://www.netsite.dk/wp-content/uploads/2016/04/php-300x300.png',
          title: 'Lorem ipsum',
          category: 'PHP',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, non.',
          slug: 'php'
        },
        {
          previewImage: 'https://www.netsite.dk/wp-content/uploads/2016/04/php-300x300.png',
          title: 'Lorem ipsum',
          category: 'PHP',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, non.',
          slug: 'php'
        }
      ]
    },
    {
      title: 'Безопастность',
      slug: 'security',
      posts: [
        {
          previewImage: 'https://www.netsite.dk/wp-content/uploads/2016/04/php-300x300.png',
          title: 'Lorem ipsum',
          category: 'PHP',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, non.',
          slug: 'php'
        },
        {
          previewImage: 'https://www.netsite.dk/wp-content/uploads/2016/04/php-300x300.png',
          title: 'Lorem ipsum',
          category: 'PHP',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, non.',
          slug: 'php'
        }
      ]
    },
    {
      title: 'Программирование',
      slug: 'programming',
      posts: [
        {
          previewImage: 'https://www.netsite.dk/wp-content/uploads/2016/04/php-300x300.png',
          title: 'Lorem ipsum',
          category: 'PHP',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, non.',
          slug: 'php'
        },
        {
          previewImage: 'https://www.netsite.dk/wp-content/uploads/2016/04/php-300x300.png',
          title: 'Lorem ipsum',
          category: 'PHP',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, non.',
          slug: 'php'
        }
      ]
    },
  ]
}
const testSubMenuData = [
  {
    href: '/category/asd',
    title: 'Asd'
  }, {
    href: '/category/das',
    title: 'Das'
  }, {
    href: '/category/gre',
    title: 'Gre'
  }
]

class IndexContainer extends Component {
  static async getInitialProps ({ store, query }) {
    await timeout(100)
    store.dispatch(setSubMenuData( testSubMenuData ))
    await timeout(100)
    store.dispatch(setPostsData( testPostsData ))
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
