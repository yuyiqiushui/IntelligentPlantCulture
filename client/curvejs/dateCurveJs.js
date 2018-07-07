// var dataCurve = { "tempSource": [["product", "实际曲线"], ["2018-03-09 13:18:33", 23], ["2018-03-09 18:24:56", -60], ["2018-03-09 19:00:55", -60], ["2018-03-09 19:05:55", 30], ["2018-03-09 19:10:55", -60], ["2018-03-09 19:15:55", -60], ["2018-03-09 19:20:55", -60], ["2018-03-09 19:25:55", -60]], "humiSource": [["product", "实际曲线 "], ["2018-03-09 13:18:33", 15], ["2018-03-09 18:24:56", 0], ["2018-03-09 19:00:55", 0], ["2018-03-09 19:05:55", 0], ["2018-03-09 19:10:55", 0], ["2018-03-09 19:15:55", 0], ["2018-03-09 19:20:55", 0], ["2018-03-09 19:25:55", 0]], "lightSource": [["product", "实际曲线 "], ["05:00", 0], ["05:00", 1], ["20:30", 1], ["20:30", 0]], "setMaxTempSource": [["product", "设置的曲线 "], ["06:00", 25], ["20:00", 23]], "setMinTempSource": [["product", "设置的曲线 "], ["06:00", 21], ["20:00", 18]], "setMaxHumiSource": [["product", "设置的曲线 "], ["12:55", 58], ["23:47", 59]], "setMinHumiSource": [["product", "设置的曲线 "], ["12:55", 55], ["23:47", 57]] }
// var temp = dataCurve.tempSource, humi = dataCurve.humiSource, i;
// //灯组、温度最高、温度最低
// var Light = dataCurve.lightSource, setMaxTemp = dataCurve.setMaxTempSource, setMinTemp = dataCurve.setMinTempSource
// //湿度
// var setMaxHumi = dataCurve.setMaxHumiSource, setMinHumi = dataCurve.setMinHumiSource;
// var arrTempHour = [], arrTempValue = [], arrHumiHour = [], arrHumiValue = [];
// var arrSetMaxTempValue = [], arrSetMinTempValue = [], arrLightValue = [];
// var arrSetMaxTempHour = [], arrSetMinTempHour = [], arrLightHour = [];
// //湿度
// var arrSetMaxHumiValue = [], arrSetMaxHumiHour = [], arrSetMinHumiValue = [], arrSetMinHumiHour = [];
// var TempArray = [];
function xAsixTempHumi(xAsixTemp, Max, Min, TempArrayHour, TempArrayValue) {
    for (var i in xAsixTemp) {
        xAsixTemp[i][0] = xAsixTemp[i][0].substring(11, 16);
        TempArrayHour.push(xAsixTemp[i][0]);
        TempArrayValue.push(xAsixTemp[i][1]);
    }
    //Max,Min添加到数组
    for (var i in Max) {
        Max[i][0] = Max[i][0].substring(0, 5);
        TempArrayHour.unshift(Max[i][0]);
        TempArrayHour.sort();
    }
    TempArrayHour.shift();
    TempArrayHour.pop();
    TempArrayValue.shift();
    TempArrayValue.splice(0, 0, "");
    TempArrayValue.splice(TempArrayValue.length, 0, "");
    unique1(TempArrayHour);

}
// xAsixTempHumi(temp, setMaxTemp, setMinTemp, arrTempHour, arrTempValue);
// xAsixTempHumi(humi, setMaxHumi, setMinHumi, arrHumiHour, arrHumiValue);

function xAsixTempHumiLight(xAsixTemp, TempArrayHour, TempArrayValue) {
    for (var i in xAsixTemp) {
        xAsixTemp[i][0] = xAsixTemp[i][0].substring(0, 5);
        TempArrayHour.push(xAsixTemp[i][0]);
        TempArrayValue.push(xAsixTemp[i][1]);
    }
    TempArrayHour.shift();
    TempArrayValue.shift();
    unique1(TempArrayHour);
    console.log

}
// //标志位开始
// xAsixTempHumiLight(Light, arrLightHour, arrLightValue);
// xAsixTempHumiLight(setMaxTemp, arrSetMaxTempHour, arrSetMaxTempValue);
// ValueAverage(arrTempHour, arrSetMaxTempHour, arrSetMaxTempValue);
// //Humi Max
// xAsixTempHumiLight(setMaxHumi, arrSetMaxHumiHour, arrSetMaxHumiValue);
// ValueAverage(arrTempHour, arrSetMaxHumiHour, arrSetMaxHumiValue);
// //Humi min
// xAsixTempHumiLight(setMinHumi, arrSetMinHumiHour, arrSetMinHumiValue);
// ValueAverage(arrTempHour, arrSetMinHumiHour, arrSetMinHumiValue);

function ValueAverage(XHour, XMaxHour, XValue) {
    var MaxSum = 0;
    for (var x = 0; x < XValue.length; x++) {
        MaxSum += XValue[x];
    }
    var MaxAverage = MaxSum / XValue.length;
    var xAsixMaxHour
    for (var i = 0; i < XHour.length - 2; i++) {
        var MaxLength = XValue.length;
        var xAsixHour = XHour[i];
        for (var j = 0; j < XMaxHour.length; j++) {
            xAsixMaxHour = XMaxHour[j];
            if (xAsixMaxHour == xAsixHour) {
            } else { }

        }
        if (xAsixMaxHour != xAsixHour) {
            XValue.splice(1, 0, MaxAverage);
        }
    }
}


// xAsixTempHumiLight(setMinTemp, arrSetMinTempHour, arrSetMinTempValue);

// ValueAverage(arrTempHour, arrSetMinTempHour, arrSetMinTempValue);
function unique1(json) {
    for (var i = 0, uarr = []; i < json.length; i++) {
        for (var k = 0; k < uarr.length; k++) {
            if (json[i] == uarr[k]) {
                //json[i]="";
                break;
            }
        }
        k == uarr.length && (uarr[k] = json[i]);
    }
    return uarr;
}
module.exports = { xAsixTempHumi, xAsixTempHumiLight, ValueAverage ,unique1  }