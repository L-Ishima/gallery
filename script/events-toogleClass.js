document.addEventListener('DOMContentLoaded', function () {    
    document.querySelector('.events__js_btn').addEventListener('click', function() {
    //     document.querySelector('.events__hidden_item').classList.toggle('events__visible_item')
        document.querySelectorAll('.events__hidden_item').forEach(function(el) {
            el.classList.toggle('events__visible_item')
        }) 
    });
});

// document.querySelectorAll('.faq-item').forEach(function(el) {
    
//     el.addEventListener('click', function() {
      
//       el.querySelector('.faq-item-bg').classList.toggle('faq-active')
       
    
//     })