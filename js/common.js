const chooseDate = (element, page, point) => {
    model.inputs[page].date[point] = element.value;
}

const findCategory = id => {
    return model.categories.find(category => category.id == id);
}

const date = new Date();
const today = date.toISOString().split('T')[0];

date.setDate(date.getDate() + 1);
const tomorrow = date.toISOString().split('T')[0];

date.setDate(date.getDate() + 6);
const afterSevenDays = date.toISOString().split('T')[0];
