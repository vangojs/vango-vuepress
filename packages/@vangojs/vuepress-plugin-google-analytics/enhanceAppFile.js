/* global GA_ID */

export default ({ router }) => {
  // Google analytics integration
  if (process.env.NODE_ENV === 'production' && GA_ID && typeof window !== 'undefined') {
    ;(function(s, o, g, a, m) {
      a = s.createElement(o)
      m = s.getElementsByTagName(o)[0]
      a.async = 1
      a.src = g
      m.parentNode.insertBefore(a, m)
    })(document, 'script', 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID)

    window.dataLayer = window.dataLayer || []

    function gtag() {
      dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', GA_ID)

    router.afterEach(function(to) {
      gtag('event', 'page_view')
    })
  }
}
