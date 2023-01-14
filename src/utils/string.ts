/**
 * filterTag 过滤html标签
 * @since 1.0.0
 * @param {String} str
 * @return {String}
 */
export function filterTag(str: string) {
  str = str.replace(/&/gi, '&amp;');
  str = str.replace(/</gi, '&lt;');
  str = str.replace(/>/gi, '&gt;');
  str = str.replace(' ', '&nbsp;');
  return str;
}
