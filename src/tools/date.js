/* eslint-disable */
/**
 * Created by 「 peng.xie 」  on 2018/12/19.
 * project by 「 daocloud ai platform 」.
 * thanks my team.
 */
export default ({
  // 把日期分割成数组
  dateToArray(date) {
    const myArray = Array();
    myArray[0] = date.getFullYear();
    myArray[1] = date.getMonth() + 1;
    myArray[2] = date.getDate();
    myArray[3] = date.getHours();
    myArray[4] = date.getMinutes();
    myArray[5] = date.getSeconds();
    if (myArray[1] < 10) {
      myArray[1] = "0" + myArray[1];
    };
    if (myArray[2] < 10) {
      myArray[2] = "0" + myArray[2];
    };
    if (myArray[3] < 10) {
      myArray[3] = "0" + myArray[3];
    };
    if (myArray[4] < 10) {
      myArray[4] = "0" + myArray[4];
    };
    if (myArray[5] < 10) {
      myArray[5] = "0" + myArray[5];
    };
    return myArray;
  },
  //日期字符串解析 - to /
  dateStringParse(date) {
    const arr = date.split(/[- : \/]/);
    return arr;
  },
  //日期字符串解析 ./ to -
  dateSwitchLine(date) {
    const str = date.replace((/\/|\./g), "-");
    return str;
  },
  //日期字符串解析 /- to .
  dateSwitchDot(date) {
    const str = date.replace((/\/|\-/g), ".");
    return str;
  },
  //日期格式转换为通用格式
  dateSwitchCommon(date) {
    const str = date.replace((/-|\./g), "/");
    return str;
  },
  // 符号 转汉字
  SwitchFormatDate(dateStr) {
    dateStr = dateStr.replace('-', '年');
    dateStr = dateStr.replace('-', '月');
    return dateStr + "日";
  },
  // 格式化日期 返回年月日 hh:mm:ss
  FormatTimeFull(arr) {
    const date = [];
    date.push(arr[0] + "年" + arr[1] + "月" + arr[2] + "日");
    date.push(arr[3] + ":" + arr[4] + ":" + arr[5]);
    return date;
  },
  // 格式化日期 返回 hh:mm:ss
  FormatTimeHours(date) {
    const arr = this.dateToArray(new Date(date));
    const str = arr[3] + ":" + arr[4] + ":" + arr[5];
    return str;
  },
  // 格式化日期 返回月日 hh:mm
  FormatTimeLack(arr) {
    const date = arr[1] + "月" + arr[2] + "日 " + arr[3] + ":" + arr[4];
    return date;
  },
  // 计算两个日期之前的间隔长度 返回h
  TimeInterval(start, end) {
    const sms = new Date(start).getTime();
    const ems = new Date(end).getTime();
    const hours = 1000 * 60 * 60;
    return (ems - sms) / hours;
  },
  // 在当前日期增加小时数
  addHours(start, hours) {
    const date = new Date(start);
    date.setTime(date.getTime() + 1000 * 60 * 60 * hours);
    return date;
  },
  // 在当前时间减少(s)
  minusAfterMs(time) {
    const date = new Date();
    date.setTime(date.getTime() - time * 1000);
    const str = this.FormatTimeHours(date)
    return str;
  },
});


