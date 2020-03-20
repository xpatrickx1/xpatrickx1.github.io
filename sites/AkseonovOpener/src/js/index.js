$(document).ready(function () {
    window.app = function (_) {

        var log = console.log.bind(console),
            messageElement = document.querySelector('.js-typewriter'),
            text = messageElement.innerText.trim();

        var words = text.split(' ');

        var work = [];

        words.forEach(function (word) {
            var splitWord = word.split('').map(function (char, index) {
                return '<i>' + char + '</i>';
            }).join('');
            work.push(splitWord);
        });

        var formattedWords = work.map(function (word, index) {
            return '<span>' + word + '</span>';
        }).join(' ');

        messageElement.innerHTML = formattedWords;
        setTimeout(function (_) {
            messageElement.classList.add('animate');
        }, 700);


        return {
            replay: function replay(event) {
                messageElement.classList.remove('animate');
                messageElement.offsetHeight; // force reflow
                setTimeout(function (_) {
                    messageElement.classList.add('animate');
                }, 5000);
            }
        };
    }();
});