export default [
  // 用户登录
  {
    url: '/api/user/login',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJ0b29sdHQiOiJodHRwczovL3Rvb2x0dC5jb20ifV0sImlhdCI6MTY4MTYzMzM4MCwiZXhwIjotNTg2NjQ0MTk1NDQsImF1ZCI6IiIsImlzcyI6IjExMTEiLCJzdWIiOiIifQ.Pi4dFwSejyMzOrxs-QJumfGMn68NbgapumhvgIF_TXw',
        },
      };
    },
  },
  // 获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: {
          id: '2467751560226270',
          username: '昆吾kw',
          avatar:
            'https://p3-passport.byteimg.com/img/user-avatar/3745b7eb198f2357155cd88eb7930f35~180x180.awebp',
          description: '前端开发',
        },
      };
    },
  },
  // 一个失败的请求
  {
    url: '/api/error',
    method: 'get',
    response: () => {
      return {
        code: 1,
        message: '密码错误',
        data: null,
      };
    },
  },
];
