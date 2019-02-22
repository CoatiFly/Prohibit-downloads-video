/*
 * @Author: crab
 * @GitHub: https://github.com/CoatiFly
 * @Date: 2019-02-21 14:42:20
 * @Last Modified time: 2019-02-21 14:50:20
 * @Description: 页面缩放
 */

export default () => {
    const pageWidth = 1440;
    const x = window.innerWidth / pageWidth;
    const main = document.querySelector('.el-main');
    const header = document.querySelector('.el-header');
    const footer = document.querySelector('.el-footer');
    // console.log(main, header, footer);
    // main.style.width = `${pageWidth}px`;
    main.style.transform = `scale(${x})`;
    header.style.transform = `scale(${x})`;
    footer.style.transform = `scale(${x})`;
};
