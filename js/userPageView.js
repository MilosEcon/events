const updateUserPageView = () => {
    
    const startDate = model.inputs.userPage.date.start;
    const endDate = model.inputs.userPage.date.end;
    
    let html = /*html*/`
        ${showModal()}


        <header class="header text-white">
            <div class="container">
                <nav class="navbar">
                  <div>
                      <img class="logo" src="images/logo.png" alt="logo" />
                  </div>
                  <div class="site-title">Hemsedsal</div>
                  <div class="add-btn" onclick="goToAdminPage()">
                    <div class="plus-sign"></div>
                    <div>
                      <button class="text-white">Ny Annonse</button>
                    </div>
                  </div>
                </nav>
                <div class="header__text">
                    <span>Your perfect</span><br />
                    <span>Adventure</span><span class="text-logo">.</span>
                </div>
            </div>
        </header>
        <section class="container row justify-center"> 
      <div class="filter-bar">
        <div class="filter-bar__date-wrapper">
            <div class="filter-bar__calendars">
              <div class="filter-bar__calendar">
                <div > 
                  <span class="text-tertiary">Fra</span><br>
                  <input type="date" min="${startDate}" value="${startDate}" onchange="chooseDate(this,'userPage', 'start')" onfocusout="turnOffDateFilter()"/>
                </div>
              </div>
              <div class="filter-bar__calendar">
                <div>
                  <span class="text-tertiary">Til</span><br>
                  <input type="date" min="${startDate}" value="${endDate}" onchange="chooseDate(this, 'userPage', 'end')" onfocusout="turnOffDateFilter()"/>
                </div>
              </div>
              <div class="filter-bar__search-icon" onclick="updateView();">
                <img  src="images/search.svg" />
              </div> 
            </div>
            <div class="filter-bar__days">
                <button 
                  class=" btn-outlined-tertiary mr-1 ${model.inputs.userPage.filterDate === 'today' ? 'active' : ''}" data-point="today" 
                  onclick="filterDate(this, today, today)">
                  I Dag
                </button>
                <button 
                  class="btn-outlined-tertiary mr-1 ${model.inputs.userPage.filterDate === 'tomorrow' ? 'active' : ''}" data-point="tomorrow" 
                  onclick="filterDate(this, tomorrow, tomorrow)">
                  I Morgen
                </button>
                <button 
                  class="btn-outlined-tertiary mr-1 ${model.inputs.userPage.filterDate === '7days' ? 'active' : ''}" data-point="7days" 
                  onclick="filterDate(this, today, afterSevenDays)">
                  7 Dager
                </button>
            </div>
        </div>
        ${showCategories()}
      </div>
    </section>
    
    
    <section class="container">
        <div>
            ${showDateBookmarks(startDate, endDate)}
        </div>
    </section>
    `
    document.getElementById('app').innerHTML = html;
}

const showModal = () => {
    const modal = model.inputs.userPage.modal;
    if (modal === null) return '';
    const ad = model.ads.find(ad => ad.id === modal);
    let html = /*html*/`
    <div class="modal text-tertiary" onclick="closeModal()">
      <div class="container">
        <div class="row modal__card">
          <span class="modal__close">&times</span>
          <div class="modal__img-wrapper">
            <img class="modal__img" src="${ad.image}">
            <div class="modal__icon">
              <img src="images/${ad.category.icon}" alt="">
            </div>
          </div>
          <div class="modal__body">
            <h3>${ad.title}</h3>
            <p class="modal__desc">${ad.description}</p>
            <div class="modal__header">
              <div class="row">
                <div class="mr-1">
                    <img style="width: 20px;" src="images/calendar.svg" alt="" />
                </div>
                <div class="mr-1">${formatDate(ad.date.start)} - ${formatDate(ad.date.end)}</div>
              </div>
              <div class="row justify-space-between">
                <div class="row align-items-center">
                  <span class="card__time-icon"><img src="images/time.svg" alt="time"></span>
                  <span>${ad.time.start} - ${ad.time.end}</span>
                </div>
                <button class="btn-outlined-tertiary">Til Nettsiden</button>
              </div>   
            </div>
          </div>
        </div>
      </div>
    </div>


    `
    return html;
}

const showCategories = () => {
    
    const isOpen = model.inputs.userPage.isCategoryDropdownOpen;
    const isSelectAll = model.inputs.userPage.isSelectAll;
   
    let html = `
    <div class="dropdown__wrapper">
          <div 
            class="dropdown" 
            onclick="toggleCategoryDropdown()">
            <div>Kategorier</div>
            <div>
              <i class="arrow ${isOpen ? 'up' : 'down'}">
              </i>
            </div>
          </div>
          <div class="pos-relative">
            <div class=" dropdown__menu ${isOpen ? 'open' : ''}">
              <div 
                class="dropdown__item ${isSelectAll ? 'active' : ''}"             
                onclick="selectAllOrNone()">
                <input 
                  type="checkbox" 
                  ${isSelectAll ? 'checked="checked"' : ''} 
                  name="select-all">
                <label  for="select-all">Velg Alle</label>
              </div>
    `;
    for (category of model.categories) {
        
        const name = category.name;
        const isChecked = category.isChecked;
        
        html += `
        <div 
                class="dropdown__item 
                ${isChecked ? 'active' : ''}"
                onclick="selectCategory(${category.id})">
                <input 
                  type="checkbox" 
                  ${isChecked ? 'checked="checked"' : ''}  
                  name="${name}">
                <label for="${name}">${name}</label>
              </div>
        `
    }
    html += `</div></div></div>`

    return html;
}

const showDateBookmarks = (startDate, endDate) => {
    
    let html = '';
    const daysDifference = dateDifferenceInDays(startDate, endDate);
    const filtredAds = model.ads.filter(ad => {
        return findCategory(ad.category.id).isSelected;
    })    

    for (let i = 0; i <= daysDifference; i++) {
        
        const date = addDays(startDate, i);
        const ads = showAds(date, filtredAds);
        
        if(!ads) continue;
        
        html += `
            <div class="date-bookmark text-tertiary border-bottom-1 border-tertiary">${formatDate(reduceIsoDateString(date))}</div>
            <div class="row gap-1 mt-4 text-tertiary">
                ${ads}
            </div>

        `
    }
    return html;
}

const showAds = (date, filtredAds) => {
    
    let htmlArray = [];
    date = date.toISOString().split('T')[0];
    dateNumber = convertingDateToNumber(date);
     
    for (ad of filtredAds) {
        const startDateNumber = convertingDateToNumber(ad.date.start);
        const endDateNumber = convertingDateToNumber(ad.date.end);
        
        if (startDateNumber <= dateNumber && dateNumber <= endDateNumber) {
            const isAd = ad.payment > 1;
            const html = /*html*/`
                <div class="col-3-xl col-4-md col-6-sm col-12-xs">
                    <div class="card ${isAd ? 'advertisement' : ''}">
                        <div class="card__header">
                            <div class="card__icon ">
                                <img src="images/${ad.category.icon}" alt="">
                            </div>
                            <div class="card__icon card__icon--ad">
                                <img src="images/megaphone.svg" alt="">
                            </div>
                            <img class="card__img" src="${ad.image}" alt="">
                        </div>
                        <div class="card__title">${ad.title}</div>
                        <div class="card__calendar">
                            <div class="mr-1">
                                <img style="width: 20px;" src="images/calendar.svg" alt="" />
                            </div>
                            <div class="mr-1">${formatDate(date)}</div>
                        </div>
                        <div class="footer row justify-space-between align-items-center">
                            <div class="row align-items-center">
                                <span class="card__time-icon"><img src="images/time.svg" alt="time"></span>
                                <span>${ad.time.start} - ${ad.time.end}</span>
                            </div>
                            <button onclick="openModal(${ad.id})" class="btn-outlined-tertiary">Les Mer</button>
                        </div>
                    </div>
                </div>

            `
            if (isAd) {
                htmlArray.unshift(html);
            } else {
                htmlArray.push(html);
            }
        };

    }
    return htmlArray.join('');
}

const dateDifferenceInDays = (startDate, endDate) => {
    const dateStart = new Date(startDate);
    const dateEnd = new Date(endDate);
    const diffTime = Math.abs(dateStart - dateEnd);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// we take e.g. 2022-03-15 and corvert it to 20220315
const convertingDateToNumber = date => {
    return parseInt(date.split('-').join(''));
}

// (eksampel: from 2022-03-11T08:59:11.737Z to 2022-03-11)
const reduceIsoDateString = isoDate => {
    return isoDate.toISOString().split('T')[0];
}

// change date format from yyyy-mm-dd to dd.mm.yyyy (eksampel: from 2022-03-11 to 11.03.2022)
const formatDate = date => {
    let [year, month, day] = date.split('-');
    return `${day}.${month}.${year}`;
}

const addDays = (originalDate, days) => {
    cloneDate = new Date(originalDate);
    cloneDate.setDate(cloneDate.getDate() + days);
    return cloneDate;
  }                     