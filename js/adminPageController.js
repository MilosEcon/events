const goToUserPage = () => {
  model.app.currentPage = 'user';
  updateView();
}

const chooseTime = (element, point) => {
  model.inputs.adminPage.time[point] = element.value;
}

const createNewAd = () => {
  const adminInputs = model.inputs.adminPage;
  const ad = {};
  ad.id = createUnikID();
  ad.image = adminInputs.image;
  ad.title = adminInputs.title;
  ad.description = adminInputs.description;
  ad.category = {
    id: adminInputs.category,
    icon: getCategoryIcon(adminInputs.category)
  }
  ad.date = {
    start: adminInputs.date.start,
    end: adminInputs.date.end
  }
  ad.time = {
    start: adminInputs.time.start,
    end: adminInputs.time.end
  }
  ad.payment = adminInputs.payment;
  ad.link = adminInputs.link

  model.ads.push(ad);

  openConfirmationModal();
}

const createUnikID = () => {
  let id = 0;
  for (ad of model.ads) {
    if (ad.id > id) id = ad.id;
  }
  return id + 1;
}

const getCategoryIcon = (id) => {
  const category = findCategory(id);
  return category.icon;
}

const openConfirmationModal = () => {
  model.inputs.adminPage.isConfirmationModalOn = true;
  updateView();
}

const confirmAd = () => {
  resetForm();
  model.inputs.adminPage.isConfirmationModalOn = false;
  model.app.currentPage = 'user';
  updateView();
}

const resetForm = () => {
  const inputs = model.inputs.adminPage;
  inputs.title = '';
  inputs.description = '';
  inputs.image = '';
  inputs.category = null;
  inputs.payment = null;
  inputs.date.start = '';
  inputs.date.end = '';
  inputs.time.start = '';
  inputs.time.end = '';
  inputs.link = '';
  inputs.isConfirmationModalOn = false;
}