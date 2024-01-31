const list = document.querySelector("ul");
const buttonShowAll = document.querySelector('.show-all')
const buttonRemove10Percent = document.querySelector('.remove-percent')
const buttonTotalValue = document.querySelector('.calculate-total-value')
const select = document.getElementById('system-select')

function formatCurrency(currency) {
  return currency.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

function showAll(productsArray) {
  let myLi = ''
  myLi = ''

  productsArray.forEach((item) => {
    myLi += `
      <li>
        <img src=${item.src} />
        <p>${item.name}</p>
        <p class="item-price">${formatCurrency(item.price)}</p>
      </li> 
    `;
  });
  list.innerHTML = myLi
}

function remove10Percent() {
  const newPrices = products.map((item) => ({
    ...item,
    price: item.price * 0.9
  }))
  showAll(newPrices)
}

function calculateTotalValue() {
  const totalValue = products.reduce((acc, item) => { return acc + item.price }, 0)

  list.innerHTML = `
    <li class="total-value">
      <p>A soma de todos os itens do menu é: ${formatCurrency(totalValue)}</p>
    </li>
  `
}

function filterType() {
  if (select.value === 'ios') {
    const filterBurger = products.filter((item) => item.system === 'IOS')
    showAll(filterBurger)
  } else if (select.value === 'android') {
    const filterBurger = products.filter((item) => item.system === 'Android')
    showAll(filterBurger)
  }

}

buttonShowAll.addEventListener('click', () => showAll(products))
buttonRemove10Percent.addEventListener('click', remove10Percent)
buttonTotalValue.addEventListener('click', calculateTotalValue)
select.addEventListener('change', filterType)