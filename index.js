/* INFO:
    Custom Ver 2.1
    Custom by DISCORD: LDH0606#7291
    본 스크립트 파일의 원본코드의 저작권은 기상청에 있음을 알립니다!
    문제가 있을경우 내리도록 하겠습니다!!
*/
const cver = '2.1'; // cver변수의 값 선언(현재 버전)
const giturl = 'https://raw.githubusercontent.com/leedongho0606/cp/master/sound/'; // giturl변수(고정)의 값 선언
const stanamelist = { '36.41,128.94': '안동', '36.57,128.7': '안동', '37.09,127.8': '앙성', '35.34,126.03': '안마도', '36.53,126.33': '안면도', '36.82,127.01': '아산', '37.97,124.71': '백령도', '35.1,127.59': '백운산', '34.769999999999996,125.94': '비금도', '37.16,127.98': '백운', '36.13,127.3': '벌곡', '34.86,127.46': '별량', '37.01,127.32': '보개', '36.54,127.79': '보은', '34.76,127.21': '보성', '35.06,129.07': '부산', '37.230000000000004,127.74': '부론', '35.24,129.11': '금정', '36.97,128.66': '부석', '36.269999999999996,126.92': '부여', '36.82,127.25': '천안', '36.63,127.44': '청주', '36.7,127.72': '청안', '35.66,128.67': '청도', '37.58,128.15': '청일', '34.87,126.97': '청풍', '37.55,127.71': '청운', '35.17,128.57': '창원', '36.42,126.77': '청양', '37.769999999999996,127.81': '춘천', '34.230000000000004,127.24': '초도', '36.87,127.97': '충주', '35.84,127.11': '전주', '35.53,128.47': '창녕', '36.94,128.91': '춘양', '36.03,128.38': '칠곡', '36.17,126.52': '춘장대', '35.36,128.49': '칠서', '36.22,127.97': '추풍령', '34.18,126.89': '청산도', '36.38,129.08': '청송', '38.08,127.52': '철원', '37.83,124.7': '대청도', '35.76,128.89': '경산', '35.87,128.65': '대구', '37.9,127.06': '동두천', '37.25,126.1': '덕적도', '35.83,127.57': '동향', '36.88,126.61': '당진', '36.79,128.27': '동로', '37.69,128.67': '대관령', '36.9,128.14': '덕산', '36.39,128.42': '단북', '36.980000000000004,128.35': '단양', '35.89,127.77': '덕유산', '36.11,125.97': '어청도', '36.97,127.62': '음성', '35.32,128.28': '의령', '36.35,128.68': '의성', '35.11,128.3': '개천', '37.84,127.49': '가평', '36.62,125.55': '격비', '34.99,128.82': '가덕도', '38.41,128.38': '거진', '35.94,129.25': '강동', '34.05,125.12': '가거도', '36.36,129.39': '강구', '36.92,129.15': '금강송', '37.76,126.89': '광탄', '37.7,126.44': '강화', '36.07,128.1': '김천', '36.06,129.19': '기계', '35.230000000000004,127.22': '곡성', '37.9,128.52': '갈천', '36.519999999999996,126.54': '결성', '34.04,127.28': '거문도', '38.25,127.42': '김화', '34.980000000000004,127.89': '금남', '37.64,126.67': '김포', '35.34,126.59': '고창', '37.78,126.29': '교동', '33.3,126.2': '고산', '37.55,126.84': '강서구', '35.75,129.01': '경주산내', '33.55,126.75': '구좌', '36.230000000000004,128.29': '구미', '36.18,128.59': '군위', '37.21,128.82': '사북', '34.94,127.69': '광양', '35.41,128.1': '삼가', '35.07,127.77': '하동', '34.94,128.19': '하일', '35.51,127.74': '함양', '34.55,126.56': '해남', '34.67,126.32': '화원', '37.08,126.77': '화성', '35.56,128.17': '합천', '34.6,126.03': '하의도', '37.54,127.95': '횡성', '34.7,125.2': '홍도', '36.65,126.68': '홍성', '36.07,129.56': '호미곶', '35.14,126.61': '함평', '37.68,127.88': '홍천', '36.44,127.57': '회남', '34.39,125.29': '하태도', '34.68,125.45': '흑산도', '38.06,127.77': '간동', '38.22,127.67': '화천', '37.63,127.34': '화도', '36.44,127.94': '화서', '37.29,127.42': '이천', '37.980000000000004,128.11': '인제', '37.94,128.32': '기린', '38.12,128.31': '인제북', '35.1,126.06': '임자도', '36.05,127.06': '익산', '35.61,127.28': '임실', '37.230000000000004,129.34': '임원', '37.47,126.62': '인천', '35.93,126.97': '익산금강', '36.8,128.99': '재산', '35.31,126.81': '장성', '34.68,126.91': '장흥', '35.65,127.52': '장수', '37.269999999999996,128.26': '주천', '34.47,126.32': '진도', '37.15,128.19': '제천', '35.93,127.29': '완주', '37.4,128.66': '정선', '35.49,126.92': '정읍', '35.87,128.04': '증산', '33.42,126.54': '제주', '36.24,129.21': '죽장', '35.35,127.64': '지리산', '37.88,128.75': '주문진', '35.11,128.75': '진해', '36.79,127.56': '증평', '36.69,127.2': '전의', '35.28,128.71': '진영', '34.31,126.04': '조도', '35.24,128.82': '주촌', '37.61,127.08': '중랑구', '37.8,128.85': '강릉', '35.61,127.91': '거창', '34.61,127.27': '고흥', '34.45,127.12': '거금도', '36.1,127.48': '금산', '36.47,127.14': '공주', '38.6,128.35': '고성', '34.88,128.6': '거제', '35.15,126.99': '무등산(광주)', '36.24,127.61': '이원', '37.49,128.86': '임계', '35.74,127.34': '마령', '35.09,126.28': '무안', '36.65,128.06': '문경', '35.49,128.74': '밀양', '34.2,125.46': '만재도', '35.31,128.99': '물금', '34.64,128.57': '매물도', '35.8,126.42': '무녀도', '34.96,127.16': '문덕', '37.69,127.58': '모곡', '34.81,126.38': '목포', '35.58,128.95': '밀양산내', '37.88,126.76': '문산', '35.95,126.59': '내초', '34.81,127.92': '남해', '35.019999999999996,126.82': '나주', '37.769999999999996,128.38': '내면', '35.42,127.39': '남원', '37.81,128.09': '내촌', '37.05,126.42': '난지도', '34.53,127.46': '나로도', '36.28,127.12': '노성', '36.34,127.79': '옥천', '37.62,128.98': '옥계', '36.22,126.07': '외연도', '36.75,128.69': '평은', '36.19,129.37': '포항', '36.32,126.55': '보령', '36.99,127.13': '평택', '35.72,126.71': '부안', '37.56,128.37': '면온', '37.37,128.39': '평창', '33.35,126.81': '표선', '35.41,127.87': '산청', '36.4,128.15': '상주', '35.01,127.36': '순천', '36.14,126.75': '서천', '37.49,126.91': '서울', '36.78,126.45': '서산', '37.71,128.17': '서석', '37.82,127.28': '상면', '37.44,127.01': '성남', '33.25,126.49': '서귀포', '38.26,128.25': '서화', '37.34,126.7': '시흥', '34.89,126.58': '시종', '36.519999999999996,129.17': '석보', '38.28,128.52': '속초', '37.13,127.51': '설성', '35.68,126.55': '새만금', '35.519999999999996,126.55': '심원', '37.26,128.59': '신동', '37.34,129.08': '신기', '36.05,128.71': '신녕', '37.57,126.95': '종로구', '36.78,129.22': '수비', '35.37,127.13': '순창', '37.28,126.98': '수원', '35.65,126.93': '태인', '36.67,126.13': '태안', '37.11,128.91': '태백', '36.37,127.37': '대전', '37.5,129.12': '동해', '34.84,128.43': '통영', '33.52,126.95': '우도', '37.75,127.1': '의정부', '36.99,129.41': '울진', '36.7,129.4': '온정', '35.46,129.23': '웅촌', '35.7,129.12': '울산', '34.39,126.7': '완도', '35.730000000000004,127.8': '위천', '37.4,128.05': '원주', '36.82,126.25': '원북', '37.4,127.75': '양동', '35.72,128.19': '야로', '38.14,128.6': '강현', '38.01,128.72': '양양', '38.03,126.92': '연천', '36.62,128.43': '예천', '36.09,127.79': '영동', '36.66,128.88': '예안', '35.28,126.47': '영광', '34.730000000000004,127.74': '여수', '36.62,129.08': '영양', '35.85,128.36': '용암', '35.79,129.38': '양북', '38.09,127.98': '양구', '35.019999999999996,128.48': '용정', '37.269999999999996,127.22': '용인', '37.480000000000004,126.43': '영종도', '34.62,128.27': '욕지도', '34.43,127.8': '연도', '34.76,126.73': '영암', '35.97,128.95': '영천', '36.53,129.4': '영덕', '38.09,127.27': '영북', '36.87,128.51': '영주', '37.18,128.45': '영월', '37.6,125.71': '소연평도', '36.74,126.81': '예산', '33.98,126.92': '여서도', '36.54,126.94': '유구' };
let stahml = [0, 0, 0, []]; // stahml변수의 초기값 선언
eqkdata = []; // eqkdata전역변수의 초기값 선언
lasteta = null;
String.prototype.insert = function (index, string) {// insert 메서드 생성
    if (index > 0) {
        return this.substring(0, index) + string + this.substring(index, this.length);
    }
    return string + this;
};// ↓iframe의 map_area 클래스에 커스텀 css,html 코드 삽입↓
let divi = iframe.document.getElementsByClassName('map_area')[0]; // iframe의 document에서 map_area 클래스를 찾아 변수에 대입
divi.innerHTML = divi.innerHTML + "<style>.map_area .jindo{position:absolute;left:0;top:0;width:55px;z-index:10;font-size:50px;letter-spacing:-.1em; text-align: center;}.map_area .high{position:absolute;right:5px;top:0px;width:100px;z-index:10;font-size:30px;letter-spacing:-.1em; text-align: right; color:#FF0000;}.map_area .mid{position:absolute;right:5px;top:30px;width:100px;z-index:10;font-size:30px;letter-spacing:-.1em; text-align: right; color:#FFFF00;}.map_area .low{position:absolute;right:5px;top:60px;width:100px;z-index:10;font-size:30px;letter-spacing:-.1em; text-align: right; color:#92D050;}.map_area .byldh{position:absolute;right:0px;bottom:0px;width:200px;z-index:10;font-size:17px;letter-spacing:-.1em; text-align: right; color:#FF4500}</style><div class='jindo'>1</div><div class='high'>강 : 0</div><div class='mid'>중 : 0</div><div class='low'>약 : 0</div><div class='byldh'>V" + cver + "</div><audio id='cps' style='display:hidden'><source src='' type='audio/mp3'></audio><div class='layerPopup' style='display: none; padding: 20px;border: 4px solid rgba(0, 0, 0, 0.5);position: absolute;left: 0;top: 0;background: rgba(255, 255, 255,0.5);z-index:10;color:rgba(0, 0, 0, 255)'></div>"; //커스텀 css,html 코드 삽입
divi = null; // 램 최적화
function winalr(t, b) {
    if (Notification.permission === 'granted') {
        let n = new Notification(t, { body: b, icon: 'https://raw.githubusercontent.com/leedongho0606/cp/master/img/logo_gov.png' });
        setTimeout(function () {
            n.close();
        }, 10000);
    }
}
function geteqk(url, callback) { // 미소지진, 여진정보 불러오는 함수
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () { // 상태가 변경되었을때 작동하는 함수
        if (xhr.readyState === 4) { // 로딩이 완료되었다면
            if (xhr.status === 200) { // 응답코드가 200(성공) 인경우
                callback(xhr.responseText); // responseText를 콜백
            }
        }
    };
    xhr.open('GET', url); // 타입을 GET으로 설정하고 URL을 url 매개변수의 값으로 설정
    xhr.send(null);
}
ps = function (url) {// 커스텀 함수 ps 선언
    let cps = iframe.document.getElementById('cps'); // iframe의 document에서 cps id를 찾아 변수 alarm에 대입
    cps.src = giturl + url; // giturl변수의 값(문자)와 url 매개변수의 값(문자)를 서로 대입 하여 URL 설정
    cps.play(); // 재생
    cps = null; // 램 최적화
}
iframe.fn_alarm = function (r) {// iframe내의 fn_alarm 함수 오버라이딩하여 커스텀
    /*
    if (iframe.alarmReg.indexOf(r) != -1) {
        let alarm = iframe.document.getElementById('alarmWav');  // iframe의 document에서 alarmWav id를 찾아 변수 alarm에 대입
        alarm.src = giturl + 'high.mp3';
        alarm.play(); // 재생
        //alarm = null; // 램 최적화
    }
    */
}
/*
iframe.eqkMag = 3;
iframe.fn_alarm(1);
*/
iframe.eqkimg = function () { // 미소지진발생위치 이미지 함수
    window.open('https://www.weather.go.kr/repositary/xml/eqk/img/eqk_img_0_' + iframe.document.body.getElementsByClassName('layerPopup')[0].innerText.substring(17, 37).replace(/\//g, "").replace(/:/g, "").replace(" ", "").trim() + '.png', '', 'width=700px, height=600px,resize=yes,scrollbars=no,status=no'); // 새창에 이미지 표시
}
iframe.closepopup = function () { // 팝업창 숨기기(닫기) 함수
    iframe.document.body.getElementsByClassName('layerPopup')[0].style.display = 'none'; // 레이어 팝업 클래스의 스타일의 디스플레이 속성의 값을 none으로 설정(숨김)
}
iframe.fn_drawSta = function (sta) {// iframe내의 fn_drawSta 함수 오버라이딩하여 커스텀
    let img = iframe.document.getElementById('img'); // iframe의 document에서 img id를 찾아 변수 img에 대입
    let canS = iframe.document.getElementById('canS'); // iframe의 document에서 canS id를 찾아 변수 canS에 대입
    let ctxS = iframe.canS.getContext('2d');
    let canB = iframe.document.getElementById('canB'); // iframe의 document에서 canB id를 찾아 변수 canB에 대입
    let ctxB = iframe.canB.getContext('2d');
    canS.width = canB.width = img.width - 1;
    canS.height = canB.height = img.height - 1;
    ctxS.save(); ctxB.save();
    ctxB.scale(canB.width / iframe.imgW, canB.width / iframe.imgW); // 크기조정
    ctxS.scale(canS.width / iframe.imgW, canS.width / iframe.imgW); // 크기조정
    ctxS.strokeStyle = '#000000'; // 윤곽 색상을 검은색으로 설정
    let cnt = 0; // cnt변수의 값을 0으로 선언
    if (iframe.gridArr.length > 0) {
        for (let i = 38.85; i > 33; i -= 0.05) {
            for (let j = 124.5; j < 132.05; j += 0.05) {
                ctxB.fillStyle = iframe.mmiColor[Number(iframe.gridArr[cnt])];
                ctxB.fillRect(iframe.fn_parseX(j) - 4, iframe.fn_parseY(i) - 7, 8, 8);
                if (Math.abs(iframe.myLoc[iframe.curLocSel].lat - i) < 0.025 && Math.abs(iframe.myLoc[iframe.curLocSel].lon - j) < 0.025) {
                    iframe.document.getElementById('myMag').innerHTML = iframe.mmi[iframe.gridArr[cnt]];
                    iframe.document.getElementById('magBack').setAttribute('mag', iframe.gridArr[cnt]);
                    iframe.document.getElementById('magInfo').innerHTML = iframe.mag[iframe.gridArr[cnt]];
                }
                cnt++;
            }
        }
    } else {
        ctxB.clearRect(0, 0, canB.width, canB.height);
    }
    for (let i = 0; i < sta.length; i++) { // sta의 크기만큼 반복 v1.5 업데이트 당시 기준 관측소 개수는 266.
        //테스트*/sta[i].mmi = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        //테스트2*/sta[i].mmi = 2;
        if (sta[i].mmi >= 5) { // 진도 5이상인 경우
            stahml[0] = stahml[0] + 1; // 강에 1을 추가
        } else if (sta[i].mmi >= 3 && sta[i].mmi <= 4) {  // 진도 3이상 4이하인 경우
            stahml[1] = stahml[1] + 1; // 중에 1을 추가
        } else if (sta[i].mmi == 2) { // 진도 2인경우
            stahml[2] = stahml[2] + 1; // 약에 1을 추가
        }
        ctxS.fillStyle = iframe.mmiColor[sta[i].mmi]; // 한반도 지도의 관측소 표시 박스에 색상 입히기
        ctxS.fillRect(iframe.fn_parseX(sta[i].lon) - 4, iframe.fn_parseY(sta[i].lat) - 4, 10, 10);
        ctxS.strokeRect(iframe.fn_parseX(sta[i].lon) - 4, iframe.fn_parseY(sta[i].lat) - 4, 10, 10);
        stahml[3].push(sta[i].mmi) // stammi 변수(배열)에 전체 관측소 진도 임시로 저장
    }
    ctxB.restore(); ctxB.restore(); ctxS.restore(); ctxS.restore();
    let maxmmi = Math.max.apply(null, stahml[3]); // stahml 변수(배열)에서 임시로 저장한 진도 값중 가장 큰값을 뽑음
    if (stahml[0] >= 1 && stahml[1] >= 0 && stahml[2] >= 0) { // 강이 1이상인경우
        ps('beep3.MP3'); // 경고음 재생
    } else if (stahml[0] == 0 && stahml[1] >= 1 && stahml[2] >= 0) { // 중이 1이상인경우
        ps('update.mp3'); // 주의음 재생
    } else if (stahml[0] == 0 && stahml[1] == 0 && stahml[2] >= 1) { // 약이 1이상인경우
        ps('beep.mp3'); // 알림음 재생
    }
    iframe.document.getElementsByClassName('jindo')[0].innerHTML = maxmmi; // 진도 클래스내의 html 코드를 maxmmi변수의 값(수)로 설정
    iframe.document.getElementsByClassName('jindo')[0].style.backgroundColor = iframe.mmiColor[maxmmi]; // 진도 클래스의 배경색을 진도에 따라 설정 
    if (maxmmi >= 10) { // 진도가 10 이상인경우
        iframe.document.getElementsByClassName('jindo')[0].style.color = '#FFFFFF'; // 진도 클래스의 글자색을 하얀색으로 변경
    } else { // 위 조건이 거짓 이라면
        iframe.document.getElementsByClassName('jindo')[0].style.color = '#000000'; // 진도 클래스의 글자색을 검은색으로 변경
    }
    iframe.document.getElementsByClassName('high')[0].innerHTML = '강 : ' + Number(stahml[0]); // high 클래스에 강 기준에 맞는 관측소수 표시
    iframe.document.getElementsByClassName('mid')[0].innerHTML = '중 : ' + Number(stahml[1]); // mid 클래스에 중 기준에 맞는 관측소수 표시
    iframe.document.getElementsByClassName('low')[0].innerHTML = '약 : ' + Number(stahml[2]); // low 클래스에 약 기준에 맞는 관측소수 표시
    stahml[0] = 0; stahml[1] = 0; stahml[2] = 0; stahml[3] = [];// stahml 변수 초기화
}
setInterval(function () { // 미소지진정보갱신, 여진정보갱신, 페이즈 상태 체크 1초마다 작동
    geteqk('https://www.weather.go.kr/weather/earthquake_volcano/ajaxEqkMicroPopup.jsp', function (d) {// 미소지진 갱신
        if (d && eqkdata[0] != d && eqkdata[0] && d.indexOf('<p class=\"p_hypen\">') >= 0 && d.indexOf('</p>') >= 0) { // d 매개변수에 값이 있고 eqkdata[0] 변수에 값이 있고 eqkdata[0] 변수의 값과 d 매개변수의 값이 다른경우
            ps('meqk.mp3'); // 미소 지진 정보가 발표 되었습니다.
            winalr('기상청 미소지진정보', d.split("<p class=\"p_hypen\">")[1].split("</p>")[0].replace("&#40;", "\n").replace("&#41;", "").trim().replace(/(<([^>]+)>)/g, "").insert(20, '\n'));
            let popup = iframe.document.body.getElementsByClassName('layerPopup')[0]; // iframe의 document에서 layerPopup 라는 클래스를 찾아 변수에 대입
            popup.innerHTML = "<< 기상청 미소지진정보 >><br>" + d.split("<p class=\"p_hypen\">")[1].split("</p>")[0].replace("&#40;", "\n").replace("&#41;", "").trim().replace(/(<([^>]+)>)/g, "").insert(20, '\n').replace(/\n/g, "<br>") + "<br><button onclick='closepopup();'>닫기</button><button onclick='eqkimg();'>발생위치 이미지</button>"; // 미소지진정보 양식에 맞게 다듬기
            popup.style.display = 'block'; // 팝업창 표시
            popup = null; // 램 최적화
            eqkdata[0] = d; // 알림음 반복 재생 방지를 위하여 eqkdata[0] 변수에 d 매개변수의 값을 대입
        } else if (d && eqkdata[0] == '' && d.indexOf('<p class=\"p_hypen\">') >= 0 && d.indexOf('</p>') >= 0) { // 위의 조건이 거짓이라면
            eqkdata[0] = d; // eqkdata[0] 변수에 d 매개변수의 값을 대입
        }
    });
    geteqk('https://www.weather.go.kr/weather/earthquake_volcano/ajaxEqkNoticePopup.jsp', function (d) {// 여진정보 갱신
        if (d && eqkdata[1] && d.indexOf('<p class=\"p_hypen\">') >= 0 && d.indexOf('</p>') >= 0 && eqkdata[1] != d) { // d 매개변수에 값이 있고 eqkdata[1] 변수에 값이 있고 eqkdata[1] 변수의 값과 d 매개변수의 값이 다른경우
            ps('aeqk.mp3'); // 여진 정보가 발표 되었습니다.
            winalr('기상청 국내여진정보', d.split("<p class=\"p_hypen\">")[1].split("</p>")[0].replace("&#40;", "\n").replace("&#41;", "").replace(/· /g, "\n· ").replace(/※ /g, "\n※ ").trim().replace(/(<([^>]+)>)/g, ""));
            let popup = iframe.document.body.getElementsByClassName('layerPopup')[0];// iframe의 document에서 layerPopup 라는 클래스를 찾아 변수에 대입
            popup.innerHTML = "<< 기상청 국내여진정보 >><br>" + d.split("<p class=\"p_hypen\">")[1].split("</p>")[0].replace("&#40;", "\n").replace("&#41;", "").replace(/· /g, "\n· ").replace(/※ /g, "\n※ ").trim().replace(/(<([^>]+)>)/g, "").replace(/\n/g, "<br>") + "<br><button onclick='closepopup();'>닫기</button>"; // 여진정보 양식에 맞게 다듬기
            popup.style.display = 'block'; // 팝업창 표시
            popup = null; // 램 최적화
            eqkdata[1] = d; // 알림음 반복 재생 방지를 위하여 eqkdata[1] 변수에 d 매개변수의 값을 대입
        } else if (d && eqkdata[1] == '' && d.indexOf('<p class=\"p_hypen\">') >= 0 && d.indexOf('</p>') >= 0) { // 위의 조건이 거짓이라면
            eqkdata[1] = d;  // eqkdata[1] 변수에 d 매개변수의 값을 대입
        }
    });// ↓페이즈 (상태) 체크↓
    if (eqkdata[2] && eqkdata[2] != iframe.phase && iframe.phase == 2) { // 마지막으로 확인된 페이즈값이 존재하고 마지막으로 확인된 페이즈값과 최신 페이즈 값과 다르고 최신 페이즈 값이 2라면
        let alarm = iframe.document.getElementById('alarmWav');  // iframe의 document에서 alarmWav id를 찾아 변수 alarm에 대입
        alarm.src = giturl + 'high.mp3';
        alarm.play(); // 재생
        winalr('지진 신속 정보', iframe.eqkStr + '\n규모 ' + (iframe.eqkMag).toFixed(1) + ' 지진발생\nS파 도달까지 : ' + iframe.eta + '초\nP파 도달까지 : ' + iframe.eta / 2 + '초');
        ps('phase2.mp3'); //지진 신속 정보가 발표 되었습니다.
        eqkdata[2] = iframe.phase; // 알림음 반복 재생 방지를 위하여 eqkdata[2] 변수에 최신 페이즈값을 대입
    } else if (eqkdata[2] && eqkdata[2] != iframe.phase && iframe.phase == 3) {  // 위의 조건이 거짓이라면 마지막으로 확인된 페이즈값이 존재하고 마지막으로 확인된 페이즈값과 최신 페이즈 값과 다르고 최신 페이즈 값이 3라면
        let alarm = iframe.document.getElementById('alarmWav');  // iframe의 document에서 alarmWav id를 찾아 변수 alarm에 대입
        alarm.src = giturl + 'high.mp3';
        alarm.play(); // 재생
        winalr('지진 상세 정보', iframe.eqkStr + '\n규모 ' + (iframe.eqkMag).toFixed(1) + ' 지진발생\n최대진도 : ' + iframe.eqkMax + '\n깊이 : ' + iframe.eqkDep + 'km');
        ps('phase3.mp3'); //지진 상세 정보가 발표 되었습니다.
        eqkdata[2] = iframe.phase; // 알림음 반복 재생 방지를 위하여 eqkdata[2] 변수에 최신 페이즈값을 대입
    } else { // 위 두 조건이 모두 거짓이라면
        eqkdata[2] = iframe.phase; // eqkdata[2] 변수에 최신 페이즈값을 대입
    }
    if (iframe.phase > 1) {
        // 3분, 2분 30초, 2분, 1분 30초, 60초, 50초, 40초, 30초, 20초, 10, 9, 8, 7, 6 ,5 ,4 ,3 ,2, 1, 도달
        if (lasteta && lasteta != iframe.eta && iframe.eta >= -1) {
            if (iframe.phase > 1 && iframe.eta > 0) {
                if (iframe.eta > 0 && iframe.eta <= 10) {
                    ps('eta' + iframe.eta + '.mp3');
                } else if (iframe.eta > 10 && iframe.eta <= 60 && Number(String(iframe.eta).charAt(String(iframe.eta).length - 1)) == 0) {
                    ps('eta' + iframe.eta + '.mp3');
                } else if (iframe.eta == 90) {
                    ps('eta' + iframe.eta + '.mp3');
                } else if (iframe.eta == 120) {
                    ps('eta' + iframe.eta + '.mp3');
                } else if (iframe.eta == 150) {
                    ps('eta' + iframe.eta + '.mp3');
                } else if (iframe.eta == 180) {
                    ps('eta' + iframe.eta + '.mp3');
                }
                //console.log('도달 까지 ' + iframe.eta + '초 남음');
            } else if (iframe.phase > 1 && iframe.eta == 0) {
                ps('eta0.mp3'); // 도달
                //console.log('도달!');
            }
        } else {
            lasteta = iframe.eta;
        }
    }
}, 1000); // 타이머 딜레이를  1000밀리초 = 1초로 설정
console.log('==========Custom Ver ' + cver + '==========\n==========Custom by DISCORD: LDH0606#7291=========='); // 환영 메시지 출력
if (Notification.permission === 'denied' || Notification.permission === 'default') {
    Notification.requestPermission();
}