let serviceCardEles = ['#dev-card', '#sec-card', '#data-card']
let partnerEles = ['#partner-title', '#partner-subtitle', '#partner-imgs', '#partner-blurb']
let securityEles = ['#security-text', '#security-img']
let blogEles = ['#blog-text', '#blog-card-1', '#blog-card-2', '#blog-card-3']

let elements = [...partnerEles, ...serviceCardEles, ...securityEles, ...blogEles].map((id) => {
    return getElement(id);
});

createObserver();


function getElement (id) {
    return document.querySelector(id);
}

function createObserver() {
    let observer;

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.75
    }

    observer = new IntersectionObserver(handleIntersect, options);
    elements.forEach((element) =>{
        observer.observe(element);
    })
}

function handleIntersect(entires, observer)  {
    entires.forEach((entry) => {
       if(entry.isIntersecting) entry.target.classList.add('fade-in-soft')
    });
}