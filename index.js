const giturl = 'https://raw.githubusercontent.com/NeuroWhAI/PewsClient/master/Resources/';
iframe.fn_alarm = function (rIdx) {
    if (iframe.alarmReg.indexOf(rIdx) != -1) {
        let alarm = iframe.document.getElementById('alarmWav');
        if (iframe.eqkMag >= 4) {
            alarm.src = giturl + 'high.mp3';
        } else {
            alarm.src = giturl + 'normal.mp3';
        }
        alarm.play();
        delete alarm;
    }
}

ps = function (url) {
    let cps = iframe.document.getElementById('cps');
    cps.src = giturl + url;
    cps.play();
    delete cps;
}

let stahml = { 'h': 0, 'm': 0, 'l': 0 };
let stammi = [];
iframe.fn_drawSta = function (sta) {
    let img = iframe.document.getElementById('img');
    let canS = iframe.document.getElementById('canS');
    let ctxS = iframe.canS.getContext('2d');
    let canB = iframe.document.getElementById('canB');
    let ctxB = iframe.canB.getContext('2d');
    canS.width = canB.width = img.width - 1;
    canS.height = canB.height = img.height - 1;

    ctxS.save();
    ctxB.save();
    ctxB.scale(canB.width / iframe.imgW, canB.width / iframe.imgW);
    ctxS.scale(canS.width / iframe.imgW, canS.width / iframe.imgW);

    ctxS.strokeStyle = '#000000';
    let cnt = 0;
    if (iframe.gridArr.length > 0) {
        for (let i = 38.85; i > 33; i -= 0.05) {
            for (let j = 124.5; j < 132.05; j += 0.05) {
                ctxB.fillStyle = iframe.mmiColor[Number(iframe.gridArr[cnt])];
                ctxB.fillRect(fn_parseX(j) - 4, fn_parseY(i) - 7, 8, 8);
                if (Math.abs(myLoc[curLocSel].lat - i) < 0.025 && Math.abs(myLoc[curLocSel].lon - j) < 0.025) {
                    document.getElementById('myMag').innerHTML = iframe.mmi[iframe.gridArr[cnt]];
                    document.getElementById('magBack').setAttribute('mag', iframe.gridArr[cnt]);
                    document.getElementById('magInfo').innerHTML = iframe.mag[iframe.gridArr[cnt]];
                }
                cnt++;
            }
        }
    } else {
        ctxB.clearRect(0, 0, canB.width, canB.height);
    }

    for (let i = 0; i < sta.length; i++) {
        if (sta[i].mmi >= 5) {
            stahml['h'] = stahml['h'] + 1;
        } else if (sta[i].mmi >= 3 && sta[i].mmi <= 4) {
            stahml['m'] = stahml['m'] + 1;
        } else if (sta[i].mmi == 2) {
            stahml['l'] = stahml['l'] + 1;
        }
        ctxS.fillStyle = iframe.mmiColor[sta[i].mmi];
        ctxS.fillRect(iframe.fn_parseX(sta[i].lon) - 4, iframe.fn_parseY(sta[i].lat) - 4, 10, 10);
        ctxS.strokeRect(iframe.fn_parseX(sta[i].lon) - 4, iframe.fn_parseY(sta[i].lat) - 4, 10, 10);
        stammi.push(sta[i].mmi);
    }

    ctxB.restore(); ctxB.restore(); ctxS.restore(); ctxS.restore();

    let maxmmi = Math.max.apply(null, stammi);
    if (stahml['h'] >= 1 && stahml['m'] >= 0 && stahml['l'] >= 0) {
        ps('beep3.MP3');
    } else if (stahml['h'] == 0 && stahml['m'] >= 1 && stahml['l'] >= 0) {
        ps('update.mp3');
    } else if (stahml['h'] == 0 && stahml['m'] == 0 && stahml['l'] >= 1) {
        ps('update2.mp3');
    }
    iframe.document.getElementsByClassName('jindo')[0].innerHTML = maxmmi;
    iframe.document.getElementsByClassName('jindo')[0].style.backgroundColor = iframe.mmiColor[maxmmi];
    if (maxmmi >= 10) {
        iframe.document.getElementsByClassName('jindo')[0].style.color = '#FFFFFF';
    } else {
        iframe.document.getElementsByClassName('jindo')[0].style.color = '#000000';
    }
    iframe.document.getElementsByClassName('high')[0].innerHTML = '강 : ' + Number(stahml['h']);
    iframe.document.getElementsByClassName('mid')[0].innerHTML = '중 : ' + Number(stahml['m']);
    iframe.document.getElementsByClassName('low')[0].innerHTML = '약 : ' + Number(stahml['l']);
    stahml['h'] = 0; stahml['m'] = 0; stahml['l'] = 0;
    stammi = [];
}

let div = iframe.document.getElementsByClassName('map_area')[0];
div.innerHTML = div.innerHTML + "<style>.map_area .jindo{position:absolute;left:0;top:0;width:55px;z-index:10;font-size:50px;letter-spacing:-.1em; text-align: center;}.map_area .high{position:absolute;right:5px;top:0px;width:100px;z-index:10;font-size:30px;letter-spacing:-.1em; text-align: right; color:#FF0000;}.map_area .mid{position:absolute;right:5px;top:30px;width:100px;z-index:10;font-size:30px;letter-spacing:-.1em; text-align: right; color:#FFFF00;}.map_area .low{position:absolute;right:5px;top:60px;width:100px;z-index:10;font-size:30px;letter-spacing:-.1em; text-align: right; color:#92D050;}.map_area .byldh{position:absolute;right:0px;bottom:0px;width:200px;z-index:10;font-size:17px;letter-spacing:-.1em; text-align: right; color:rgb(0, 0, 255);}</style><div class='jindo'>1</div><div class='high'>강 : 0</div><div class='mid'>중 : 0</div><div class='low'>약 : 0</div><div class='byldh'>V1.0<br>Custom by LDH0606#7291</div><audio id='cps' style='display:hidden'><source src='' type='audio/mp3'></audio>";
delete div;

console.log('==========Custom Ver 1.0==========\n==========Custom by LDH0606#7291==========');
