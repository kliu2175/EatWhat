const foodItems = [
    "拉麵",
    "壽司",
    "蕎麥麵",
    "大阪燒",
    "鰻魚飯",
    "炸豬排",
    "擔擔麵",
    "三杯雞",
    "宮保雞丁",
    "酸菜魚",
    "湯包",
    "港式飲茶",
    "海鮮煲",
    "炸春捲",
    "烤肉",
    "烤魚",
    "烤雞",
    "烤鮭魚",
    "越南菜",
    "炒河粉",
    "烤肉飯",
    "米線",
    "泰國菜",
    "印尼菜",
    "沙嗲",
    "咖哩",
    "韓國菜",
    "泡菜豬",
    "綠咖哩",
    "墨西哥捲餅",
    "烤羊排",
    "漢堡",
    "薯條",
    "牛排",
    "義大利麵",
    "海鮮燉飯",
    "Pizza",
    "鬆餅",
    "起司蛋糕",
    "叉燒飯",
    "小籠包",
    "手抓海鮮",
    "水煮魚",
    "牛肉麵",
    "生魚片",
    "印度菜",
    "肉夾饃",
    "肉圓",
    "肉粿",
    "西班牙菜",
    "炒飯",
    "炸肉圓",
    "炸物",
    "炸臭豆腐",
    "海南雞飯",
    "海鮮丼",
    "烤生蠔",
    "麻油雞",
    "麻辣臭豆腐",
    "鼎泰豐",
    "滷肉飯",
    "蒸餃",
    "蘿蔔糕",
    "雞蛋糕",
    "紅豆湯圓",
    "冰",
    "牛汶水",
    "KFC",
    "SUBWAY",
    "麥當勞"
];

const foodPictures = {
    "拉麵" :"https://cdn.pixabay.com/photo/2017/04/04/00/36/ramen-2199962_1280.jpg",
    "壽司" :"https://cdn.pixabay.com/photo/2020/05/31/04/44/sushi-5241271_1280.jpg",
    "蕎麥麵" :"https://cdn.pixabay.com/photo/2022/10/01/04/04/soba-7490600_1280.jpg",
    "大阪燒" :"https://cdn.pixabay.com/photo/2022/07/10/10/11/okonomiyaki-7312548_960_720.jpg",
    "鰻魚飯" :"https://cdn.pixabay.com/photo/2015/02/23/01/01/eel-645641_1280.jpg",
    "炸豬排" :"https://cdn.pixabay.com/photo/2016/09/23/23/23/restaurant-1690696_1280.jpg",
    "擔擔麵" :"https://cdn.pixabay.com/photo/2019/11/23/15/30/ramen-4647411_1280.jpg",
    "三杯雞" :"https://cdn.pixabay.com/photo/2020/02/21/06/08/cantonese-food-4866580_1280.jpg",
    "宮保雞丁" :"https://cdn.pixabay.com/photo/2024/10/06/19/35/asian-cuisine-9101015_1280.jpg",
    "湯包" :"https://cdn.pixabay.com/photo/2016/02/17/10/41/dumplings-1204814_1280.jpg",
    "酸菜魚" :"https://cdn.pixabay.com/photo/2023/07/11/02/41/chinese-food-8119421_1280.jpg",
    "港式飲茶" :"https://cdn.pixabay.com/photo/2013/11/13/15/55/chinese-food-210101_1280.jpg",
    "海鮮煲" :"https://cdn.pixabay.com/photo/2018/12/03/01/04/spicy-seafood-3852529_1280.jpg",
    "炸春捲" :"https://cdn.pixabay.com/photo/2017/02/25/15/18/spring-rolls-2097978_1280.jpg",
    "烤肉" :"https://cdn.pixabay.com/photo/2019/11/21/18/28/garlic-ribs-4643142_1280.jpg",
    "烤魚" :"https://cdn.pixabay.com/photo/2016/12/30/04/26/restaurant-1939958_1280.jpg",
    "烤雞" :"https://cdn.pixabay.com/photo/2024/09/21/10/31/ai-generated-9063511_1280.png",
    "烤鮭魚" :"https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg",
    "越南菜" :"https://cdn.pixabay.com/photo/2021/11/01/15/52/spring-roll-6760871_1280.jpg",
    "炒河粉" :"https://cdn.pixabay.com/photo/2014/11/05/16/00/thai-food-518035_1280.jpg",
    "烤肉飯" :"https://cdn.pixabay.com/photo/2021/02/09/03/53/thai-food-5997301_1280.jpg",
    "米線" :"https://cdn.pixabay.com/photo/2021/02/09/03/54/thai-food-5997310_1280.jpg",
    "泰國菜" :"https://cdn.pixabay.com/photo/2017/06/29/18/03/thaifood-2455286_1280.jpg",
    "印尼菜" :"https://cdn.pixabay.com/photo/2018/08/14/07/16/satay-chicken-3604856_1280.jpg",
    "沙嗲" :"https://cdn.pixabay.com/photo/2022/06/23/09/40/dish-7279401_1280.jpg",
    "咖哩" :"https://cdn.pixabay.com/photo/2018/12/04/16/49/indian-food-3856050_1280.jpg",
    "韓國菜" :"https://cdn.pixabay.com/photo/2016/10/13/19/15/bibimbap-1738580_1280.jpg",
    "人蔘雞" :"https://cdn.pixabay.com/photo/2016/04/22/18/52/chicken-soup-1346310_1280.jpg",
    "泡菜豬" :"https://cdn.pixabay.com/photo/2016/08/10/10/28/vegetable-1582920_1280.jpg",
    "綠咖哩" :"https://cdn.pixabay.com/photo/2021/07/04/13/23/green-curry-6386360_1280.jpg",
    "墨西哥捲餅" :"https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038_1280.jpg",
    "烤羊排" :"https://cdn.pixabay.com/photo/2022/08/27/14/05/lamb-chops-platter-7414539_960_720.jpg",
    "漢堡" :"https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg",
    "薯條" :"https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg",
    "牛排" :"https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_1280.jpg",
    "義大利麵" :"https://cdn.pixabay.com/photo/2015/09/27/16/50/spaghetti-960978_1280.jpg",
    "海鮮燉飯" :"https://cdn.pixabay.com/photo/2016/01/29/14/02/paella-1168003_1280.jpg",
    "Pizza" :"https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_1280.jpg",
    "鬆餅" :"https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
    "起司蛋糕" :"https://cdn.pixabay.com/photo/2016/03/27/22/38/cake-1284548_1280.jpg",
    "叉燒飯" :"https://i.imgur.com/gTSwq4F.jpeg",
    "小籠包" :"https://i.imgur.com/zT6Zquj.jpeg",
    "手抓海鮮" :"https://i.imgur.com/lNkXj7i.jpeg",
    "水煮魚" :"https://i.imgur.com/VV4JLR4.jpeg",
    "牛肉麵" :"https://i.imgur.com/TQtrKD2.jpeg",
    "牛汶水" :"https://i.imgur.com/e96mEy2.jpeg",
    "生魚片" :"https://i.imgur.com/s65lFbC.jpeg",
    "印度菜" :"https://i.imgur.com/o1N1901.jpeg",
    "肉夾饃" :"https://i.imgur.com/hoUBOu7.jpeg",
    "肉圓" :"https://i.imgur.com/MUZvOEI.jpeg",
    "肉粿" :"https://i.imgur.com/ACOmvqR.jpeg",
    "西班牙菜" :"https://i.imgur.com/0loPiZK.jpeg",
    "炒飯" :"https://i.imgur.com/mj3ixnw.jpeg",
    "炸肉圓" :"https://i.imgur.com/n5R6rdM.jpeg",
    "炸物" :"https://i.imgur.com/866sfbR.jpeg",
    "炸臭豆腐" :"https://i.imgur.com/ECLUFAG.jpeg",
    "海南雞飯" :"https://i.imgur.com/kguwVEM.jpeg",
    "海鮮丼" :"https://i.imgur.com/ExbHRct.jpeg",
    "烤生蠔" :"https://i.imgur.com/QtcJfHt.jpeg",
    "麻油雞" :"https://i.imgur.com/Of963V1.jpeg",
    "麻辣臭豆腐" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463827118_2994096380772624_6988757261298477385_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=XuNw1tPbZkUQ7kNvgFrhMQ1&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AaXCPGUNy3LRXYjtBiZASFF&oh=00_AYA2aha-I8h_u3OarGDtZ8VWYnNFKWMoxAeLHhm9kdCO0w&oe=671837D4",
    "鼎泰豐" :"https://i.imgur.com/DBmKHls.jpeg",
    "滷肉飯" :"https://i.imgur.com/EL39GY6.jpeg",
    "蒸餃" :"https://i.imgur.com/HBjXFFC.jpeg",
    "蘿蔔糕" :"https://i.imgur.com/tIrLORE.jpeg",
    "雞蛋糕" :"https://i.imgur.com/NX3rbqa.jpeg",
    "紅豆湯圓" :"https://i.imgur.com/IyziaFw.jpeg",
    "冰" :"https://i.imgur.com/jNzdMte.jpeg",
    "KFC" :"https://i.imgur.com/7gLpZqK.png",
    "SUBWAY" :"https://i.imgur.com/w2WYmnN.png",
    "麥當勞" :"https://i.imgur.com/pFEV8iW.png"

};

function selectRandomShop() {
    const randomIndex = Math.floor(Math.random() * foodItems.length);
    const selectedShop = foodItems[randomIndex];

    document.getElementById('result').textContent = `吃 ${selectedShop} 吧！`;
    document.getElementById('menuImage').src = foodPictures[selectedShop];
    document.getElementById('menuImage').style.display = 'block';
}

// Order class
class Order {
    constructor(name, item, size, salinity, note, price) {
        this.name = name;
        this.item = item;
        this.size = size;
        this.salinity = salinity;
        this.note = note;
        this.price = price;
    }
}

// DOM Elements
const orderForm = document.getElementById('orderForm');
const orderTableBody = document.getElementById('orderTableBody');
const totalPriceElement = document.getElementById('totalPrice');

let orders = [];

// Submit order
orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const order = new Order(
        document.getElementById('name').value,
        document.getElementById('item').value,
        document.getElementById('size').value,
        document.getElementById('salinity').value,
        document.getElementById('note').value,
        document.getElementById('price').value
    );
    
    orders.push(order);
    updateOrderTable();

    // Reset form
    orderForm.reset();
    document.getElementById('size').value = '正常';
    document.getElementById('salinity').value = '正常';
});

function updateOrderTable() {
    orderTableBody.innerHTML = '';
    let totalPrice = 0;

    orders.forEach((order, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.name}</td>
            <td>${order.item}</td>
            <td>${order.size}</td>
            <td>${order.salinity}</td>
            <td>${order.note}</td>
            <td>${order.price}</td>
        `;
        orderTableBody.appendChild(row);
        totalPrice += parseFloat(order.price || 0);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// 初始化表單的下拉選單
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('size').value = '正常';
    document.getElementById('salinity').value = '正常';
});
