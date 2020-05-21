<b>반드시 크롬 브라우저를 사용!!</b><br>
다른 브라우저는 지원 안될 수 있음<br>

1. 기상청 실시간 지진감시 사이트 접속(https://www.weather.go.kr/pews/)<br>
2. F12키 또는 Ctrl + Shift + i키 누르기<br>
3. Console 탭으로 이동<br>
4. Console 탭에서 아래 소스 복붙후 엔터<br>
  let xhr = new XMLHttpRequest(); xhr.onreadystatechange = function () { if (xhr.readyState === 4) { if (xhr.status === 200) {     eval(xhr.responseText); } } }; xhr.open('GET', 'https://raw.githubusercontent.com/leedongho0606/cp/master/index.js'); xhr.send();<br>
<img src="https://github.com/leedongho0606/cp/raw/master/info.png"></img><br>
PEWS Custom<br>
문제 있을시 바로 내리겠습니다.<br>
DISCORD : LDH0606#7291<br>
