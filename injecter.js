injected = false;
iver = 1.0;
function injecter() {
    let xhr = new XMLHttpRequest();
    if (!injected) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    eval(xhr.responseText);
                } else {
                    alert('커스텀 코드 적용에 실패하였습니다!\n' + xhr.status);
                }
            }
        };
        xhr.open('GET', 'https://raw.githubusercontent.com/leedongho0606/cp/master/index.js');
        xhr.send(null);
    } else {
        alert('이미 적용되어있습니다!');
    }
}
function ivercheck() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (Number(xhr.responseText) <= iver) {
                    injecter()
                } else {
                    let chs = confirm('커스텀 적용 코드 업데이트가 있습니다!\n새로운 코드를 복사하시겠습니까?');
                    if (chs) {
                        window.open('https://raw.githubusercontent.com/leedongho0606/cp/master/injecter.js');
                    } else {
                        alert('커스텀 적용 코드는 업데이트하시는 것을 권장합니다!');
                        injecter()
                    }
                    chs = null;
                }
            } else {
                alert('커스텀 적용 코드 최신버전 확인에 실패하였습니다!\n' + xhr.status);
                injecter();
            }
        }
    };
    xhr.open('GET', 'https://raw.githubusercontent.com/leedongho0606/cp/master/iver.txt');
    xhr.send(null);
}
ivercheck();