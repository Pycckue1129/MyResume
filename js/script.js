'use strict';

window.addEventListener('DOMContentLoaded', () => {

    //tabs 

    const workContent = document.querySelectorAll('.my-work-expirience-company-block'),
        tabsParent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item');

    function hideContent() {
        workContent.forEach(item => {
            item.classList.add('hide');
            item.classList.add('show');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showContent(i = 0) {
        workContent[i].classList.remove('hide');
        workContent[i].classList.add('show');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideContent();
    showContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        console.log(target);
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideContent();
                    showContent(i);
                    console.log(item);
                }
            });
        }
    });
});