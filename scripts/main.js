(() => {

    // BURGER-MENU
    let burger_king = document.querySelectorAll('.burger-king')
    let burger_king_button = document.querySelectorAll('.burger-king li')[1];
    let burger_king_menu = Array.from(document.getElementsByClassName('burger-king-menu'));
    let burger_king_close = document.querySelector('.burger-king-menu .fa-xmark');


    let hideBurgerKingMenu = () => { 
        burger_king_menu.forEach((menu) => { 
                menu.classList.toggle('burger-king-menu'); 
            })
    }



    let showBurgerKingMenu = () => { 

            hideBurgerKingMenu();
            burger_king[0].style.display = "none";

    }
    
    let showBurgerKing = () => { 
        hideBurgerKingMenu();
            burger_king[0].style.display = "flex";
    }

    burger_king_button.addEventListener('click', showBurgerKingMenu);
    burger_king_close.addEventListener('click', showBurgerKing);
    

    

    // MODAL 

let btn_modal = document.querySelector('input[type="button"]');
let modal = document.getElementsByClassName('modal-container');
let modal_close_button = document.querySelector('.modal-container .modal-card i');


 
let closeModal = () => modal[0].classList.toggle('modal-hidden');   

btn_modal.addEventListener('click', closeModal);
modal_close_button.addEventListener('click', closeModal);

// SVG-CONTAINER
    
let svg_container = document.querySelectorAll('.container-svg');

    
    svg_container.forEach(e => {

        e.addEventListener('mouseover', function () {
                e.style.border = '1px #03a9f4 solid';
                e.children[0].style.fill = '#03a9f4';
        }
        );

        e.addEventListener('mouseout', function () {
                e.style.border = '1px #AFB1B8 solid';
                e.children[0].style.fill = '#AFB1B8';
        }
        );        
    });


})();
