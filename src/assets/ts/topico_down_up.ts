
function script(doc: Document){
  "use strict";

  let items = doc.querySelectorAll('.topico-down-up');

  items.forEach(item => {
    item.addEventListener('click',function(e){
      const body = item.parentElement?.parentElement?.querySelector('.topico-body');
      if(body){
        body.classList.toggle('d-none');
      }
    });
  });

};
