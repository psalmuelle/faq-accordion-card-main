"strict mode";
const arrow=document.querySelectorAll(".arrow");
const figCaption = document.querySelectorAll("figcaption");
const info = document.querySelectorAll(".info")
const faq = document.querySelectorAll(".faq")


const accordion = ev =>{
    ev.children[0].classList.toggle("open-bold")
    ev.children[0].classList.toggle("arrow-down");
    ev.children[3].classList.toggle("open");
}

const removeAccordion = ev =>{
 ev.classList.remove("open-bold")
   ev.lastChild.classList.remove("arrow-down");
   ev.nextElementSibling.classList.remove("open");
}

const siblings = n => [...n.parentElement.children].filter(c=>c.nodeType == 1 && c!=n)



/*
figCaption.forEach(e=> {

  e.addEventListener("click", ev=>{
faq.forEach(eachFaq =>{
 console.log(eachFaq.children[1].classList.contains("open"))
 console.log(eachFaq.children[1])

if (eachFaq.children[1].classList.contains("open") ){
   removeAccordion(e)
}else{
  accordion(ev.target)
   
    
}


})
  })
  


});*/


faq.forEach(eachFaq=>{
  if(eachFaq.children[1].classList.contains("open") >= 2){
  
  }
  eachFaq.addEventListener("click", (ev)=>{
ev.preventDefault()
accordion(ev.target)



  })
})


/*let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
    
    
    
    && ev.target.classList.contains("open-bold")
    */