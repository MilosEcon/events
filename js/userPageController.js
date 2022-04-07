const goToAdminPage = () => {
  model.app.currentPage = 'admin';
  updateView();
}

const closeModal = () => {
  model.inputs.userPage.modal = null;
  updateView();
}

const openModal = (id) => {
  model.inputs.userPage.modal = id;
  updateView();
}

const filterDate = (element, startDate, endDate) => {

  if (model.inputs.userPage.filterDate == element.dataset.point) {
    model.inputs.userPage.filterDate = false;
  } else {
    model.inputs.userPage.filterDate = element.dataset.point;
    model.inputs.userPage.date.start = startDate;
    model.inputs.userPage.date.end = endDate;
  }
  
  updateView();
}

const turnOffDateFilter = () => {
  if (!model.inputs.userPage.filterDate) return;
  model.inputs.userPage.filterDate = false;
  updateView();
}

const toggleCategoryDropdown = () => {
  model.inputs.userPage.isCategoryDropdownOpen = 
  !model.inputs.userPage.isCategoryDropdownOpen
  updateView();
};

const selectAllOrNone = () => { 
  const isSelectAll =  !model.inputs.userPage.isSelectAll;
  model.inputs.userPage.isSelectAll = isSelectAll;
  
  model.categories.forEach(category => {
    category.isSelected = isSelectAll;
    category.isChecked = false;
  })
  
  updateView();
}

const selectCategory = (id) => {
  const category = findCategory(id);

  if (model.inputs.userPage.isSelectAll) {
    model.inputs.userPage.isSelectAll = false;
    model.categories.forEach( category => {
      category.isSelected = false;
    })
  }

  const isChecked = !category.isChecked;
  category.isChecked = isChecked;
  category.isSelected = isChecked;
  
  updateView();
}