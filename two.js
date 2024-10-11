
document.getElementById('submitButton').addEventListener('click', function() {
    const currentLocation = document.getElementById('currentLocation').value;
    const destination = document.getElementById('destination').value;

    if (currentLocation && destination) {
        document.getElementById('message').innerText = `لقد اخترت الذهاب من ${currentLocation} إلى ${destination} `;
    } else {
        document.getElementById('message').innerText = ' يرجى ملء جميع الحقول من فضلك';
    }
});











































































































// <!-- <!DOCTYPE html>
// <html lang="ar">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>إدارة المنتجات</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             margin: 0;
//             padding: 20px;
//             background-color: #f4f4f4;
//         }
//         .container {
//             max-width: 800px;
//             margin: 0 auto;
//             background: #fff;
//             padding: 20px;
//             border-radius: 8px;
//             box-shadow: 0 0 10px rgba(0,0,0,0.1);
//         }
//         h1 {
//             text-align: center;
//         }
//         .form-group {
//             margin-bottom: 15px;
//         }
//         .form-group label {
//             display: block;
//             margin-bottom: 5px;
//         }
//         .form-group input {
//             width: 100%;
//             padding: 8px;
//             box-sizing: border-box;
//         }
//         .form-group button {
//             background-color: #28a745;
//             color: white;
//             border: none;
//             padding: 10px;
//             cursor: pointer;
//             border-radius: 5px;
//             font-size: 16px;
//         }
//         .form-group button:hover {
//             background-color: #218838;
//         }
//         .results {
//             margin-top: 20px;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <h1>إدارة المنتجات</h1>
//         <div class="form-group">
//             <label for="productName">اسم المنتج:</label>
//             <input type="text" id="productName" placeholder="أدخل اسم المنتج">
//         </div>
//         <div class="form-group">
//             <label for="factoryPrice">سعر الشراء من المصنع:</label>
//             <input type="number" id="factoryPrice" placeholder="أدخل سعر الشراء" step="0.01">
//         </div>
//         <div class="form-group">
//             <button onclick="calculatePrice()">احسب السعر النهائي</button>
//         </div>
//         <div class="results" id="results">
//               النتائج ستظهر هنا 
//         </div>
//     </div>

//     <script>
//         function calculatePrice() {
//             const factoryPrice = parseFloat(document.getElementById('factoryPrice').value);
//             const profitMargin = 0.08; // 8%
//             const workerShare = 0.04; // 4%
//             const youShare = 0.03; // 3%
//             const rentShare = 0.01; // 1%
        
//             if (isNaN(factoryPrice) || factoryPrice <= 0) {
//                 alert('يرجى إدخال سعر شراء صالح');
//                 return;
//             }
        
//             const sellingPrice = factoryPrice * (1 + profitMargin);
//             const workerEarnings = factoryPrice * workerShare;
//             const yourEarnings = factoryPrice * youShare;
//             const rent = factoryPrice * rentShare;
        
//             const results = `
//                 <h2>نتائج الحساب:</h2>
//                 <p>سعر البيع النهائي: <strong>${sellingPrice.toFixed(2)} جنيه</strong></p>
//                 <p>حصة العاملين: <strong>${workerEarnings.toFixed(2)} جنيه</strong></p>
//                 <p>حصة لك: <strong>${yourEarnings.toFixed(2)} جنيه</strong></p>
//                 <p>إيجار المحل: <strong>${rent.toFixed(2)} جنيه</strong></p>
//             `;
        
//             document.getElementById('results').innerHTML = results;
//         }
//     </script>
// </body>
// </html>  -->

// <!-- <!DOCTYPE html>
// <html lang="ar">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>قائمة الطلبات - العميل</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             margin: 0;
//             padding: 0;
//             background-color: #f4f4f4;
//         }
//         .container {
//             width: 80%;
//             margin: 0 auto;
//             padding: 20px;
//             background: #fff;
//             border-radius: 8px;
//             box-shadow: 0 0 10px rgba(0,0,0,0.1);
//         }
//         .form-group {
//             margin-bottom: 15px;
//         }
//         .form-group label {
//             display: block;
//             margin-bottom: 5px;
//         }
//         .form-group select, .form-group button {
//             width: 100%;
//             padding: 8px;
//             box-sizing: border-box;
//         }
//         .form-group button {
//             background-color: #28a745;
//             color: white;
//             border: none;
//             cursor: pointer;
//             border-radius: 5px;
//             font-size: 16px;
//         }
//         .form-group button:hover {
//             background-color: #218838;
//         }
//         .result {
//             margin-top: 20px;
//             font-size: 18px;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <h1>اختيار المنتجات</h1>
//         <div class="form-group">
//             <label for="productSelect">اختر منتج:</label>
//             <select id="productSelect" multiple="">
//               <optgroup lable="مشروبات ساخنه"> 
//                 <option value="1" data-price="10.00">    شاي اخضر  </option>
//                 <option value="2" data-price="8.00">    شاي اسود</option>
//                 <option value="3" data-price="10.00">      ينسون </option>
//                 <option value="4" data-price="12.00">      حلبه </option>
//                 <option value="5" data-price="9.00">      كركديه </option>
//                 <option value="6" data-price="12.00">      جنزبيل </option>
//                 <option value="7" data-price="15.00">      قرفه </option>
//               </optgroup>
//                 <optgroup lable=" عصائر">
//                   <option value="8" data-price="20.00">      عصير مانجا </option>
//                   <option value="9" data-price="18.00">      عصير فرواله </option>
//                   <option value="10" data-price="14.00">      عصير ليمون بنعناع </option>
//                   <option value="11" data-price="12.00">     عناب </option>
//                   <option value="17" data-price="15.00">      ايس كوفي </option>
//               </optgroup>
//                 <optgroup lable=" انواع القهوه">
//                   <option value="12" data-price="9.00">    قهوه ساده  </option>
//                   <option value="13" data-price="10.00">     قهوه مانو </option>
//                   <option value="14" data-price="11.00">      قههوه سيراوسي </option>
//                   <option value="15" data-price="15.00">      قهوه بندق </option>
//                   <option value="16" data-price="19.00">      قهوه شوكلاته </option> 
//                 </optgroup>
//             </select>
//         </div>
//         <div class="form-group">
//             <button onclick="showPrice()">عرض السعر</button>
//         </div>
//         <div class="result" id="result">
//             <!- -السعر سيظهر هنا -->
//         <!-- </div>
//     </div>

//     <script>
//         function showPrice() {
//             const select = document.getElementById('productSelect');
//             const selectedOption = select.options[select.selectedIndex];
//             const price = selectedOption.getAttribute('data-price');
//             const productName = selectedOption.text;

//             // عرض السعر للعميل
//             document.getElementById('result').innerText = سعر ${productName} هو ${price} جنيه;

//             // إرسال البيانات إلى واجهة المدير
//             sendToManager(productName, price);
//         }

//         function sendToManager(productName, price) {
//             fetch('http://localhost:3000/notify-manager', { // رابط واجهة المدير
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ productName, price })
//             }).then(response => response.json())
//               .then(data => console.log('تم إرسال البيانات إلى المدير:', data))
//               .catch(error => console.error('خطأ في إرسال البيانات:', error));
//         }
//     </script>
// </body>
// </html> -->


// <!-- 

// <!DOCTYPE html>
// <html lang="ar">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>طلبك</title>
//     <style>
//         .product-row {
//             margin-bottom: 10px;
//         }
//     </style>
// </head>
// <body>
//     <h1>اطلب الآن</h1>
//     <form id="order-form">
//         <div id="product-container">
//             <div class="product-row">
//                 <select class="product-select">
//                     <option value="product1" data-price="10">منتج 1 - $10</option>
//                     <option value="product2" data-price="20">منتج 2 - $20</option>
//                     <option value="product3" data-price="30">منتج 3 - $30</option>
//                 </select>
//                 <input type="number" class="product-quantity" placeholder="الكمية" min="1" />
//                 <input type="number" class="product-price" placeholder="السعر" readonly />
//             </div>
//         </div>
//         <button type="button" onclick="addProductRow()">أضف منتجًا</button>
//         <button type="button" onclick="calculateTotal()">احسب الإجمالي</button>
//         <button type="button" onclick="submitOrder()">أرسل الطلب</button>
//     </form>
//     <h2>الإجمالي: <span id="total-price">$0.00</span></h2>

//     <script>
//         function updatePriceFields() {
//             const rows = document.querySelectorAll('.product-row');
//             rows.forEach(row => {
//                 const select = row.querySelector('.product-select');
//                 const price = select.options[select.selectedIndex].getAttribute('data-price');
//                 row.querySelector('.product-price').value = price;
//             });
//         }

//         function addProductRow() {
//             const container = document.getElementById('product-container');
//             const newRow = document.createElement('div');
//             newRow.classList.add('product-row');
//             newRow.innerHTML = `
//                 <select class="product-select" onchange="updatePriceFields()">
//                     <option value="product1" data-price="10">منتج 1 - $10</option>
//                     <option value="product2" data-price="20">منتج 2 - $20</option>
//                     <option value="product3" data-price="30">منتج 3 - $30</option>
//                 </select>
//                 <input type="number" class="product-quantity" placeholder="الكمية" min="1" />
//                 <input type="number" class="product-price" placeholder="السعر" readonly />
//             `;
//             container.appendChild(newRow);
//         }

//         function calculateTotal() {
//             const rows = document.querySelectorAll('.product-row');
//             let total = 0;
//             rows.forEach(row => {
//                 const price = parseFloat(row.querySelector('.product-price').value) || 0;
//                 const quantity = parseInt(row.querySelector('.product-quantity').value) || 0;
//                 total += price * quantity;
//             });
//             document.getElementById('total-price').textContent = $${total.toFixed(2)};
//         }

//         function submitOrder() {
//             const form = document.getElementById('order-form');
//             const orderDetails = {};

//             document.querySelectorAll('.product-row').forEach(row => {
//                 const product = row.querySelector('.product-select').value;
//                 const quantity = row.querySelector('.product-quantity').value;
//                 const price = row.querySelector('.product-price').value;
//                 if (quantity && price) {
//                     orderDetails[product] = { quantity, price };
//                 }
//             });

//             fetch('/submit-order', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ order: orderDetails, total: document.getElementById('total-price').textContent })
//             })
//             .then(response => response.json())
//             .then(data => {
//                 alert('تم إرسال الطلب بنجاح!');
//                 // Optionally, you can redirect or clear the form here
//             })
//             .catch(error => console.error('Error:', error));
//         }
//     </script>
// </body>
// </html> -->



// <!-- 
// <!DOCTYPE html>
// <html lang="ar">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>اختيار أنواع الشاي</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//             margin: 0;
//         }
//         .container {
//             display: flex;
//             width: 80%;
//             max-width: 1200px;
//         }
//         .menu {
//             width: 30%;
//             padding: 20px;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//             background-color: #f9f9f9;
//         }
//         .menu h2 {
//             margin-top: 0;
//         }
//         .menu .item {
//             margin-bottom: 15px;
//             padding: 10px;
//             border: 1px solid #ddd;
//             border-radius: 5px;
//             background-color: #fff;
//             color: #d9534f; /* لون أحمر */
//             cursor: pointer;
//         }
//         .menu .item.selected {
//             background-color: #d9534f;
//             color: #fff;
//         }
//         .total {
//             width: 70%;
//             padding: 20px;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//             background-color: #f9f9f9;
//             text-align: center;
//         }
//         .total h2 {
//             margin-top: 0;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <! -- قائمة الشاي -->
//         <!-- <div class="menu">
//             <h2>اختيار أنواع الشاي</h2>
//             <div class="item" data-price="5" data-name="شاي أسود">شاي أسود - $5</div>
//             <div class="item" data-price="6" data-name="شاي أخضر">شاي أخضر - $6</div>
//             <div class="item" data-price="4" data-name="ينسون">ينسون - $4</div>
//         </div>

//         <! -- قسم السعر الإجمالي -->
//         <!-- <div class="total">
//             <h2>الإجمالي: $<span id="total-price">0.00</span></h2>
//         </div>
//     </div>

//     <script>
//         const items = document.querySelectorAll('.menu .item');
//         let selectedItems = [];

//         items.forEach(item => {
//             item.addEventListener('click', () => {
//                 const price = parseFloat(item.getAttribute('data-price'));
//                 const name = item.getAttribute('data-name');

//                 if (selectedItems.length < 2) {
//                     if (item.classList.contains('selected')) {
//                         item.classList.remove('selected');
//                         selectedItems = selectedItems.filter(i => i.name !== name);
//                     } else {
//                         item.classList.add('selected');
//                         selectedItems.push({ name, price });
//                     }
//                 } else if (item.classList.contains('selected')) {
//                     item.classList.remove('selected');
//                     selectedItems = selectedItems.filter(i => i.name !== name);
//                 }
//                 updateTotal();
//             });
//         });

//         function updateTotal() {
//             const totalPrice = selectedItems.reduce((total, item) => total + item.price, 0);
//             document.getElementById('total-price').textContent = totalPrice.toFixed(2);
//         }
//     </script>
// </body>
// </html> --> 










// <!-- 


// <!DOCTYPE html>
// <html lang="ar">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>كافيه مكانك</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             margin: 0;
//             padding: 0;
//             background-color: #333;
//             color: #fff;
//             background-image: url(https://th.bing.com/th/id/R.0d9a67e318d58532b5180f2f51d93bab?rik=z4PNcfkf8DOlCw&pid=ImgRaw&r=0);
//             background-size: cover; /* لجعل الصورة تغطي كامل الخلفية */
//             background-position: center; /* لمحاذاة الصورة في وسط الخلفية */
//             background-repeat: no-repeat
//             brightness(100%) contrast(100%) blur(0); 
//             background-size: 1820vh 3800vw;
//             img {
//      max-width: 100%; /* يجعل الصورة تتناسب مع عرض العنصر الحاوي */
//      height: auto; /* يحافظ على نسبة العرض إلى الارتفاع */
//     .container {
//   width: 100%; /* يجعل العرض يتناسب مع عرض الشاشة */
//   padding: 10px; /* استخدام الحشو بدلاً من الهوامش الثابتة */
// }

// }
        
//         }
//         header {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             background-color: #444;
//             padding: 20px;
//             border-bottom: 2px solid #555;
//         }
//         header h1 {
//             margin: 0;
//             font-size: 100px;
//             color: #fff;
//             display: flex;
//             align-items: center;
//         }
//         header img {
//             width: 255px;
//             height: 200px;
//             margin-right: 20px;
//         }
//         .container {
//             display: flex;
//             padding: 20px;
//         }
//         .menu {
//             width: 25%;
//             padding: 20px;
//             border-right: 2px solid #555;
//         }
//         .menu h2 {
//             margin-top: 0;
//             font-size: 24px;
//             border-bottom: 2px solid #555;
//             padding-bottom: 10px;
//         }
//         .menu .item {
//             margin-bottom: 15px;
//             padding: 15px;
//             border: 1px solid #666;
//             border-radius: 10px;
//             background-color: #555;
//             color: #d9534f; /* لون بنفسجي */
//             cursor: pointer;
//             font-size: 18px;
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             transition: background-color 0.3s, transform 0.3s;
//         }
//         .menu .item:hover {
//             background-color: #d9534f;
//             color: #fff;
//             transform: scale(1.05);
//         }
//         .menu .item .price {
//             font-size: 20px;
//         }
//         .menu .item .quantity {
//             width: 50px;
//             margin-left: 10px;
//         }
//         .total {
//             width: 75%;
//             padding: 20px;
//         }
//         .total h2 {
//             margin-top: 0;
//             font-size: 24px;
//             border-bottom: 2px solid #555;
//             padding-bottom: 10px;
//         }
//         .total .order-summary {
//             margin-top: 20px;
//             padding: 15px;
//             border: 1px solid #666;
//             border-radius: 10px;
//             background-color: #444;
//             color: #fff;
//         }
//         .total .order-summary .item-summary {
//             margin-bottom: 10px;
//         }
//         .total .order-summary .item-summary .item-name {
//             font-weight: bold;
//         }
//         .total .order-summary .item-summary .item-price {
//             color: #d9534f;
//         }
//         .button-container {
//             text-align: center;
//             margin-top: 20px;
//         }
//         .button-container button {
//             padding: 15px 30px;
//             font-size: 18px;
//             color: #fff;
//             background-color: #d9534f;
//             border: none;
//             border-radius: 10px;
//             cursor: pointer;
//             transition: background-color 0.3s;
//         }
//         .button-container button:disabled {
//             background-color: #777;
//             cursor: not-allowed;
//         }
//         .button-container button:hover:not(:disabled) {
//             background-color: #c9302c;
//         }
//     </style>
// </head>
// <body>
//     <header>
//         <img src="d:\My project\صورة واتساب بتاريخ 1446-03-04 في 18.50.03_9ed0c1ec.jpg" alt="شعار القهوة">
//         <h1>كافيه مكانك</h1>
//     </header>

//     <div class="container">
//             قائمة المنتجات -->
//         <!-- <div class="menu"> -->
//             <!-- <h2>قائمة الشاي</h2>
//             <div class="item" data-name="شاي أسود" data-price="5">
//                 شاي أسود
//                 <span class="price">ج5</span>
//                 <select class="quantity">
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                 </select>
//             </div>
//             <div class="item" data-name="شاي أخضر" data-price="6">
//                 شاي أخضر
//                 <span class="price">ج6</span>
//                 <select class="quantity">
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                 </select>
//             </div>
//             <div class="item" data-name="ينسون" data-price="4">
//                 ينسون
//                 <span class="price">ج4</span>
//                 <select class="quantity">
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                 </select>
//             </div>
//         </div>
//         قسم الإجمالي -->
//         <!-- <div class="total">
//             <h2>إجمالي السعر</h2>
//             <div class="order-summary">
//                 <div id="order-details"></div>
//                 <div class="item-summary">
//                     <span id="total-price">ج0.00</span>
//                 </div>
//             </div>
//             <div class="button-container">
//                 <button id="send-order" onclick="sendOrder()">إرسال الطلب</button>
//             </div>
//         </div>
//     </div>

//     <script>
//         const items = document.querySelectorAll('.menu .item');
//         const orderDetailsDiv = document.getElementById('order-details');
//         const totalPriceSpan = document.getElementById('total-price');
//         const sendOrderButton = document.getElementById('send-order');

//         let selectedItems = [];

//         items.forEach(item => {
//             const quantitySelect = item.querySelector('.quantity');
//             quantitySelect.addEventListener('change', () => {
//                 updateOrder();
//             });
//             item.addEventListener('click', () => {
//                 updateOrder();
//             });
//         });

//         function updateOrder() {
//             selectedItems = [];
//             orderDetailsDiv.innerHTML = '';
//             let totalPrice = 0;

//             items.forEach(item => {
//                 if (item.classList.contains('selected')) {
//                     const price = parseFloat(item.getAttribute('data-price'));
//                     const name = item.getAttribute('data-name');
//                     const quantity = parseInt(item.querySelector('.quantity').value);

//                     if (quantity > 0) {
//                         selectedItems.push({ name, price, quantity });
//                         totalPrice += price * quantity;
//                         const itemSummary = document.createElement('div');
//                         itemSummary.className = 'item-summary';
//                         itemSummary.innerHTML = `
//                             <div class="item-name">${name}</div>
//                             <div class="item-price">$${(price * quantity).toFixed(2)}</div>
//                         `;
//                         orderDetailsDiv.appendChild(itemSummary);
//                     }
//                 }
//             });

//             totalPriceSpan.textContent = $${totalPrice.toFixed(2)};
//         }

//         function sendOrder() {
//             sendOrderButton.disabled = true;
//             setTimeout(() => {
//                 sendOrderButton.disabled = false;
//                 alert('تم إرسال الطلب بنجاح!');
//                 selectedItems = [];
//                 updateOrder();
//             }, 30000); // 5 دقائق
//         }

//         items.forEach(item => {
//             item.addEventListener('click', () => {
//                 item.classList.toggle('selected');
//                 updateOrder();
//             });
//         });
//     </script>
//     <h1>vrrv</h1>
//     <h2>fvsd</h2>
//     <h3>rvsrsdv</h3>
//     <h3>rsv</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>yhu</h3>
//     <h3>ytety</h3>
//     <h3>bte</h3>
//     <h3>btrg</h3>
//     <h3>534</h3>
//     <h1>vrrv</h1>
//     <h2>fvsd</h2>
//     <h3>rvsrsdv</h3>
//     <h3>rsv</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>yhu</h3>
//     <h3>ytety</h3>
//     <h3>bte</h3>
//     <h3>btrg</h3>
//     <h3>534</h3>
//     <h1>vrrv</h1>
//     <h2>fvsd</h2>
//     <h3>rvsrsdv</h3>
//     <h3>rsv</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>yhu</h3>
//     <h3>ytety</h3>
//     <h3>bte</h3>
//     <h3>btrg</h3>
//     <h3>534</h3>
//     <h1>vrrv</h1>
//     <h2>fvsd</h2>
//     <h3>rvsrsdv</h3>
//     <h3>rsv</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>yhu</h3>
//     <h3>ytety</h3>
//     <h3>bte</h3>
//     <h3>btrg</h3>
//     <h3>534</h3>
//     <h1>vrrv</h1>
//     <h2>fvsd</h2>
//     <h3>rvsrsdv</h3>
//     <h3>rsv</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>yhu</h3>
//     <h3>ytety</h3>
//     <h3>bte</h3>
//     <h3>btrg</h3>
//     <h3>534</h3>
//     <h1>vrrv</h1>
//     <h2>fvsd</h2>
//     <h3>rvsrsdv</h3>
//     <h3>rsv</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>yhu</h3>
//     <h3>ytety</h3>
//     <h3>bte</h3>
//     <h3>btrg</h3>
//     <h3>534</h3>
//     <h1>vrrv</h1>
//     <h2>fvsd</h2>
//     <h3>rvsrsdv</h3>
//     <h3>rsv</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>vrs</h3>
//     <h3>yhu</h3>
//     <h3>ytety</h3>
//     <h3>bte</h3>
//     <h3>btrg</h3>
//     <h3>534</h3>

// </body>
// </html>
// <hr> -->

// <!DOCTYPE html>
// <html lang="ar">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>RoStIeKa CoFFee</title>
//   <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//   <header>
//     <div class="logo">RoStIeKa CoFFee</div>
//     <nav>
//       <ul>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#menu">Menu</a></li>
//         <li><a href="#products">Products</a></li>
//         <li><a href="#review">Review</a></li>
//         <li><a href="#contact">Contact</a></li>
//         <li><a href="#blogs">Blogs</a></li>
//       </ul>
//     </nav>
//   </header>

//   <main>
//     <section id="menu" class="section">
//       <div class="content">
//         <h2>أصناف المشروبات الساخنة</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>الصنف</th>
//               <th>حجم</th>
//               <th>سعر</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>شاي أسود</td>
//               <td>
//                 <label><input type="radio" name="tea-size" value="cold"> ساقع</label>
//                 <label><input type="radio" name="tea-size" value="hot"> سخن</label>
//               </td>
//               <td>15</td>
//             </tr>
//             <!-- أضف بقية الأصناف هنا -->
//           </tbody>
//         </table>
//         <div class="order-section">
//           <button id="place-order">طلب الأوردر</button>
//           <p id="order-response"></p>
//         </div>
//       </div>
//     </section>

//     <section id="review" class="section">
//       <div class="content">
//         <h2>تقييم العملية</h2>
//         <div class="stars">
//         <span class="star" data-value="1">&#9733;</span>
//         <span class="star" data-value="2">&#9733;</span>
//         <span class="star" data-value="3">&#9733;</span>
//         <span class="star" data-value="4">&#9733;</span>
//         <span class="star" data-value="5">&#9733;</span>
//         </div>
//         <button id="submit-review">إرسال التقييم</button>
//         <p id="review-response"></p>
//       </div>
//     </section>
 
//     <section id="summary" class="section">
//       <div class="content">
//         <h2>الملخص</h2>
//         <p id="summary-content">الأصناف والتفاصيل ستظهر هنا.</p>
//         <button id="execute-order">تنفيذ العملية</button>
//       </div>
//     </section>
//   </main>

//   <script src="script.js"></script>
//   <style>
//     /* إعدادات أساسية للصفحة */
// body {
//   font-family: Arial, sans-serif;
//   margin: 0;
//   padding: 0;
//   background: url() no-repeat center center fixed;
//   background-size: contain;
//   color: #ff0000;
// }

// /* تنسيق الهيدر */
// header {
//    background-color: #3e2723; /* لون بني للقهوة */
//    color: rgb(255, 255, 255);
//     padding: 10px;
//      position: fixed;
//       width: 100%;
//         top: 0;
//          left: 0;
//             z-index: 1000;
// }

// .logo {
//     float: left;
//     font-size: 24px;
//     font-weight: bold;
//     background: linear-gradient(to right, red, black, white, red, black, white); /* تدرج الألوان */
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent; /* يجعل النص شفافا ليظهر التدرج */

// }

// nav {
//     float: right;
// }

// nav ul {
//     list-style: none;
//     padding: 0;
//     margin: 0;
// }

// nav ul li {
//     display: inline;
//     margin: 0 15px;
// }

// nav ul li a {
//     color: white;
//     text-decoration: none;
//     font-size: 18px;
//     transition: all 0.3s ease;
// }

// nav ul li a:hover {
//   color: #d32f2f; /* لون بني */
//     text-decoration: underline;
//     transform: scale(1.1);
// }

// /* تنسيق الأقسام */
// .section {
//   padding: 60px 20px 20px; /* إضافة مساحة إضافية في الأعلى لمراعاة الهيدر الثابت */
//   background-color: rgba(62, 39, 35, 0.8); /* خلفية بني شفافة لتتناسب مع لون القهوة */
//   margin-top: 50px; /* لتحريك الأقسام تحت الهيدر الثابت */
//     color: rgb(255, 255, 255);
//     overflow: hidden;
// }

// div{ 
//     background-color: #0000ff;

// }
// /* تنسيق الجدول */
// table {
//     width: 100%;
//     border-collapse: collapse;
//     overflow-y: auto;
//   max-height: 400px; /* يحدد أقصى ارتفاع للجدول مع التمرير */
//     display: block;
// }

// thead {
//     background-color: #3e2723;
//     color: white;
// }

// th, td {
//     padding: 10px;
//     text-align: left;
//     border-bottom: 1px solid #ddd;
// }

// th {
//     background-color: #3e2723;
//     color: white;
// }

// /* تنسيق العناصر */
// h2 {
//     font-size: 24px;
//     margin-bottom: 10px;
// }

// ul {
//     list-style-type: none;
//     padding: 0;
// }

// ul li {
//     padding: 10px 0;
//     border-bottom: 1px solid #ddd;
// }

// .price {
//     float: right;
//     margin-left: 20px;
// }

// .order-section {
//     margin-top: 20px;
// }

// #place-order, #submit-review, #execute-order {
//     background-color: #3e2723;
//     color: white;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
// }

// #place-order:hover, #submit-review:hover, #execute-order:hover {
//     background-color: #2c1b17;
// }

// .stars {
//     display: flex;
// }

// .star {
//     font-size: 24px;
//     color: #ddd;
//     cursor: pointer;
// }

// .star.selected {
//     color: rgb(255, 217, 0);
// }

// #summary-content {
//     margin-top: 10px;
// }
// /* تخصيص التمرير للجدول */
// .table-container {
//     max-height: 400px;
//     overflow-y: auto;
// }
//     </style>
// <script>
//     document.addEventListener('DOMContentLoaded', function() {
//     const stars = document.querySelectorAll('.star');
//     const submitReviewButton = document.getElementById('submit-review');
//     const placeOrderButton = document.getElementById('place-order');
//     const executeOrderButton = document.getElementById('execute-order');
//     const reviewResponse = document.getElementById('review-response');
//     const orderResponse = document.getElementById('order-response');
//     let selectedRating = 0;

//     stars.forEach(star => {
//     star.addEventListener('click', function() {
//         selectedRating = this.getAttribute('data-value');
//         stars.forEach(star => star.classList.remove('selected'));
//         for (let i = 0; i < selectedRating; i++) {
//         stars[i].classList.add('selected');
//     }
//     });
//     });
//     submitReviewButton.addEventListener('click', function() {
//     alert('دا أقل واجب نقدر نعمله');
//     });
//     placeOrderButton.addEventListener('click', function() {
//     orderResponse.textContent = 'شكرًا لطلبك. سياتي الطلب إليك في أقل وقت ممكن.';
//     setTimeout(() => {
//     orderResponse.textContent = '';
//     }, 300000); // 5 دقائق
//     });
//     executeOrderButton.addEventListener('click', function() {
//     alert('سيتم تنفيذ العملية');
//     });
// });
// let v = 100
// console .log (typeof(v).toString()
// )
// let name = 'Ali '
// console.log(name.repeat(100))
// </script>
// <img src="https://th.bing.com/th/id/OIP.Ea3DxtvGnU2Cs-lbAqN8LwHaEP?rs=1&pid=ImgDetMain" alt="Image">
// </body>
// </html>