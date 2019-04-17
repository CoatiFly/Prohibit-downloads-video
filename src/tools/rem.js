export default function() {
    const devicePixelRatio = 1;
    const scale = 1 / devicePixelRatio;
    document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    // 7.5根据设计稿的横向分辨率/100得来
    const deviceWidth = document.documentElement.clientWidth;
    console.log(navigator.userAgent);

    // 设计稿宽度
    const ui = 640;
    // 页面下对应的font值(自己设定)
    const font = 100;
    // 比列
    const ratio = ui / font;
    // 计算
    function getSize(){
        // 限制区间
        if( deviceWidth <= 320 ){
            deviceWidth = 320;
        }else if( deviceWidth >= 750 ){
            deviceWidth = 750;
        }
        document.documentElement.style.fontSize = deviceWidth / ratio + 'px';
        // console.log('base size: ', deviceWidth / ratio);
    }    
    // 初始的时候调用一次
    getSize();

    // 在resize的时候动态设置fontsize值
    window.addEventListener('resize', getSize);

    // 禁止双击放大
    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
        var now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}