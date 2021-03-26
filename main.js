// Get modal elements
var modal = document.getElementById('simpleModal');

//Get open modal button
var modalBtn = document.getElementById('modalBtn');

//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

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


document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('accordion__button--active');
    });
});

// jQuery to toggle tabs
$(document).ready(function() {
    $buttons = $("div > button");

    $buttons.click(function() {
        $buttons.not(this).parent().toggleClass("accordion-noactive");
        
    });

    $bankdetails = $(".bank-details");
    $bankdetails.click(function() {
        $(".no-form-tab-content").toggleClass("accordion-noactive");
    });
    
    $(".cancel").click(function() {
        $(".no-form-tab-content").toggleClass("accordion-noactive");
    });
    
});
