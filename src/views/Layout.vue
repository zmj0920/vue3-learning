<template>
  <div>
    <div class="box">
      <div class="item">1 . 简单是稳定的前提。 </div>
      <div class="item">2 . 过早的优化是罪恶之源。</div>
      <div class="item">3 . 简单不先于复杂，而是在复杂之后。</div>
      <div class="item">4 . Facebook wasn't built in a day.</div>
      <div class="item">5 . There is no smoke without fire.</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const htmlString =
    '<html><head><title>Example</title></head><body><p>Hello, world!</p></body></html>';
  const parser = new DOMParser();
  const dom = parser.parseFromString(htmlString, 'text/html');
  console.log(dom);
</script>

<style>
  /* .item:nth-child(3) {
    margin-right: 0;
  } */
  .box {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    margin: 0.5em;
    width: 48em;
    height: 16rem;
    align-content: stretch;
    /* div排列方式 row、column x，y轴 排列  row-reverse ，column-revwese x,y 轴翻转排列 */
    /* flex-direction: column; */
    /* div是否换行排列 nowrap 不换行 wrap 换行  wrap-reverse 换行 最后一个到最前面  */
    /* flex-wrap:nowrap */

    /* flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式 */

    /* x 轴对齐方式 
    justify-content: center
    ● flex-start:默认值，左对齐
    ● flex-end:右对齐
    ● center:中间对齐
    ● space-between:两端对齐
    ● space-around:均匀分布
    ● space-evenly：均匀分布，边框之间距离相等
    */

    /* 
    当div 高度不一致的时候上下对齐方式
    ● stretch(缺省)：交叉轴方向拉伸显示
    ● flex-start：按照头部对齐
    ● flex-end：按照底部对齐
    ● center：y轴方向项目中间对齐
    ● baseline：交叉轴方向按第一行文字基线对齐
    align-items: stretch | flex-start | flex-end | center | baseline; 
    */

    /* 
    height 设置高度
    flex-wrap: wrap; 换行y轴排列方式
    align-content: 
    ● stretch (缺省)：拉伸显示
    ● flex-start：从启点线开始顺序排列
    ● flex-end：相对终点线顺序排列
    ● center：居中排列
    ● space-between：项目均匀分布，第一项在启点线，最后一项在终点线
    ● space-around：项目均匀分布，每一个项目两侧有相同的留白空间，相邻项目之间的距离是两个项目之间留白的和
    
    */

    /* width: 32em; */
  }

  .item {
    text-align: center;
    padding: 0.2em 0.5em;
    margin: 0.5em;
    background-color: aliceblue;
  }
</style>
