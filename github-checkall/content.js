const BUTTON_ID = 'checkAllButtonExtension';
const CHECKBOX_SELECTOR = 'label.js-reviewed-toggle';
const FILE_SELECTOR = '.file-header';

const checkBoxes = document.querySelectorAll(CHECKBOX_SELECTOR);
const checkAllButton = document.querySelector(`#${BUTTON_ID}`);

if (!checkAllButton && checkBoxes.length > 0) {
    const button = document.createElement('button');
    button.textContent = `Check all i18n files`;
    button.className = 'btn btn-sm btn-secondary';
    button.id = BUTTON_ID;

    const fileList = document.querySelectorAll(FILE_SELECTOR);

    button.addEventListener('click', () => {
        fileList.forEach((fileElement) => {
            if (!fileElement.querySelector('a[title^="static/i18n"]')) {
                return;
            }
            const checkbox = fileElement.querySelector(CHECKBOX_SELECTOR);
            const isChecked = checkbox.querySelector('input').checked;
            !isChecked && checkbox.click();
        });
    }, false);

    const reviewButton = document.querySelector('.js-reviews-container');
    reviewButton.appendChild(button);
}