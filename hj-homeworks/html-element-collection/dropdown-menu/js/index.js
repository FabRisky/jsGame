'use strict';

const dropdown = document.getElementsByClassName('wrapper-dropdown');

dropdown[0].onclick = () => {
    dropdown[0].classList.toggle('active')
};
