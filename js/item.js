let itemDark = document.querySelector('input[type="checkbox"]');

const itemBody = document.querySelector('body');
console.log(itemBody);

const butChekBoxItem = document.querySelector('#flexSwitchCheckDefault');

butChekBoxItem.addEventListener ('click', function () {
    let checked = itemDark.checked;
    if (checked === true) {
        itemBody.classList.add ('dark-item');
    } else {
        itemBody.classList.remove ('dark-item');
    }
    
})
