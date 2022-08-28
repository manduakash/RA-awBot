let page1 = document.getElementById('page-1')
let page2 = document.getElementById('page-2')
let page3 = document.getElementById('page-3')
let page4 = document.getElementById('page-4')
let page5 = document.getElementById('page-5')
const mediaQuery = window.matchMedia('(max-width:768px)')

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    if (mediaQuery.matches) {
        // moveToCenter for mobile
        page1.style.left = value * 0.2 + 'px';
        page2.style.left = value * -0.20 + 'px';
        page3.style.left = value * -0.10 + 'px';
        page4.style.left = value * -0.30 + 'px';
        page5.style.left = value * 0.1 + 'px';

        // moveToDownwards for mobile
        page1.style.top = value * 1.30 + 'px';
        page2.style.top = value * 1.10 + 'px';
        page3.style.top = value * 1.25 + 'px';
        page4.style.top = value * 1.65 + 'px';
        page5.style.top = value * 1.10 + 'px';
    } else {
        // moveToCenter for desktop
        page1.style.left = value * 0.11 + 'px';
        page2.style.left = value * -0.10 + 'px';
        page3.style.left = value * 0.50 + 'px';
        page4.style.left = value * -0.60 + 'px';
        page5.style.left = value * 0.65 + 'px';
        // moveToDownwards for desktop
        page1.style.top = value * 1.30 + 'px';
        page2.style.top = value * 1.10 + 'px';
        page3.style.top = value * 1.25 + 'px';
        page4.style.top = value * 1.65 + 'px';
        page5.style.top = value * 1.10 + 'px';
    }





})

// -- -- -- -- -- - --tilt-- -- -- -- -- -- -- -
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 50,
    speed: 100
});

// writing page setup

//selection text function


function fontSize() {

    var value = document.getElementById('font-size').value;
    if (window.getSelection) {

        var highlight = window.getSelection();
        var span = `<span style="font-size:${value};"> ${highlight} </span>`;
        document.body.innerHTML = document.body.innerHTML.replace(window.getSelection(), span);
    }

};

function fontColor() {

    var value = document.getElementById('font-color').value;
    if (window.getSelection) {

        var highlight = window.getSelection();
        var span = `<span style="color:${value};">${highlight}</span>`;
        document.body.innerHTML = document.body.innerHTML.replace(window.getSelection(), span);
    }


};

function fontBold() {

    var value = document.getElementById('font-bold').value;
    if (window.getSelection) {

        var highlight = window.getSelection();
        var span = `<span style="font-weight:${value};">${highlight}</span>`;
        document.body.innerHTML = document.body.innerHTML.replace(window.getSelection(), span);
    }

};

function letterSpacing() {

    var value = document.getElementById('letter-spacing').value;
    if (window.getSelection) {

        var highlight = window.getSelection();
        var span = `<span style="letter-spacing:${value};">${highlight}</span>`;
        document.body.innerHTML = document.body.innerHTML.replace(window.getSelection(), span);
    }


};

function wordSpacing() {

    var value = document.getElementById('word-spacing').value;
    if (window.getSelection) {

        var highlight = window.getSelection();
        var span = `<span style="word-spacing:${value};">${highlight}</span>`;
        document.body.innerHTML = document.body.innerHTML.replace(window.getSelection(), span);
    }


};

function lineSpacing() {

    var value = document.getElementById('line-spacing').value;
    if (window.getSelection) {

        var highlight = window.getSelection();
        var span = `<span style="line-height:${value};">${highlight}</span>`;
        document.body.innerHTML = document.body.innerHTML.replace(window.getSelection(), span);
    }

};

function fontsChange() {

    var value = document.getElementById('fonts').value;
    if (window.getSelection) {

        var highlight = window.getSelection();
        var span = `<span style="font-family:${value};">${highlight}</span>`;
        document.body.innerHTML = document.body.innerHTML.replace(window.getSelection(), span);
    }

};

function alignText() {

    var value = document.getElementById('align-items').value;
    if (window.getSelection) {

        var highlight = window.getSelection();
        var span = `<span style="text-align:${value};">${highlight}</span>`;
        document.body.innerHTML = document.body.innerHTML.replace(window.getSelection(), span);
    }

};
// -- -- -- -- --review-- -- -- -- --
const stars = document.querySelectorAll('.star');
const output = document.querySelector('.output-rating');

for (x = 0; x < stars.length; x++) {
    stars[x].starValue = (x + 1);

    ["click", "mouseover", "mouseout"].forEach(function(e) {
        stars[x].addEventListener(e, showRating);
    })
}

function showRating(e) {
    let type = e.type;
    console.log(type);
    let starValue = this.starValue;
    // let output = this.output;

    stars.forEach(function(elem, ind) {
        if (type === 'click') {
            if (ind < starValue) {
                elem.classList.add("purp-star");
            } else {
                elem.classList.remove("purp-star");

            }
        }
        if (type === 'mouseover') {
            if (ind < starValue) {
                elem.classList.add("blue-star");
            } else {
                elem.classList.remove("blue-star");

            }
        }
        if (type === 'mouseout') {
            elem.classList.remove("blue-star");
        }
        if (type === 'click') {
            if (ind > 1) {
                output.innerHTML = "You rated " + starValue + " out of  5 Star.";

            }
        }
    })
}

// ---------html2canvas.min.js-------------
document.getElementById("download").onclick = function() {
    const writingPage = document.getElementById('writing-page');

    html2canvas(writingPage).then(canvas => {
        const base64image = canvas.toDataURL("image/png");
        var anchor = document.createElement('a');
        anchor.setAttribute("href", base64image);
        anchor.setAttribute("download", "RA-awBOT_project.png");
        anchor.click();
        anchor.remove();

    });
};