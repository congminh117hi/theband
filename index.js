
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal-close')
const modalContainer = document.querySelector('.container-modal')

// Hàm hiển thị modal mua vé ( thêm class open vào modal )
function showBuyTickets() {
    modal.classList.add('open')
}

// Hàm ẩn modal mua vé ( gỡ bỏ class open khỏi modal )
function hideBuyTickets() {
    modal.classList.remove('open')
}

// Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

// Nghe hành vi click vào nút close
modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

// var header = document.getElementById('Header')
// var mobileMenu = document.getElementById('mobile-menu')
// var headerHeight = header.clientHeight

// //Đóng mở mobile menu
// mobileMenu.onclick = function() {
//     var isClosed = header.clientHeight === headerHeight;
//     if (isClosed) {
//         header.style.height = 'auto';
//     } else {
//         header.style.height = null;
//     }
// }

//Tự động đóng khi chọn menu
// var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
// for (var i = 0; i < menuItems.length; i++) {
//     var menuItem = menuItems[i];

//     menuItem.onclick = function(event) {
//         var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('Subnav');
//         if (isParentMenu) {
//             event.preventDefault();
//         } else {
//             header.style.height = null;
//         }
//     }
// }