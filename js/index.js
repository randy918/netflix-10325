//>  ████████████████████████████████████  EVENT LISTENER

document.addEventListener('DOMContentLoaded', function() {


//_ ████████████████████████████████████  DIALOG SELECTORS

const openButton = document.querySelector('[data-open-modal]');
const closeButton = document.querySelector('[data-close-modal]');
const modal = document.querySelector('[data-modal]');
// dialog.showModal()

//_ ████████████████████████████████████  LISTENERS

if (openButton && closeButton && modal) {
    openButton.addEventListener('click', function() {
        modal.showModal();
    });

    closeButton.addEventListener('click', function() {
        modal.close();
    });
} else {
    console.error('Modal elements not found');
}
});