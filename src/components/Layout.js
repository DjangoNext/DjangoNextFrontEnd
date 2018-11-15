import React, { PureComponent } from 'react'
import { Link } from '/../routes.js'

import styles from 'styles/Layout/Header.scss'

export default class Layout extends PureComponent {
  render () {
    return (
      <div className='layout'>
        <header className="d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto">
                <span className="blog-name">Блог DjangoNext</span>
              </div>
              <div className="col-auto">
                <nav>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Главная</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a>Об авторах</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <a>Нах*й эта кнопка</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        { this.props.children }
        <style jsx>{styles}</style>
      </div>
    )
  }
}
