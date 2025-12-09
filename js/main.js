//hambuger nav
$(function () {
    $('#main_nav').css({
        opacity: 0,
        left:'-100%'
    });
    $('#toggle_button').click(function () {
        if ($(this).hasClass('on')) { //네비가 열린 상태일 때 (on 일 때)
            $('#main_nav').animate({
                opacity: 0,
                left:'-100%'
            }, 500);
            $(this).removeClass('on');
        } else { //네비가 닫힌 상태일 때 (on 아닐 때)
            $('#main_nav').animate({
                opacity: 1,
                left:0
            }, 500);
            $(this).addClass('on');
        }
    });
});

// 햄버거 버튼과 메뉴 선택
const toggleButton = document.getElementById('toggle_button');
const menu = document.getElementById('main_nav');

// 버튼 클릭 시 메뉴 열기/닫기
toggleButton.addEventListener('click', function() {
    menu.classList.toggle('show');
    
    if (menu.classList.contains('show')) {
        // 메뉴가 열릴 때 스크롤 숨기기
        document.body.style.overflow = 'hidden';
    } else {
        // 메뉴가 닫힐 때 스크롤 복원
        document.body.style.overflow = '';
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const innerElement = document.querySelector('#design12 .inner');
    
    if (innerElement) {
        // 마우스 휠 이벤트
        innerElement.addEventListener('wheel', function(e) {
            // deltaY가 양수일 때 아래로, 음수일 때 위로 스크롤
            if (e.deltaY !== 0) {
                // 세로 스크롤 양을 가로로 바꾸기 위해 deltaY * 1 배로 수평 스크롤 이동
                this.scrollLeft += e.deltaY * 1;  
                e.preventDefault();  // 기본 세로 스크롤을 막습니다.
            }
        });

        // 터치 이벤트 (모바일 대응)
        let touchStartX = 0;
        let touchEndX = 0;

        innerElement.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;  // 터치 시작 위치
        });

        innerElement.addEventListener('touchmove', function(e) {
            touchEndX = e.touches[0].clientX;  // 터치 끝 위치
        });

        innerElement.addEventListener('touchend', function() {
            const touchDifference = touchStartX - touchEndX;

            if (Math.abs(touchDifference) > 50) {
                this.scrollLeft += touchDifference * 1;  // 터치 드래그에 비례한 수평 스크롤
            }
        });
    } else {
        console.log("요소를 찾을 수 없습니다.");
    }
});
