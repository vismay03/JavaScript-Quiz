
// Next Button

var b = document.querySelector('.next');

// Right Answer
var t = document.querySelector('.t');

// Wrong Answer
var wa = document.querySelectorAll('.w');

// First Question
var q = document.querySelector('.q1');

// After click on Right Answer
t.addEventListener('click', function(e) {
    e.target.style.backgroundColor = "green";
    e.target.style.color ="white";
    var text = e.target.textContent;

    e.target.childNodes[1].setAttribute('class','fa fa-check');
    
    
    // e.target.style.textAlign = 'center';
}); 


// After click on Wrong Answer
for (let i = 0; i < wa.length; i++) {
    const w = wa[i];

    
    w.addEventListener('click', function(e) {
        e.target.style.backgroundColor = "red";
        e.target.style.color = "white";
        e.target.childNodes[1].setAttribute('class','fa fa-times');
        t.style.backgroundColor ="green";
        t.style.color = "white";
        t.childNodes[1].setAttribute('class','fa fa-check');
    });
}

var i = 1;

// After click on 'Next' Button
b.addEventListener('click',function(e){
    var q = document.querySelector('.q'+i);
    q.style.display = "none";


    i = i+1;
    
    var qq = document.querySelector('.q'+i);
    qq.style.display = "block";
    var tt = document.querySelector('.q'+ i +' '+'.t');
    tt.addEventListener('click', function(e) {
        e.target.style.backgroundColor = "green";
        e.target.style.color ="white";
        e.target.childNodes[1].setAttribute('class','fa fa-check');
    });
    
    for (let i = 0; i < wa.length; i++) {
        const w = wa[i];
    
        
        w.addEventListener('click', function(e) {
            e.target.style.backgroundColor = "red";
            e.target.style.color = "white";
            tt.style.backgroundColor ="green";
            tt.style.color = "white";
            tt.childNodes[1].setAttribute('class','fa fa-check');
        });
    }

    if (i==5) {
        b.setAttribute('disabled','disabled');
        b.style.opacity = 0.5;
    }

});



