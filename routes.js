const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

const APP_ROUTES = [{
  page: 'index',
  pattern: '/'
}, {
  page: 'post',
  pattern: '/post/:post_slug'
}, {
  page: 'category',
  pattern: '/category/:category_slug'
}]

APP_ROUTES.forEach(route => routes.add(route))
