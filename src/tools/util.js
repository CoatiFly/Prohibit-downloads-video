/**
 * Created by 「 peng.xie 」  on 2018/12/05.
 * project by 「 daocloud ai platform 」.
 * thanks my team.
 */

export default({
    isPC() {
        return this.getPlatForm() == "PC";
    },
    getPlatForm() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "IOS", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.toLowerCase().indexOf(Agents[v].toLowerCase()) > 0) {
                return Agents[v];
            }
        }
        return "PC";
    },
})