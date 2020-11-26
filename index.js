/* INFO:
    Custom Ver 2.4
    Custom by DISCORD: LDH0606#4320
    본 스크립트 파일의 원본코드의 저작권은 기상청에 있음을 알립니다!
    문제가 있을경우 내리도록 하겠습니다!!
*/
const cver = "2.4", giturl = "https://raw.githubusercontent.com/leedongho0606/cp/master/sound/";
let ifdo = iframe.document; 
let stahml = [0, 0, 0, 0, []]; 
let eqkdata = []; 
let lasteta = null;
String.prototype.insert = function (index, string) {// insert 메서드 생성
    if (index > 0) return this.substring(0, index) + string + this.substring(index, this.length);
    return string + this;
};
ifdo.getElementById("img").src = "https://raw.githubusercontent.com/leedongho0606/cp/47d9ec02c8b7bd86ef52df074f4fd268ec98b8ad/img/map.png";
ifdo.getElementsByClassName("map_area")[0].innerHTML += "<style>.map_area .jindo{position:absolute;left:0;top:0;width:55px;z-index:10;font-size:50px;letter-spacing:-.1em; text-align: center;}.map_area .high{position:absolute;right:5px;top:0px;width:100px;z-index:10;font-size:30px;letter-spacing:-.1em; text-align: right; color:#FF0000;}.map_area .mid{position:absolute;right:5px;top:30px;width:100px;z-index:10;font-size:30px;letter-spacing:-.1em; text-align: right; color:#FFFF00;}.map_area .low{position:absolute;right:5px;top:60px;width:100px;z-index:10;font-size:30px;letter-spacing:-.1em; text-align: right; color:#92D050;} .verylow{position:absolute;right:5px;top:90px;width:200px;z-index:10;font-size:30px;letter-spacing:-.1em; text-align: right; color:#9B9B9B;} .map_area .byldh{position:absolute;right:0px;bottom:0px;width:200px;z-index:10;font-size:17px;letter-spacing:-.1em; text-align: right; color:#FF4500}</style><div class='jindo'>1</div><div class='high'>강 : 0</div><div class='mid'>중 : 0</div><div class='low'>약 : 0</div><div class='verylow'>무감 : 0</div><div class='byldh'>V" + cver + "</div><audio id='cps' style='display:hidden'><source src='' type='audio/mp3'></audio><audio id='cps2' style='display:hidden'><source src='' type='audio/mp3'></audio><audio id='tts' style='display:hidden'><source src='' type='audio/mp3'></audio><div class='layerPopup' style='display: none; padding: 20px;border: 4px solid rgba(0, 0, 0, 0.5);position: absolute;left: 0;top: 0;background: rgba(255, 255, 255,0.5);z-index:10;color:rgba(0, 0, 0, 255)'></div>";
function winalr(t, b) {
    if (Notification.permission !== "granted") return;
    const n = new Notification(t, { body: b, icon: "https://raw.githubusercontent.com/leedongho0606/cp/master/img/logo_gov.png" });
    setTimeout(() => {
        if ( n) n.close();
    }, 10000);
}
function geteqk(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) callback(xhr.responseText);
    };
    xhr.open("GET", url);
    xhr.send(null);
}
tts = url => {
    let tts = ifdo.getElementById("tts");
    tts.src = giturl + url;
    tts.play();
}
ps = url => {
    let cps = ifdo.getElementById("cps");
    cps.src = giturl + url;
    cps.play();
}
ps2 = url => {
    let cps2 = ifdo.getElementById("cps2");
    cps2.src = giturl + url;
    cps2.play();
}
iframe.fn_alarm = () => { }
iframe.eqkimg = () => {
    window.open("https://www.weather.go.kr/repositary/xml/eqk/img/eqk_img_0_" + ifdo.body.getElementsByClassName("layerPopup")[0].innerText.substring(17, 37).replace(/\//g, "").replace(/:/g, "").replace(" ", "").trim() + ".png", "", "width=700px, height=600px,resize=yes,scrollbars=no,status=no");
}
iframe.closepopup = () => {
    ifdo.body.getElementsByClassName("layerPopup")[0].style.display = "none";
}
iframe.fn_drawSta = sta => {
    let img = ifdo.getElementById("img");
    let canS = ifdo.getElementById("canS");
    let ctxS = iframe.canS.getContext("2d");
    let canB = ifdo.getElementById("canB");
    let ctxB = iframe.canB.getContext("2d");
    let cnt = 0;
    let maxmmi = 0;
    canS.width = canB.width = img.width - 1;
    canS.height = canB.height = img.height - 1;
    ctxS.save(); ctxB.save();
    ctxB.scale(canB.width / iframe.imgW, canB.width / iframe.imgW);
    ctxS.scale(canS.width / iframe.imgW, canS.width / iframe.imgW);
    ctxS.strokeStyle = "#000000";
    if (iframe.gridArr.length > 0) {
        for (let i = 38.85; i > 33; i -= 0.05) {
            for (let j = 124.5; j < 132.05; j += 0.05) {
                ctxB.fillStyle = iframe.mmiColor[Number(iframe.gridArr[cnt])];
                ctxB.fillRect(iframe.fn_parseX(j) - 4, iframe.fn_parseY(i) - 7, 8, 8);
                if (Math.abs(iframe.myLoc[iframe.curLocSel].lat - i) < 0.025 && Math.abs(iframe.myLoc[iframe.curLocSel].lon - j) < 0.025) {
                    ifdo.getElementById("myMag").innerHTML = iframe.mmi[iframe.gridArr[cnt]];
                    ifdo.getElementById("magBack").setAttribute("mag", iframe.gridArr[cnt]);
                    ifdo.getElementById("magInfo").innerHTML = iframe.mag[iframe.gridArr[cnt]];
                }
                cnt++;
            }
        }
    } else ctxB.clearRect(0, 0, canB.width, canB.height);
    for (let i = 0; i < sta.length; i++) {
        //테스트*/sta[i].mmi = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        //테스트2*/sta[i].mmi = 2;
        if (sta[i].mmi >= 12) stahml[3] += 1;
        else if (sta[i].mmi >= 5) stahml[0] += 1;
        else if (sta[i].mmi >= 3 && sta[i].mmi <= 4) stahml[1] += 1;
        else if (sta[i].mmi == 2) stahml[2] += 1;
        ctxS.fillStyle = iframe.mmiColor[sta[i].mmi];
        ctxS.fillRect(iframe.fn_parseX(sta[i].lon) - 4, iframe.fn_parseY(sta[i].lat) - 4, 10, 10);
        ctxS.strokeRect(iframe.fn_parseX(sta[i].lon) - 4, iframe.fn_parseY(sta[i].lat) - 4, 10, 10);
        stahml[4].push(sta[i].mmi < 12 ? sta[i].mmi : 1);
    }
    ctxB.restore(); ctxB.restore(); ctxS.restore(); ctxS.restore();
    maxmmi = Math.max.apply(null, stahml[4]);
    if (stahml[0] >= 1 && stahml[1] >= 0 && stahml[2] >= 0) ps("beep3.MP3");
    else if (stahml[0] == 0 && stahml[1] >= 1 && stahml[2] >= 0) ps("update.mp3");
    else if (stahml[0] == 0 && stahml[1] == 0 && stahml[2] >= 1) ps("beep.mp3");
    ifdo.getElementsByClassName("jindo")[0].innerHTML = maxmmi;
    ifdo.getElementsByClassName("jindo")[0].style.backgroundColor = iframe.mmiColor[maxmmi];
    if (maxmmi >= 10) ifdo.getElementsByClassName("jindo")[0].style.color = "#FFFFFF";
    else ifdo.getElementsByClassName("jindo")[0].style.color = "#000000";
    ifdo.getElementsByClassName("high")[0].innerHTML = "강 : " + Number(stahml[0]);
    ifdo.getElementsByClassName("mid")[0].innerHTML = "중 : " + Number(stahml[1]);
    ifdo.getElementsByClassName("low")[0].innerHTML = "약 : " + Number(stahml[2]);
    ifdo.getElementsByClassName("verylow")[0].innerHTML = "무감 : " + Number(stahml[3]);
    for (let i = 0; i < stahml.length - 1; i++) stahml[i] = 0;
    stahml[4] = [];
}
setInterval(() => {
    if (iframe.phase > 1) {
        if (iframe.eta > 0 && iframe.eta <= 10) tts("eta" + iframe.eta + ".mp3");
        else if (iframe.eta > 10 && iframe.eta <= 60 && Number(String(iframe.eta).charAt(String(iframe.eta).length - 1)) == 0) tts("eta" + iframe.eta + ".mp3");
        else if (iframe.eta == 90) tts("eta90.mp3");
        else if (iframe.eta == 120) tts("eta120.mp3");
        else if (iframe.eta == 150) tts("eta150.mp3");
        else if (iframe.eta == 180) tts("eta180.mp3");
        else if (iframe.eta == 0) tts("eta0.mp3");
    }
    geteqk("https://www.weather.go.kr/weather/earthquake_volcano/ajaxEqkMicroPopup.jsp", d => {
        if (d && d.indexOf("<p class=\"p_hypen\">") == -1 && d.indexOf("</p>") == -1) return;
        d = d.split("<p class=\"p_hypen\">")[1].split("</p>")[0].replace("&#40;", "\n").replace("&#41;", "").trim().replace(/(<([^>]+)>)/g, "").insert(20, "\n");
        if (d && eqkdata[0] && eqkdata[0] != d) {
            ps2("meqk.mp3");
            winalr("기상청 미소지진정보", d);
            let popup = ifdo.body.getElementsByClassName("layerPopup")[0];
            popup.innerHTML = "<< 기상청 미소지진정보 >><br>" + d.replace(/\n/g, "<br>") + "<br><button onclick='closepopup();'>닫기</button><button onclick='eqkimg();'>발생위치 이미지</button>";
            popup.style.display = "block";
            eqkdata[0] = d;
        } else if (d && !eqkdata[0]) eqkdata[0] = d;
    });
    geteqk("https://www.weather.go.kr/weather/earthquake_volcano/ajaxEqkNoticePopup.jsp", d => {
        if (d && d.indexOf("<p class=\"p_hypen\">") == -1 && d.indexOf("</p>") == -1) return;
        d = d.split("<p class=\"p_hypen\">")[1].split("</p>")[0].replace("&#40;", "\n").replace("&#41;", "").replace(/· /g, "\n· ").replace(/※ /g, "\n※ ").trim().replace(/(<([^>]+)>)/g, "");
        if (d && eqkdata[1] && eqkdata[1] != d) {
            ps2("aeqk.mp3");
            winalr("기상청 국내여진정보", d);
            let popup = ifdo.body.getElementsByClassName("layerPopup")[0];
            popup.innerHTML = "<< 기상청 국내여진정보 >><br>" + d.replace(/\n/g, "<br>") + "<br><button onclick='closepopup();'>닫기</button>";
            popup.style.display = "block";
            eqkdata[1] = d;
        } else if (d && !eqkdata[1]) eqkdata[1] = d;
    });
    if (eqkdata[2] && eqkdata[2] != iframe.phase && iframe.phase == 2) {
        let alarm = ifdo.getElementById("alarmWav");
        alarm.src = giturl + "high.mp3";
        alarm.play();
        winalr("지진 신속 정보", iframe.eqkStr + "\n규모 " + (iframe.eqkMag).toFixed(1) + " 지진발생\nS파 도달까지 : " + iframe.eta + "초\nP파 도달까지 : " + iframe.eta / 2 + "초");
        ps2("phase2.mp3");
        eqkdata[2] = iframe.phase;
    } else if (eqkdata[2] && eqkdata[2] != iframe.phase && iframe.phase == 3) {
        let alarm = ifdo.getElementById("alarmWav");
        alarm.src = giturl + "high.mp3";
        alarm.play();
        winalr("지진 상세 정보", iframe.eqkStr + "\n규모 " + (iframe.eqkMag).toFixed(1) + " 지진발생\n최대진도 : " + iframe.eqkMax + "\n깊이 : " + (iframe.eqkDep !== 0 ? iframe.eqkDep : "-") + "km");
        ps2("phase3.mp3");
        eqkdata[2] = iframe.phase;
    } else eqkdata[2] = iframe.phase;
}, 1000);
console.log("==========PEWS Custom==========\n|PEWS Custom", "V" + cver + " Load Success|\n|Custom By LDH0606            |\n|DISCORD : LDH0606#4320       |\n|Github : leedongho0606       |\n==========PEWS Custom==========");
if (Notification.permission === "denied" || Notification.permission === "default") Notification.requestPermission();
