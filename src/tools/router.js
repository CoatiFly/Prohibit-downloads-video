/**
 * Created by 「 peng.xie 」  on 2018/12/05.
 * project by 「 daocloud ai platform 」.
 * thanks my team.
 */

import router from '../router';

export default ({
    // 跳转对应页面
  go(path) {
    if (typeof (path) === 'string') {
      router.push({
        name: path,
      });
    } else {
      router.push({
        name: path.name,
        params: path.params,
      });
    }
  },
  // 返回上一页
  back() {
    router.go(-1);
  },
});
