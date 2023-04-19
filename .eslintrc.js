module.exports = {
  // env: {
  //   node: true,
  //   browser: true,
  //   commonjs: true
  // },
  extends: [
    'ygxy',
    './.eslintrc-auto-import.json'
  ]
  // parserOptions: {
  //   ecmaVersion: 'latest',
  //   parser: '@typescript-eslint/parser'
  // },
  // rules: {
  //   /*
  //    “off”/0 关闭规则
  //    “warn”/1 警告
  //    "error"/2 错误
  //  */

  //   'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

  //   // 关闭分号
  //   'semi': ['error', 'never'],

  //   // 禁止多个空格
  //   'no-multi-spaces': ['error', {
  //     'ignoreEOLComments': false
  //   }],

  //   // 一致的缩进
  //   'indent': ['error', 2],
  //   '@typescript-eslint/indent': ['error', 2],

  //   // 禁止行尾空格
  //   'no-trailing-spaces': ['error'],

  //   // 箭头函数必须括号
  //   'arrow-parens': ['error', 'always'],

  //   // 括号里是否有空格控制
  //   'space-in-parens': ['error', 'never'],

  //   // 数组必须使用空格
  //   'array-bracket-spacing': ['error', 'never', {
  //     'singleValue': false,
  //     'objectsInArrays': false,
  //     'arraysInArrays': false
  //   }],

  //   // 大括号风格，默认 左括号紧跟变量名称后。 https://cn.eslint.org/docs/rules/brace-style
  //   'brace-style': ['error'],

  //   // 逗号前禁止空格，逗号后一个空格
  //   'comma-spacing': ['error'],

  //   // 关键字后必须有空格
  //   'keyword-spacing': 'error',

  //   // 属性换行
  //   'vue/max-attributes-per-line': [
  //     'error',
  //     {
  //       singleline: {
  //         max: 3
  //       },
  //       multiline: {
  //         max: 1
  //       }
  //     }
  //   ],

  //   // 禁止多行空行
  //   'no-multiple-empty-lines': ['off', {
  //     max: 1,
  //     maxEOF: 1
  //   }],

  //   // 禁止属性前有空白，如：foo[ bar ]
  //   'no-whitespace-before-property': 'error',

  //   // 变量声明建议用const
  //   'prefer-const': 'error',

  //   // 对象大括号中属性空格格式化 { 'foo': 'bar' };
  //   'object-curly-spacing': ['error', 'always'],

  //   // 操作符后空格
  //   'space-infix-ops': ['error', {
  //     'int32Hint': false
  //   }],
  //   '@typescript-eslint/space-infix-ops': ['error', {
  //     'int32Hint': false
  //   }],

  //   // 强制类型注解后有空格：默认配置：{before: true, after: true}
  //   '@typescript-eslint/type-annotation-spacing': ['error'],

  //   // 引号： 默认double双引号
  //   'quotes': ['error', 'single'],
  //   '@typescript-eslint/quotes': ['error', 'single'],

  //   // 字符串中用模版占位符
  //   'no-template-curly-in-string': 'error',

  //   // 禁止出现空函数
  //   'no-empty-function': ['warn'],

  //   // 大括号控制
  //   'curly': ['error'],

  //   // async函数内必须有await
  //   'require-await': 'error',

  //   // 禁止变量声明覆盖
  //   'no-shadow': 'error',

  //   // 推荐使用解构获取数据
  //   'prefer-destructuring': ['off', {
  //     'array': false, // 数组不推荐
  //     'object': true //对象解构
  //   }, {
  //     'enforceForRenamedProperties': false
  //   }],

  //   // 不允许初始化为：var foo = undefined
  //   'no-undef-init': 'error',

  //   // 禁止将 undefined 作为标识符： var undefined = "hi";
  //   'no-undefined': 'warn',

  //   // 禁止在变量定义之前使用
  //   'no-use-before-define': 'warn',

  //   // 大括号{}内需要有空格：function foo() { return true; }
  //   'block-spacing': ['error', 'always'],

  //   // 对象、数组末尾逗号.换行的最后一个元素添加逗号
  //   'comma-dangle': ['error', 'never'],

  //   // 逗号风格
  //   /*
  //   * var foo = ["apples"
  //          , "oranges"];
  //   * */
  //   'comma-style': 'error', // 默认在数组元素，对象属性，变量声明之后

  //   // 计算属性空格控制： obj[foo ]
  //   'computed-property-spacing': 'error', // 默认never，禁止使用空格

  //   // 要求文件末尾保留一行空行
  //   'eol-last': 'error',

  //   // 禁止函数调用时有空格： fn ();
  //   // Note: you must disable the base rule as it can report incorrect errors
  //   // https://typescript-eslint.io/rules/func-call-spacing/
  //   'func-call-spacing': 'off',
  //   '@typescript-eslint/func-call-spacing': 'error',

  //   // 禁用标识符，可指定禁止使用的变量标识符
  //   // This rule was deprecated in ESLint v7.5.0 and replaced by the id-denylist rule.
  //   // 'id-blacklist': ['error'],

  //   // 函数内的参数禁止换行
  //   'function-paren-newline': ['error', 'never'],

  //   // !禁止在箭头函数体之前出现换行
  //   'implicit-arrow-linebreak': 'error',

  //   // 箭头函数前后需要空格： () => {}
  //   'arrow-spacing': ['error', {
  //     'before': true,
  //     'after': true
  //   }],

  //   // 禁止对象key和value之间的空格: {key : value}
  //   'key-spacing': 'error',

  //   // 驼峰命名
  //   'camelcase': 'warn',

  //   // props必须有默认属性值
  //   'vue/require-valid-default-prop': 'warn',

  //   // 组件名称多单词
  //   'vue/multi-word-component-names': 'off',

  //   // TypeScript配置, 接口声明
  //   '@typescript-eslint/member-delimiter-style': ['error', {
  //     multiline: {
  //       delimiter: 'none', // 'none' or 'semi' or 'comma'
  //       requireLast: true
  //     },
  //     singleline: {
  //       delimiter: 'semi', // 'semi' or 'comma'
  //       requireLast: false
  //     }
  //   }],

  //   // 操作符不换行
  //   'operator-linebreak': ['off', 'none'],

  //   // 块级模块前需有空格， 默认 always 必须有 if (true) {...}
  //   'space-before-blocks': 'error',
  //   '@typescript-eslint/space-before-blocks': ['error'],

  //   // 函数括号前需要有空格
  //   // https://eslint.org/docs/latest/rules/space-before-function-paren#version
  //   'space-before-function-paren': 'off',
  //   '@typescript-eslint/space-before-function-paren': ['error', {
  //     // async函数需要空格
  //     'asyncArrow': 'always',
  //     // 命名函数无需空格
  //     'named': 'never',
  //     // 匿名函数必须有空格
  //     'anonymous': 'always'
  //   }],

  //   // 禁止使用对象原型方法声明类型
  //   '@typescript-eslint/ban-types': 'error',

  //   // 字符串拼接建议优先使用模版字符串
  //   'prefer-template': ['warn'],

  //   // 导入对象换行规则
  //   'object-curly-newline': ['error', {
  //     // 'ObjectExpression': 'always',
  //     'ImportDeclaration': {
  //       'minProperties': 3,
  //       'multiline': true
  //     }
  //   }],

  //   // 临时排除的检测
  //   '@typescript-eslint/no-explicit-any': 'off',
  //   'vue/comment-directive': 'off'
  // }
}
