const customDefault = () => {
    const element = document.querySelector('.style-select');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
}

customDefault();

const customSelects = () => {
    const elements = document.querySelectorAll('.style-multiselect');
    elements.forEach(el => {
    const choices = new Choices(el, {
        searchEnabled: false, 
    })
    });
}

customSelects();