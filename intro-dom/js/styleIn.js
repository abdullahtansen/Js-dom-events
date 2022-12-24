const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid gray';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '20px';
    section.style.padding = '20px';
    section.style.background = 'lightgray';
}
// const placesContainer = document.getElementById('places-container');
// placesContainer.style.background = 'lightblue';
const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');