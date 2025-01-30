let activeTabId = 'goods';

const initialTab = getActiveTab();
initialTab.classList.add('active')

renderTabContentById(activeTabId)

const goodsInCart = [];

const tabWithCounter = document.querySelector('button[data-goods-count]')

const tabs = document.querySelectorAll('button.tab')

for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i]
    tab.addEventListener('click', clickHandler)
}

const addInCartButtons = document.querySelectorAll('button[data-add-in-cart="true"]')

for (let i = 0; i < addInCartButtons.length; i++) {
    const button = addInCartButtons[i]
    button.addEventListener('click', addInCartHandler)
}

function clickHandler(event) {
    const active = getActiveTab();

    active.classList.toggle('active')
    event.target.classList.toggle('active')

    activeTabId = event.target.dataset.tabId;

    removeActiveTabContent()
    renderTabContentById(activeTabId)
}

function addInCartHandler() {
    const product = createProduct()
    goodsInCart.push(product)
    tabWithCounter.dataset.goodsCount = goodsInCart.length
    console.log(goodsInCart)
}

function createProduct(){
    return {
        name: "Череп гоблина",
        price: 150
    }
}

function getActiveTab() {
    return document.querySelector(`button[data-tab-id="${activeTabId}"]`);
}

function renderTabContentById(tabId) {
    const tabsContainer = document.querySelector('.tabs')
    let html = ''
    if (tabId === 'goods') {
        html = renderGoods()
    }
    else if (tabId === 'cart') {
        html = renderCart()
    }
    tabsContainer.insertAdjacentHTML('afterend', html)
}

function removeActiveTabContent() {
    const activeContent = document.querySelector(`[data-active-tab-content="true"]`)
    activeContent.remove()
}

function renderGoods() {
    return `
        <div data-active-tab-content="true" class="product-items">
            <div class="product-item">
                <img src="index.png" alt="">
                <div class="product-list">
                    <h4>Череп гоблина</h4>
                    <p class="price">150$</p>
                    <button data-add-in-cart="true" class="button">Купить</button>
                </div>
            </div>
            <div class="product-item">
                <img src="index.png" alt="">
                <div class="product-list">
                    <h4>Цветок хранителя леса</h4>
                    <p class="price">50$</p>
                    <button data-add-in-cart="true" class="button">Купить</button>
                </div>
            </div>
            <div class="product-item">
                <img src="index.png" alt="">
                <div class="product-list">
                    <h4>Глаз монстра</h4>
                    <p class="price">100$</p>
                    <button data-add-in-cart="true" class="button">Купить</button>
                </div>
            </div>
        </div>
    `
}

function renderCart() {
    return `
        <div data-active-tab-content="true" class="cart-items">
            <div class="cart-item">
                <div class="cart-item-title">Череп гоблина</div>
                <div class="cart-item-count">5 шт.</div>
                <div class="cart-item-price">750$</div>
            </div>
        </div>
    `
}