module.exports = ctx => {
  return {
    plugins: {
      'autoprefixer': {
        // 'env': ,
        // 'cascade': true,
        'cascade': false,
        // 'add': true,
        // 'remove': true,
        'remove': false,
        // 'supports': true,
        // 'flexbox': true,
        // 'grid': false,
        // 'stats':,
        // 'browsers': ,
      }
    }
  }
}
