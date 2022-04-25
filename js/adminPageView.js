const updateAdminPageView = () => {
    let html = `
        ${showConfirmationModal()}
        <header class="">
            <div class=""><h1>ipak je registruje ${model.users[0].name}!</h1></div>
            <div class="" onclick="goToUserPage()"><img src="${'images/return.png'}"></div>
        </header>
        <h3 class="text-center">Lag Ny Annonse</h3>
          <form action="" class="form">
        <label class="form-title" for="ftitel" class="">Tittel:</label> <br />
        <input type="text" name="ftitel" value="${model.inputs.adminPage.title}" oninput="model.inputs.adminPage.title=this.value" placeholder="Enter Title..." />
        <br />
        <label for="fdescription" class="">Description:</label> <br />
        <textarea
          name="fdescription"
          id=""
          cols="30"
          rows="10"
          oninput="model.inputs.adminPage.description=this.value"
          placeholder="Enter Description..."
        >${model.inputs.adminPage.description}</textarea>
        <br />
        <label for="ftitel" class="">Image Link:</label> <br />
        <input
          type="text"
          name="fimage"
          value="${model.inputs.adminPage.image}"
          oninput="model.inputs.adminPage.image=this.value"
          placeholder="Enter Image Link..."
        />
        <br />
        <label for="categories">Velg En Kategori:</label> <br />
              ${categoryList()}
          <div class="flex flex-gap-20 mb-20">
              ${radioButtonsForPayment()}
          </div>
        
        
        <div class="flex form__time">
          <div>
            <label for="start-date">Start Date:</label>
            <br />
            <input type="date" name="start-date" onchange="chooseDate(this,'adminPage', 'start')" value="${model.inputs.adminPage.date.start}"/>
          </div>
          <div>
            <label for="end-date">End Date:</label>
            <br />
            <input type="date" name="End-date" onchange="chooseDate(this, 'adminPage', 'end')" value="${model.inputs.adminPage.date.end}"/>
          </div>
        </div>
        <div class="flex form__time">
          <div>
            <label for="start-time">Start Time:</label>
            <br />
            <input type="time" name="start-time" onchange="chooseTime(this, 'start')" value="${model.inputs.adminPage.time.start}"/>
          </div>
          <div>
            <label for="end-time">End Time:</label>
            <br />
            <input type="time" name="end-time" onchange="chooseTime(this, 'end')" value="${model.inputs.adminPage.time.end}"/>
          </div>
        </div>
        <br />
        
        <button type="button" onclick="createNewAd()" class="btn">Submit</button>
    </form>
    `;  
    document.getElementById('app').innerHTML = html;
}

const showConfirmationModal = () => {
  if (!model.inputs.adminPage.isConfirmationModalOn) return '';
  let html = `
    <div class="modal" onclick="confirmAd()">
      <div class="modal__confirmation-box flex flex-column">
        <div>Annonsen din har blitt opprettet</div>
        <div class="middle"><img src="images/check-mark.png" alt="check-mark" /></div>
      </div>
    </div>
  `
  return html;
}

const categoryList = () => {
    let html = `
         <select onchange="model.inputs.adminPage.category=this.value" name="categories">
         <option value="">--Velg option--</option>
    `
    for (category of model.categories) {
        html += `<option 
            value="${category.id}"
            ${category.id == model.inputs.adminPage.category ? 'selected' : ''}
            >
                ${category.name}
            </option>`;
    }
    html += '</select>'
    return html;
}

const radioButtonsForPayment = () => {
    let html = '';
    model.payment.forEach( paymentOption => {
        const payment = paymentOption.name
        html += `
            <div class="flex flex-column">
                <label for="${payment}-ad">${payment}</label>
                <input 
                  onclick="model.inputs.adminPage.payment=${paymentOption.id}"
                  type="radio" 
                  class="start"
                  id="${payment}-ad" 
                  ${paymentOption.id == model.inputs.adminPage.payment ? 'checked' : ''}
                  name="payment"
                  value="${payment}">
            </div>
        `
    })
    return html;
}