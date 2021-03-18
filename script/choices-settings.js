const customDefault = () => {
    const element = document.querySelector('.styles__select');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
}

customDefault();

const customSelects = () => {
    const elements = document.querySelectorAll('.styles__multiselect');
    elements.forEach(el => {
    const choices = new Choices(el, {
        searchEnabled: false, 
    })
    });
}

customSelects();

const customGallerySelect = () => {
    const element = document.querySelector('.filter-form__select');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
}

customGallerySelect();