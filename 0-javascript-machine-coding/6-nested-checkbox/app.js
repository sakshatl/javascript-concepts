const parentCheckboxElements = document.querySelectorAll('.parent-checkbox');
const childCheckboxElements = document.querySelectorAll('.child-checkbox');

Array.from(parentCheckboxElements).forEach((parentCheckbox) => {
  parentCheckbox.addEventListener('click', () => {
    if(parentCheckbox.checked) {
      Array.from(childCheckboxElements).forEach((childCheckbox) => {
        if(childCheckbox.getAttribute('data-parent') === parentCheckbox.getAttribute('id')) {
          childCheckbox.checked = true
        }
      })
    } else {
      Array.from(childCheckboxElements).forEach((childCheckbox) => {
        if(childCheckbox.getAttribute('data-parent') === parentCheckbox.getAttribute('id')) {
          childCheckbox.checked = false
        }
      })
    }
  })
});

Array.from(childCheckboxElements).forEach((childCheckbox) => {
  childCheckbox.addEventListener('click', () => {
    const parenCheckboxtId = childCheckbox.getAttribute('data-parent');
    const parentCheckbox = document.getElementById(parenCheckboxtId);
    const siblingCheckboxes = document.querySelectorAll(`[data-parent=${childCheckbox.getAttribute('data-parent')}]`);
    
    const isAllChecked = Array.from(siblingCheckboxes).every((checkbox) => checkbox.checked);

    if(isAllChecked) {
      // check the parent
      parentCheckbox.checked = true;
    }
  })
});