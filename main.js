// Get modal elements
var modal = document.getElementById('easyswitch-simpleModal');

//Get open modal button
var modalBtn = document.getElementById('easyswitch-modalBtn');

//Get close button
var closeBtn = document.getElementsByClassName('easyswitch-closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click', openModal);

//Listen for close click
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', clickOutside);


//function to open modal
function openModal(){
    modal.style.display = 'block';
}

//function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//function to close modal if outside click
function clickOutside(e){
    if(e.target == modal) {
        //modal.style.display = 'none';
    }    
}


document.querySelectorAll('.easyswitch-accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('easyswitch-accordion__button--active');
    });
});

// jQuery to toggle tabs
$(document).ready(function() {
    $buttons = $("div > button");

    $buttons.click(function() {
        $buttons.not(this).parent().toggleClass("easyswitch-accordion-noactive");
        
    });

    $bankdetails = $(".easyswitch-bank-details");
    $bankdetails.click(function() {
        $(".easyswitch-no-form-tab-content").toggleClass("easyswitch-accordion-noactive");
    });
    
    $(".easyswitch-cancel").click(function() {
        $(".easyswitch-no-form-tab-content").toggleClass("easyswitch-accordion-noactive");
    });
    
});
