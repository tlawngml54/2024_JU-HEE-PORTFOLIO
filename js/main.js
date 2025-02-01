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
        innerElement.addEventListener('wheel', function(e) {
            if (e.deltaY !== 0) {
                this.scrollLeft += e.deltaY * 0.5;  // deltaY에 비례한 수평 스크롤
                e.preventDefault();  // 기본 세로 스크롤을 막습니다.
            }
        });
    } else {
        console.log("요소를 찾을 수 없습니다.");
    }
});
