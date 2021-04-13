const customGallerySelect = () => {
    const element = document.querySelector('.filter-form__select');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
}

customGallerySelect();