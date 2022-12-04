

//맨 위로 이동 버튼 나타내고 숨겨주는 함수
function hideGoTop(scrollTop) {
    const $goTop = document.querySelector('.go-top');

    /*
        toggle함수의 2번째 인수로 논리값을 전달하면
        true일 경우 클래스를 강제로 추가하고,
        false일 경우 클래스를 강제로 제거한다.
    */
    $goTop.classList.toggle('hide', scrollTop < 800);

    /*
    if (scrollTop < 800) {
        $goTop.classList.add('hide');
    } else {
        $goTop.classList.remove('hide');
    }
    */
}

//스크롤을 일정부분 내리면 헤더의 css와 로고이미지를 교체하는 함수
function changeFixHeader(scrollTop) {


    const $logoImg = document.querySelector('.inner-header h1 img');
    if (scrollTop > 200) {
        $logoImg.setAttribute('src', 'img/logo2.png');
        $('header').addClass('on');
        // document.querySelector('header').classList.add('on');
    } else {
        $logoImg.setAttribute('src', 'img/logo.png');
        $('header').removeClass('on');
    }
}

//즉시 실행 함수
(function(){

    //스크롤 이벤트 - 1. 헤더 변경 2. 맨위로 이동 화살표 처리
    document.addEventListener('scroll', e => {
        // console.log('스크롤 이벤트 발생!');

        //스크롤 좌표값 얻는 방법
        // console.log(document.documentElement.scrollTop);
        const scrollTop = document.documentElement.scrollTop;

        //맨위로 이동 버튼 처리
        hideGoTop(scrollTop);
        //헤더 변경 처리
        changeFixHeader(scrollTop);
        
    });


  
    //go-top 스크롤 부드럽게 처리
    document.querySelector('.go-top').addEventListener('click', e => {
        //jQuery animate함수: 애니메이션의 종류나 속도 지정
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
    });

  

}());