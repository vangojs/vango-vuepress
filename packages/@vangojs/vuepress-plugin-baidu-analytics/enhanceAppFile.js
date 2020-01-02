/* global BA_ID */

export default ({ router }) => {
  // Google analytics integration
  if (process.env.NODE_ENV === 'production' && BA_ID && typeof window !== 'undefined') {
    // todo

    router.afterEach(function(to) {})
  }
}
