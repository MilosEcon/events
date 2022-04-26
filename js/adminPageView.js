const updateAdminPageView = () => {
    document.body.classList.remove('bg-primary');
    let html = `
        ${showConfirmationModal()}
        <header class="text-tertiary">
            <div class="container">
                <nav class="navbar">
                <div>
                    <div class="navbar__logo row align-items-center">
                      <div class="logo-pilar logo-pilar--admin"></div>
                      <div class="logo-circel logo-circel--admin"></div>
                      <div class="logo-pilar logo-pilar--admin"></div>
                    </div>
                  </div>
                  <div>
                    <div class="navbar__title">Hemsedsal</div>
                  </div>
                  <div class="row justify-flex-end">
                    <div class="add-btn add-btn--admin" onclick="goToUserPage()">
                      
                      <div>
                        <button class="text-tertiary ">Tilbake</button>
                      </div>
                    </div>
                  </div>
                </nav>                
            </div>
        </header>

        <div class="container">
        <h2 class="row justify-center text-tertiary">Lag Ny Annonse</h2>
        <form action="" class="form">
            <label class="form-title" for="ftitel" class="">Tittel:</label> <br />
            <input type="text" name="ftitel" value="${model.inputs.adminPage.title}"
                oninput="model.inputs.adminPage.title=this.value" placeholder="Skriv Inn Tittel..." />
            <br />
            <label for="fdescription" class="">Beskrivelse:</label> <br />
            <textarea name="fdescription" id="" cols="30" rows="10" oninput="model.inputs.adminPage.description=this.value"
                placeholder="Skriv Inn Beskrivelse...">${model.inputs.adminPage.description}</textarea>
            <br />
            <label for="ftitel" class="">Bildelink:</label> <br />
            <input type="text" name="fimage" value="${model.inputs.adminPage.image}"
                oninput="model.inputs.adminPage.image=this.value" placeholder="Skriv Inn Bildelink..." />
            <br />
            <label for="categories">Velg En Kategori:</label> <br />
            ${categoryList()}
            <div class="row gap-1 mb-2">
                ${radioButtonsForPayment()}
            </div>
        
        
            <div class="row gap-1">
                <div class="mb-3">
                    <label for="start-date">Start Date:</label>
                    <br />
                    <input type="date" name="start-date" onchange="chooseDate(this,'adminPage', 'start')"
                        value="${model.inputs.adminPage.date.start}" />
                </div>
                <div class="mb-3">
                    <label for="end-date">End Date:</label>
                    <br />
                    <input type="date" name="End-date" onchange="chooseDate(this, 'adminPage', 'end')"
                        value="${model.inputs.adminPage.date.end}" />
                </div>
            </div>
            <div class="row gap-1">
                <div class="mb-3">
                    <label for="start-time">Start Time:</label>
                    <br />
                    <input type="time" name="start-time" onchange="chooseTime(this, 'start')"
                        value="${model.inputs.adminPage.time.start}" />
                </div>
                <div class="mb-3">
                    <label for="end-time">End Time:</label>
                    <br />
                    <input type="time" name="end-time" onchange="chooseTime(this, 'end')"
                        value="${model.inputs.adminPage.time.end}" />
                </div>
            </div>
            <br />
        
            <button type="button" onclick="createNewAd()" class="btn-outlined-tertiary ">Submit</button>
        </form>
    </div>
    `;  
    document.getElementById('app').innerHTML = html;
}

const showConfirmationModal = () => {
  if (!model.inputs.adminPage.isConfirmationModalOn) return '';
  let html = `
    <div class="modal text-tertiary" onclick="confirmAd()">
      <div class="modal__confirmation-box">
        <div>Annonsen din har blitt opprettet</div>
        <div class="row justify-center"><img src="images/check-mark.svg" alt="check-mark" /></div>
      </div>
    </div>
  `
  return html;
}

const categoryList = () => {
    let html = `
         <select class="text-tertiary" onchange="model.inputs.adminPage.category=this.value" name="categories">
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
            <div>
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