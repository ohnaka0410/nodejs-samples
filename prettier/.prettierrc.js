module.exports = {
  // デフォルト設定
  // printWidth: 80
  // tabWidth: 2,
  // semi: ture,
  // useTabs: false,
  // singleQuote: false,
  // singleQuote: true,
  // trailingComma: 'none',
  // bracketSpacing: true,
  // arrowParens: 'avoid',
  // rangeStart: 0,
  // rangeEnd: Infinity,
  // proseWrap: 'preserve',
  // endOfLine: 'auto',

  // 特定のファイルのみ設定をオーバーライドする
  overrides: [
    // HTMLファイル
    {
      files: '*.html',
      options: {}
    },
    // CSSファイル
    {
      files: '*.css',
      options: {
        singleQuote: true
      }
    },
    // jsファイル
    {
      files: '*.js',
      options: {
        trailingComma: 'es5',
        arrowParens: 'always',
        singleQuote: true
      }
    }
  ]
};