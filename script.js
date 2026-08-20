const products=[
{name:"Масляный фильтр Bosch",price:185,icon:"🧰",art:"F-1001"},
{name:"Тормозные колодки Brembo",price:920,icon:"🛑",art:"B-2045"},
{name:"Воздушный фильтр Mann",price:340,icon:"⚙️",art:"A-3810"},
{name:"Свечи зажигания NGK",price:480,icon:"🔩",art:"NGK-774"},
{name:"Амортизатор передний",price:1450,icon:"🔧",art:"S-1102"},
{name:"Моторное масло 5W-30",price:690,icon:"🛢️",art:"OIL-530"},
{name:"Аккумулятор 60 Ah",price:2650,icon:"🔋",art:"BAT-060"},
{name:"LED лампы H7",price:550,icon:"💡",art:"LED-H7"}];
let cart=0;
function render(list=products){grid.innerHTML=list.map(p=>`<article class="card"><div class="photo">${p.icon}</div><p class="muted">Артикул: ${p.art}</p><h3>${p.name}</h3><div class="price">${p.price} MDL</div><p class="muted">В наличии</p><button class="buy" onclick="addCart()">В корзину</button></article>`).join('');result.textContent=`${list.length} товаров`}
function addCart(){cart++;cartCount.textContent=cart}
function searchProducts(){let q=search.value.toLowerCase();render(products.filter(p=>(p.name+p.art).toLowerCase().includes(q)))}
function toggleCatalog(){catalog.classList.toggle('open')}
search.addEventListener('keydown',e=>{if(e.key==='Enter')searchProducts()});render();
