/* INFO:
    Custom Ver 1.2
    Custom by DISCORD: LDH0606#7291

    본 스크립트 파일의 원본코드의 저작권은 기상청에 있음을 알립니다!
    본 스크립트 파일의 원본코드를 커스텀화한 코드는 업로더에게 있을을 알립니다!
    문제가 있을경우 내리도록 하겠습니다!!
*/
xhr = null; // 램의 부담을 덜기위해 사용이 끝난 변수는 바로 삭제(이론상으론 부담을 덜수있을거같으나 실제 효과는 의문)
let cver = '1.1'; // 임시 cver변수(고정)의 값 선언
const giturl = 'https://raw.githubusercontent.com/leedongho0606/cp/master/sound/'; // giturl변수(고정)의 값 선언
let stahml = { 'h': 0, 'm': 0, 'l': 0 }; // stahml변수의 초기값 선언
let stammi = []; // stammi변수의 초기값 선언
eqkdata = []; // eqkdata전역변수의 초기값 선언

// insert 메서드 생성
String.prototype.insert = function (index, string) {
    if (index > 0) {
        return this.substring(0, index) + string + this.substring(index, this.length);
    }
    return string + this;
};

// iframe의 map_area 클래스에 커스텀 css,html 코드 삽입
let div = iframe.document.getElementsByClassName('map_area')[0]; // iframe의 document에서 map_area 클래스를 찾아 변수 div에 대입
div.innerHTML = div.innerHTML + "<style>.map_area .jindo{position:absolute;left:0;top:0;width:55px;z-index:10;font-size:50px;letter-spacing:-.1em; text-align: center;}.map_area .high{position:absolute;right:5px;top:0px;width:100px;z-index:10;font-size:30px;letter-spacing:-.1em; text-align: right; color:#FF0000;}.map_area .mid{position:absolute;right:5px;top:30px;width:100px;z-index:10;font-size:30px;letter-spacing:-.1em; text-align: right; color:#FFFF00;}.map_area .low{position:absolute;right:5px;top:60px;width:100px;z-index:10;font-size:30px;letter-spacing:-.1em; text-align: right; color:#92D050;}.map_area .byldh{position:absolute;right:0px;bottom:0px;width:200px;z-index:10;font-size:17px;letter-spacing:-.1em; text-align: right; color:rgb(0, 0, 255);}</style><div class='jindo'>1</div><div class='high'>강 : 0</div><div class='mid'>중 : 0</div><div class='low'>약 : 0</div><div class='byldh'>V" + cver + "<br>Custom by LDH0606#7291</div><audio id='cps' style='display:hidden'><source src='' type='audio/mp3'></audio><audio id='tts' style='display:hidden'><source src='' type='audio/mp3'></audio>"; //커스텀 css,html 코드 삽입
div = null; // 램의 부담을 덜기위해 사용이 끝난 변수는 바로 삭제(이론상으론 부담을 덜수있을거같으나 실제 효과는 의문)

// iframe내의 fn_alarm 함수 오버라이딩하여 커스텀
iframe.fn_alarm = function (rIdx) {
    if (iframe.alarmReg.indexOf(rIdx) != -1) {
        let alarm = iframe.document.getElementById('alarmWav');  // iframe의 document에서 alarmWav id를 찾아 변수 alarm에 대입
        if (iframe.eqkMag >= 4) { // iframe내의 eqkMag 변수의 값이 4이상이라면
            alarm.src = giturl + 'high.mp3'; // 경고음 URL으로 설정
        } else { // 위의 조건이 거짓이라면(iframe내의 eqkMag 변수의 값이 4미만이라면)
            alarm.src = giturl + 'normal.mp3'; // 주의음 URL으로 설정
        }
        alarm.play(); // 재생
        alarm = null; // 램의 부담을 덜기위해 사용이 끝난 변수는 바로 삭제(이론상으론 부담을 덜수있을거같으나 실제 효과는 의문)
    }
}

// 커스텀 함수 ps 선언
ps = function (url) {
    // TMI: cps는 custom play sound의 약자
    let cps = iframe.document.getElementById('cps'); // iframe의 document에서 cps id를 찾아 변수 alarm에 대입
    cps.src = giturl + url; // giturl변수의 값(문자)와 url 매개변수의 값(문자)를 서로 대입 하여 URL 설정
    cps.play(); // 재생
    cps = null; // 램의 부담을 덜기위해 사용이 끝난 변수는 바로 삭제(이론상으론 부담을 덜수있을거같으나 실제 효과는 의문)
}

// iframe내의 fn_drawSta 함수 오버라이딩하여 커스텀
iframe.fn_drawSta = function (sta) {
    let img = iframe.document.getElementById('img'); // iframe의 document에서 img id를 찾아 변수 img에 대입
    let canS = iframe.document.getElementById('canS'); // iframe의 document에서 canS id를 찾아 변수 canS에 대입
    let ctxS = iframe.canS.getContext('2d');
    let canB = iframe.document.getElementById('canB'); // iframe의 document에서 canB id를 찾아 변수 canB에 대입
    let ctxB = iframe.canB.getContext('2d');
    canS.width = canB.width = img.width - 1;
    canS.height = canB.height = img.height - 1;

    ctxS.save();
    ctxB.save();
    ctxB.scale(canB.width / iframe.imgW, canB.width / iframe.imgW); // 크기조정
    ctxS.scale(canS.width / iframe.imgW, canS.width / iframe.imgW); // 크기조정

    ctxS.strokeStyle = '#000000'; // 윤곽 색상을 검은색으로 설정
    let cnt = 0; // cnt변수의 값을 0으로 선언
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

    for (let i = 0; i < sta.length; i++) { // sta의 크기만큼 반복 v1.1 업데이트 당시 기준 관측소 개수는 266.
        if (sta[i].mmi >= 5) { // 진도 5이상인 경우
            stahml['h'] = stahml['h'] + 1; // 강에 1을 추가
        } else if (sta[i].mmi >= 3 && sta[i].mmi <= 4) {  // 진도 3이상 4이하인 경우
            stahml['m'] = stahml['m'] + 1; // 중에 1을 추가
        } else if (sta[i].mmi == 2) { // 진도 2인경우
            stahml['l'] = stahml['l'] + 1; // 약에 1을 추가
        }
        ctxS.fillStyle = iframe.mmiColor[sta[i].mmi]; // 한반도 지도의 관측소 표시 박스에 색상 입히기
        ctxS.fillRect(iframe.fn_parseX(sta[i].lon) - 4, iframe.fn_parseY(sta[i].lat) - 4, 10, 10);
        ctxS.strokeRect(iframe.fn_parseX(sta[i].lon) - 4, iframe.fn_parseY(sta[i].lat) - 4, 10, 10);
        stammi.push(sta[i].mmi); // stammi 변수(배열)에 전체 관측소 진도 임시로 저장
    }

    ctxB.restore(); ctxB.restore(); ctxS.restore(); ctxS.restore();

    let maxmmi = Math.max.apply(null, stammi); // stammi 변수(배열)에서 임시로 저장한 진도 값중 가장 큰값을 뽑음
    if (stahml['h'] >= 1 && stahml['m'] >= 0 && stahml['l'] >= 0) { // 강이 1이상인경우
        ps('beep3.MP3'); // 경고음 재생
    } else if (stahml['h'] == 0 && stahml['m'] >= 1 && stahml['l'] >= 0) { // 중이 1이상인경우
        ps('update.mp3'); // 주의음 재생
    } else if (stahml['h'] == 0 && stahml['m'] == 0 && stahml['l'] >= 1) { // 약이 1이상인경우
        ps('update2.mp3'); // 알림음 재생
    }
    iframe.document.getElementsByClassName('jindo')[0].innerHTML = maxmmi; // 진도 클래스내의 html 코드를 maxmmi변수의 값(수)로 설정
    iframe.document.getElementsByClassName('jindo')[0].style.backgroundColor = iframe.mmiColor[maxmmi]; // 진도 클래스의 배경색을 진도에 따라 설정 
    if (maxmmi >= 10) { // 진도가 10인경우
        iframe.document.getElementsByClassName('jindo')[0].style.color = '#FFFFFF'; // 진도 클래스의 글자색을 하얀색으로 변경
    } else { // 위 조건이 거짓 이라면
        iframe.document.getElementsByClassName('jindo')[0].style.color = '#000000'; // 진도 클래스의 글자색을 검은색으로 변경
    }
    iframe.document.getElementsByClassName('high')[0].innerHTML = '강 : ' + Number(stahml['h']); // high 클래스에 강 기준에 맞는 관측소수 표시
    iframe.document.getElementsByClassName('mid')[0].innerHTML = '중 : ' + Number(stahml['m']); // mid 클래스에 중 기준에 맞는 관측소수 표시
    iframe.document.getElementsByClassName('low')[0].innerHTML = '약 : ' + Number(stahml['l']); // low 클래스에 약 기준에 맞는 관측소수 표시
    stahml['h'] = 0; stahml['m'] = 0; stahml['l'] = 0; // stahml 변수 0으로 설정하여 강중약 누적 계산문제 방지
    stammi = []; // stammi 변수 초기화
}

// 미소지진, 여진정보 불러오는 함수
function geteqk(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () { // 상태가 변경되었을때 작동하는 함수
        if (xhr.readyState === 4) { // 로딩이 완료되었다면
            if (xhr.status === 200) { // 응답코드가 200(성공) 인경우
                callback(xhr.responseText) // responseText를 콜백
            }
        }
    };
    xhr.open('GET', url); // 타입을 GET으로 설정하고 URL을 url 매개변수의 값으로 설정
    xhr.send();
}

// 미소지진, 여진정보 1초마다 갱신
setInterval(function () { // 반복 되는 타이머를 선언
    // 페이즈 (상태) 체크
    if (lastphase && lastphase != iframe.phase && iframe.phase == 2) { // 마지막으로 확인된 페이즈값이 존재하고 마지막으로 확인된 페이즈값과 최신 페이즈 값과 다르고 최신 페이즈 값이 2라면
        ps('phase2.mp3'); //지진조기경보가 발령되었습니다.
        lastphase = iframe.phase; // 알림음 반복 재생 방지를 위하여 lastphase 변수에 최신 페이즈값을 대입
    } else if (lastphase && lastphase != iframe.phase && iframe.phase == 3) {  // 위의 조건이 거짓이라면 마지막으로 확인된 페이즈값이 존재하고 마지막으로 확인된 페이즈값과 최신 페이즈 값과 다르고 최신 페이즈 값이 3라면
        ps('phase3.mp3'); //지진상세정보가 발표되었습니다.
        lastphase = iframe.phase; // 알림음 반복 재생 방지를 위하여 lastphase 변수에 최신 페이즈값을 대입
    }
    // 미소지진 갱신
    geteqk('https://www.weather.go.kr/weather/earthquake_volcano/ajaxEqkMicroPopup.jsp', function (d) {// 콜백을 받으면
        if (d && eqkdata[0] && eqkdata[0] != d) { // d 매개변수에 값이 있고 eqkdata[0] 변수에 값이 있고 eqkdata[0] 변수의 값과 d 매개변수의 값이 다른경우
            ps('meqk.mp3'); // 알림음(TTS 포함) 재생
            console.log("<< 기상청 미소지진정보 >>\n" + d.split("<p class=\"p_hypen\">")[1].split("</p>")[0].replace("&#40;", "\n").replace("&#41;", "").trim().replace(/(<([^>]+)>)/g, "").insert(20, '\n'));
            eqkdata[0] = d; // 알림음 반복 재생 방지를 위하여 eqkdata[0] 변수에 d 매개변수의 값을 대입
        } else { // 위의 조건이 거짓이라면
            eqkdata[0] = d; // eqkdata[0] 변수에 d 매개변수의 값을 대입
        }
    });
    // 여진정보 갱신
    geteqk('https://www.weather.go.kr/weather/earthquake_volcano/ajaxEqkNoticePopup.jsp', function (d) {
        if (d && eqkdata[1] && eqkdata[1] != d) { // d 매개변수에 값이 있고 eqkdata[1] 변수에 값이 있고 eqkdata[1] 변수의 값과 d 매개변수의 값이 다른경우
            ps('aeqk.mp3');  // 알림음(TTS 포함) 재생
            console.log("<< 기상청 국내여진정보 >>\n" + d.split("<p class=\"p_hypen\">")[1].split("</p>")[0].replace("&#40;", "\n").replace("&#41;", "").replace(/· /g, "\n· ").replace(/※ /g, "\n※ ").trim().replace(/(<([^>]+)>)/g, ""));
            eqkdata[1] = d; // 알림음 반복 재생 방지를 위하여 eqkdata[1] 변수에 d 매개변수의 값을 대입
        } else { // 위의 조건이 거짓이라면
            eqkdata[1] = d;  // eqkdata[1] 변수에 d 매개변수의 값을 대입
        }
    });
}, 1000); // 타이머 딜레이를  1000밀리초 = 1초로 설정

console.log('==========Custom Ver ' + cver + '==========\n==========Custom by DISCORD: LDH0606#7291=========='); // 환영 메시지 출력
cver = null; // 램의 부담을 덜기위해 사용이 끝난 변수는 바로 삭제(이론상으론 부담을 덜수있을거같으나 실제 효과는 의문)