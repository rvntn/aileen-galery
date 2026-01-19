// Get the modal
var modal = document.querySelector("#myModal");
console.log(modal)

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.querySelectorAll('#gallery img');
for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
        modal.style.display = "block";
        modal.querySelector('#img01').src = imgs[i].src;
        modal.querySelector('#caption').innerHTML = imgs[i].alt;
        console.log(imgs[i] + 'clicked')
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key; // e.g., "Enter", "a", "Escape", "ArrowUp"

    console.log('keydown event\n\n' + 'key: ' + keyName);

    if (keyName === 'Escape') {
        modal.style.display = "none";
    }
});