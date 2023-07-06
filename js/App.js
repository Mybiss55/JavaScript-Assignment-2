//Put all photos in an array
let lrgPhotos = ['images\\flowers-pink-large.jpg', 'images\\flowers-purple-large.jpg', 'images\\flowers-red-large.jpg', 'images\\flowers-white-large.jpg', 'images\\flowers-yellow-large.jpg'];
let smlPhotos = ['images\\flowers-pink-small.jpg', 'images\\flowers-purple-small.jpg', 'images\\flowers-red-small.jpg', 'images\\flowers-white-small.jpg', 'images\\flowers-yellow-small.jpg'];
//Variable to track which photo is focused
let focusedPhoto = lrgPhotos[0];
//Create function that will put photos in proper locations in html
function defaultImages(){
    document.getElementById('focused-img').src = focusedPhoto;
for(let i = 0; i < smlPhotos.length; i++){
    document.getElementById('sml-img' + i).src = smlPhotos[i];
}
}
defaultImages();
//Change photo focused when clicked on.

document.addEventListener('click', function(event){
    //Whatever is clicked on, change focused photo to that
    let img = event.target;
    for(let i = 0; i < smlPhotos.length; i++){
        if(img.id === 'sml-img' + i){
            focusedPhoto = lrgPhotos[i];
        }
    }
    document.getElementById('focused-img').src = focusedPhoto;
    console.log(focusedPhoto);
});
