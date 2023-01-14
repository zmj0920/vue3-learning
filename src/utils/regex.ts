export function checkStr(str: string, type: string) {
  switch (type) {
    case 'phone': //手机号码
      return /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/.test(
        str,
      );
    case 'tel': //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case 'card': //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str);
    case 'postal': //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);
    case 'QQ': //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case 'email': //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case 'money': //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);
    case 'URL': //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
        str,
      );
    case 'IP': //IP
      return /(?:^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$)|(?:^(?:(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/.test(
        str,
      );
    case 'date': //日期时间
      return (
        /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) ||
        /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      );
    case 'number': //数字
      return /^[0-9]$/.test(str);
    case 'english': //英文
      return /^[a-zA-Z]+$/.test(str);
    case 'chinese': //中文
      return /^[\u4E00-\u9FA5]+$/.test(str);
    case 'lower': //小写
      return /^[a-z]+$/.test(str);
    case 'upper': //大写
      return /^[A-Z]+$/.test(str);
    case 'HTML': //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
    case 'space': //检查字符串有空格
      return /\s/.test(str);
    default:
      return true;
  }
}

const REGEX_STR = {
  idCard: `(^\\d{15}$)|(^\\d{17}(?:[0-9]|X)$)`,
  mobile: `^(0|\\+?86|17951)?1[0-9]{10}$`,
  url: `(((^https?:(?:\/\/)?)(?:[-;:&=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+(?::\\d+)?|(?:www.|[-;:&=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:\/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&;%@.\\w_]*)#?(?:[\\w]*))?)`,
  color: `(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\\b|(?:rgb|hsl)a?\\([^\\)]*\\)`,
};
function genRegex(str: string, flags?: string) {
  return new RegExp(`^${str}$`, flags);
}
const REGEX = {
  idCard: genRegex(REGEX_STR.idCard, 'i'),
  mobile: genRegex(REGEX_STR.mobile),
  url: genRegex(REGEX_STR.url),
  color: genRegex(REGEX_STR.color),
};

/**
 * Wheter is People's Republic of China identity card
 *
 * 是否为中华人民共和国居民身份证
 */
export function isIdCard(value: string): boolean {
  return REGEX.idCard.test(value);
}

// 严格的身份证校验
export function isCardID(sId: any) {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    console.log('你输入的身份证长度或格式错误');
    return false;
  }
  //身份证城市
  const aCity: Record<number, string> = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外',
  };

  if (!aCity[parseInt(sId.slice(0, 2))]) {
    alert('你的身份证地区非法');
    return false;
  }

  // 出生日期验证
  var sBirthday = (
      sId.slice(6, 10) +
      '-' +
      Number(sId.slice(10, 12)) +
      '-' +
      Number(sId.slice(12, 14))
    ).replace(/-/g, '/'),
    d = new Date(sBirthday);
  if (sBirthday != d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()) {
    console.log('身份证上的出生日期非法');
    return false;
  }

  // 身份证号码校验
  let sum = 0,
    weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    codes = '10X98765432';
  for (var i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }
  var last = codes[sum % 11]; //计算出来的最后一位身份证号码
  if (sId[sId.length - 1] != last) {
    console.log('你输入的身份证号非法');
    return false;
  }

  return true;
}

/**
 * Wheter is china mobile (China)
 *
 * 是否为手机号（中国）
 */
export function isMobile(value: string): boolean {
  return REGEX.mobile.test(value);
}
/**
 * Wheter is url address
 *
 * 是否URL地址
 */
export function isUrl(url: string): boolean {
  return REGEX.url.test(url);
}

/**
 * Wheter is color
 *
 * 是否颜色代码值
 */
export function isColor(color: string): boolean {
  return REGEX.color.test(color);
}
