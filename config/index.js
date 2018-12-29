const path = require('path');

const config = {
  projectName: 'thing',
  date: '2018-12-17',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  alias: {
    src: path.resolve(__dirname, '..', 'src'),
    assets: path.resolve(__dirname, '..', 'src/assets'),
    components: path.resolve(__dirname, '..', 'src/components'),
    pages: path.resolve(__dirname, '..', 'src/pages'),
    store: path.resolve(__dirname, '..', 'src/store'),
    utils: path.resolve(__dirname, '..', 'src/utils')
  },
  plugins: {
    babel: {
      sourceMap: true,
      presets: ['env'],
      plugins: ['transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread']
    },
    typescript: {
      compilerOptions: {
        target: 'es2017',
        module: 'commonjs',
        removeComments: false,
        preserveConstEnums: true,
        moduleResolution: 'node',
        experimentalDecorators: true,
        noImplicitAny: false,
        allowSyntheticDefaultImports: true,
        outDir: 'lib',
        noUnusedLocals: true,
        noUnusedParameters: true,
        strictNullChecks: true,
        sourceMap: true,
        baseUrl: '.',
        paths: {
          src: ['./src'],
          'assets/*': ['./src/assets/*'],
          'components/*': ['./src/components/*'],
          'pages/*': ['./src/pages/*'],
          'store/*': ['./src/store/*'],
          'utils/*': ['./src/utils/*']
        },
        rootDir: '.',
        jsx: 'preserve',
        jsxFactory: 'Taro.createElement',
        allowJs: true,
        typeRoots: ['node_modules/@types', 'global.d.ts']
      },
      compileOnSave: false
    }
  },
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: false
        },
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
