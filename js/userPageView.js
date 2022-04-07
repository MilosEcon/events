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
                    <div class="site-title">${model.places[0].name}</div>
                    <div>
                        <button class="text-white" onclick="goToAdminPage()">Ny Annonse</button>
                    </div>
                </nav>
                <div class="font-jumbo text-white">
                    <span>Your perfect</span><br />
                    <span>Adventure</span><span class="bg-logo circle-xs"></span>
                </div>
            </div>
        </header>
        <section class="flex flex-column"> <!-- date-category-filter -->
            <div class="flex between"><!--space between-->
                <div class="flex"> 
                    <div class="date"> 
                        <span class="date__text">Fra</span>
                        <input type="date" min="${startDate}" value="${startDate}" onchange="chooseDate(this,'userPage', 'start')" onfocusout="turnOffDateFilter()"/>
                    </div>
                    <div class="date">
                        <span class="date__text">Til</span>
                        <input type="date" min="${startDate}" value="${endDate}" onchange="chooseDate(this, 'userPage', 'end')" onfocusout="turnOffDateFilter()"/>
                    </div>

                    <img class="search" src="images/search.svg" onclick="updateView(); console.log('pretraga')"/>
                </div>
                <div class="flex middle filter-date-btns">
                    <span class="filter-btn ${model.inputs.userPage.filterDate === 'today' ? 'active' : ''}" data-point="today" onclick="filterDate(this, today, today)">I Dag</span>
                    <span class="filter-btn ${model.inputs.userPage.filterDate === 'tomorrow' ? 'active' : ''}" data-point="tomorrow" onclick="filterDate(this, tomorrow, tomorrow)">I Morgen</span>
                    <span class="filter-btn ${model.inputs.userPage.filterDate === '7days' ? 'active' : ''}" data-point="7days" onclick="filterDate(this, today, afterSevenDays)">7 Dager</span>
                </div>
            </div>
            ${showCategories()}
        </section>
    <div class="container">
        <div class="flex flex-column" >
            ${showDateBookmarks(startDate, endDate)}
        </div>
    </div>
    `
    document.getElementById('app').innerHTML = html;
}

const showModal = () => {
    const modal = model.inputs.userPage.modal;
    if (modal === null) return '';
    const ad = model.ads.find(ad => ad.id === modal);
    let html = /*html*/`
    <div class="modal" onclick="closeModal()">
    <div class="modal__card">
        <span class="close-btn">&times</span>
        <div><img class="modal__img" src="${ad.image}"></div>
      
      
      <div class="modal__desc">
        <h3>${ad.title}</h3>
        <p>${ad.description}</p>
        <div class="flex between">
          <div class="flex flex-column middle">
            <div class="mr-10">Fra ${ad.date.start} Kl. ${ad.time.start}</div>
            <div>Til ${ad.date.end} Kl. ${ad.time.end}</div>
          </div>
          <div class="flex middle"> 
            <div class="mr-5 middle"><img src="images/${ad.category.icon}" alt=""></div>
            <button class="btn" >Netsiden</button>                
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
    <div class="dropdown">
        <div class="dropdown__button" onclick="toggleCategoryDropdown()">
            <div>Categories</div>
            <div><i class="arrow ${isOpen ? 'up' : 'down'}"></i></div>
        </div>
    
        <div class="dropdown__menu ${isOpen ? 'open' : ''}">
            <div 
                class="dropdown__item ${isSelectAll ? 'active' : ''}"             
                onclick="selectAllOrNone()">
                <input 
                    type="checkbox" 
                    ${isSelectAll ? 'checked="checked"' : ''} 
                    name="select-all">
                <label  for="select-all">Select All</label>
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
                name="${name}" >
            <label for="${name}">${name}</label>
        </div>
        `
    }
    html += `</div></div>`

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
            <div class="flex flex-column mb-50">
                <div class="date-bookmark">${formatDate(date)}</div>
                <div class="flex wrap">
                    ${ads} 
                </div> 
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
                <div class="card__wrapper">
                    <div class="card ${isAd ? 'advertisement' : ''}">
                        <img class="card__ad-icon" src="images/megaphone.png" alt="" />
                        <div><img class="card__img" src="${ad.image}">
                        </div>
                        <div class="card__desc">
                            <h3>${ad.title}</h3>
                            <div class="flex between">
                                <div class="flex middle">
                                    <div class="mr-10">Fra Kl. ${ad.time.start}</div>
                                    <div>Til Kl. ${ad.time.end}</div>
                                </div>
                                <div class="flex middle"> 
                                    <div class="mr-5 middle"><img src="images/${ad.category.icon}" alt=""></div>
                                    <button class="btn" onclick="openModal(${ad.id})" >Les Mer</button>                
                                </div>
                            </div>    
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

// change date format from ISO standard to dd mm yyyy (eksampel: from 2022-03-11T08:59:11.737Z to 11.03.2022)
const formatDate = date => {
    console.log(date.toISOString())
    let [year, month, day] = date.toISOString().split('T')[0].split('-');
    return `${day}.${month}.${year}`;
}

const addDays = (originalDate, days) => {
    cloneDate = new Date(originalDate);
    cloneDate.setDate(cloneDate.getDate() + days);
    return cloneDate;
  }                     