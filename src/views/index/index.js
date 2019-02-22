
export default {
  name: 'Index',

  data() {
    return {
      myPlayer: '',
      videoSrc: '/static/57_0122_v01.mp4',
    };
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      console.log(process.env.BASE_URL);
      // 页面禁止右键
      document.oncontextmenu = function(event){ 
        event.preventDefault(); 
      } 
      document.onselectstart = function(event){ 
        event.preventDefault(); 
      };
      //初始化视频方法
      this.myPlayer = this.$video(myVideo, {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        posterImage: true,
        loop: true,
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: "muted",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "1000px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "500px",
      });
    },
  },
};
