// ==UserScript==
// @name         Amazon description word count
// @namespace    https://github.com/MrMarble/Amazon-word-count-UserScript
// @version      0.1
// @description  Helps you writting amazon (it only works on amazon e for now)
// @author       MrMarble
// @match        https://www.amazon.es/review/review-your-purchases/*
// @require      https://gist.githubusercontent.com/MrMarble/27edd304426f1fd72e347d2e8b6d65cd/raw/8d35d76f1ac884b29e6084ecedc12031890e404f/waitFor.js
// @grant        none
//@homepageUrl   https://github.com/MrMarble/AmazonWordCount.user.js
//@updateURL     https://raw.githubusercontent.com/MrMarble/Amazon-word-count-UserScript/master/AmazonWordCount.user.js
//@downloadURL   https://raw.githubusercontent.com/MrMarble/Amazon-word-count-UserScript/master/AmazonWordCount.user.js
// ==/UserScript==

(function() {
    'use strict';

    const init = function () {
        const descriptionBox = document.getElementById('ryp-review-text');

        const createElement = function() {
            let container = document.createElement('div');
            let text = document.createTextNode('Word count: ');
            let count = document.createElement('span');
            count.innerText = '0';

            container.appendChild(text);
            container.appendChild(count);

            descriptionBox.parentElement.appendChild(container);

            return count;
        }

        if (!!descriptionBox) {
            let countElement = createElement();
            descriptionBox.addEventListener('keypress', (event) => {
                let words = descriptionBox.value ? descriptionBox.value.match(/\w{3,}/gi).length : 0;
                countElement.innerText = words;
            });
        }
    }
    waitFor('#ryp-review-text', init);
})();
