const drinkShops = [
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

const menuImages = {
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
    "叉燒飯" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463908012_2993752717473657_4644149387586413439_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=fiqwmt6IPZAQ7kNvgFhDCo0&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AhX0QDlIaLmpy1d7-mSFtns&oh=00_AYBFUJ5WCaXl5WN4yU8ANpRxJrcAAX4TE7nJsS6gBXVimg&oe=6717CEBC",
    "小籠包" :"https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/463720186_2993752724140323_5832228113761714230_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=W0XlyRIUwy8Q7kNvgHYYCNa&_nc_zt=23&_nc_ht=scontent.ftpe8-1.fna&_nc_gid=A43m8Hd6px7mUfWbT-SvACV&oh=00_AYAGx7JiWoctRVWsryiMBtGtzK9Pq6hMIkOt6_t2ihIeow&oe=6717D709",
    "手抓海鮮" :"https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/463824243_2993752590807003_6517490825316958297_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=E3lgoWh2eWcQ7kNvgGNp6zy&_nc_zt=23&_nc_ht=scontent.ftpe8-1.fna&_nc_gid=AFL58rDlw3A3eFr1pcLNweT&oh=00_AYB179adP0cAWgTu54Tc0C-ihtwfCg4YJEEHtLknTwE5Jw&oe=671802B5",
    "水煮魚" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463758758_2993752767473652_6018902208193164998_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=GXhvLky0F5cQ7kNvgEP_YQl&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=ABqeMa63CmHgQu2_VsIwHkj&oh=00_AYDGuKpSP8dqvBtKnPBbt6eEtXH28SFp_syocd-atN0MiQ&oe=6717E0F3",
    "牛肉麵" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463745293_2993752877473641_1082203314847522896_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=a7IbdNx2RJ0Q7kNvgE12Ka_&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=A1Zv4GVld63Sqk6LVjQN4ea&oh=00_AYBsFeVXu8-dbzZ8JHMqIHa75gYvOUPCe7e2hrB5LpxLGQ&oe=6717CDE5",
    "牛汶水" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463665664_2993752900806972_3039213590378648225_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=r2IiUkNbHnUQ7kNvgF0_kh-&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AVnrQU8cyfNiCbasrGzs85m&oh=00_AYAt8ztgozsKEVFM886H3FC-5JtEIypQJj4hRnAPfvY9bw&oe=6717FE08",
    "生魚片" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463789155_2993753054140290_6281591969599256816_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=1i_nwE13yIgQ7kNvgHZkgIk&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=Al0jaCGWzNDI4aM8mUwqiYR&oh=00_AYCvUlsWQq-D5dRd_zppkwczzrGgUt3XfHny_UZWHWpgrg&oe=6717D238",
    "印度菜" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463727154_2993753160806946_2329771040687062609_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=XGNF3oA9NdMQ7kNvgHZTioU&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=Aui0evi2uzLRB1A9ljkJdvt&oh=00_AYDXVfZpF_LXfsZ_DtUxZ8WFY5F2c2paGD7xwfAGvXdZ7g&oe=6717FD67",
    "肉夾饃" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463655934_2993753330806929_5698153166498806288_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=N6uDoNE_08MQ7kNvgFR92AJ&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=A-37JfhpRBVR_zcG__SZhCI&oh=00_AYAvIwLVn8ndqDjyehLwCSGW4Kdayww9kce8nx5dC4hMtA&oe=6717F84D",
    "肉圓" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463865311_2993753334140262_1124838876959020885_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=nTkA3yE3EG0Q7kNvgEZ5CXo&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AndxPuK9P7IXrX02er2l0o7&oh=00_AYD9WkVbHsvje1LaFvpRxlyW0n_im2OomxBp-AdjhEClww&oe=6717E94F",
    "肉粿" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463630990_2993753280806934_6342660870296415615_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=P8KRHdBydXEQ7kNvgFkdd9m&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=ASzdQuTX8m5UVizpNCYlYT8&oh=00_AYCbY3AVpVx5Z4pzxUaN8meZYoixZRZx4ZO3pwWiI4IYgQ&oe=6717D12F",
    "西班牙菜" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463780358_2993753377473591_3357420914792692970_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=rBV8MxOLbQwQ7kNvgE0GMxk&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AKX5C8mKYqL3-6hL2Kfezki&oh=00_AYBWqaJiJBHQRHKO2F8Z9aJGZscmN_KWnCF10ANXNca0Tg&oe=6717D2C4",
    "炒飯" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463614234_2993753520806910_5850696700441423970_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=v6JvsEygBhwQ7kNvgFLomEc&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=AiUQUwwFRF73UBjtD8-be4F&oh=00_AYCwtzGhWdPj0nV59f1Db8t3m3Wdjiv0xAgYpoVege5fLA&oe=6717EB86",
    "炸肉圓" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463748869_2993753617473567_6179242416550782338_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=s5PhjF6ykfQQ7kNvgHQRRIo&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=APOGEaHtuLIzHK_xWhQD5w7&oh=00_AYBjhO4YaECQeHsn71UDZ2sMR_ntvDgfdq3oZ2m84Qp40g&oe=6717DB21",
    "炸物" :"https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/463967149_2993753760806886_1886876629272871762_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=o49cmf1gD68Q7kNvgFka01C&_nc_zt=23&_nc_ht=scontent.ftpe8-1.fna&_nc_gid=AgVkN7UZQYmLbiFaBA3uyYV&oh=00_AYA7NCxQzr-5M_bfuOQr296AOnvIxzJ22OXgqABhdwEYTg&oe=6717DA66",
    "炸臭豆腐" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463748502_2993753674140228_3363620512908732360_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=jHchmdB93EAQ7kNvgGc7-Lm&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AX0e_OAcBEKI7jv86B2Y1BN&oh=00_AYCupG2xnCpHP4t2e5k17onrckD3XXJU8pDoJU9Fe_mN0Q&oe=6717E443",
    "海南雞飯" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463720203_2993753934140202_5285036213275351002_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Z2sIUatDJXkQ7kNvgFixK_q&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AV7I_an1_v-G2sMGQmQkisC&oh=00_AYCtgZD7hM1VGhC6QMdI9vZq0yJ2uPbgGubDZuTnS4NoRA&oe=6717FF82",
    "海鮮丼" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463834681_2993753957473533_239788125610215616_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=FWNTiWyXYTAQ7kNvgFkx2hx&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=A1En9rwruLoJ-wRFFjY3XxZ&oh=00_AYBQjFujF50uhSZRdwsRPBcDuVHTrQPKHK6mm831foni0w&oe=6717F4AF",
    "烤生蠔" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463847471_2993754094140186_6222110546419090336_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=UREYolKWN94Q7kNvgEETDaL&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AcI-H3Ou9DOBwxdqEiJ48BR&oh=00_AYCgTrn6q6To1j2Ey-Zf9-CLb-w0D9erCJCXBlUVXfTAMA&oe=6717EA48",
    "麻油雞" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463755694_2993754354140160_5492460113119431587_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=0JXr9y9te20Q7kNvgEHy6An&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AvNiPlV3pm3JGcRSRoX_AOx&oh=00_AYCHBz4Z6ScS6YQ_yA4Oi8xGiaYm7tVSa88vyqi8zhVF3Q&oe=6717D871",
    "麻辣臭豆腐" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463827118_2994096380772624_6988757261298477385_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=XuNw1tPbZkUQ7kNvgFrhMQ1&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AaXCPGUNy3LRXYjtBiZASFF&oh=00_AYA2aha-I8h_u3OarGDtZ8VWYnNFKWMoxAeLHhm9kdCO0w&oe=671837D4",
    "鼎泰豐" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463904645_2993754487473480_6118836968928639950_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=62wwLfHtmNsQ7kNvgFFUyJ0&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=Ak-6RJV5fFuzuI-u8GBxL5h&oh=00_AYCYev_AG-YNU0fbQpJ6qVFoohTADsbbAAEQ5cSFEJ7Onw&oe=6717E874",
    "滷肉飯" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463746384_2993754524140143_5249865655653749802_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=FsBTcIRdheMQ7kNvgEDMdMN&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=ATZhbBmpmPnpdZIQqGclJ0V&oh=00_AYCJgzBxYDUrwd4DEEAKA9CU899A6sRNebAyK-ZsW2B1Qg&oe=6717E7F6",
    "蒸餃" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463614664_2993754630806799_5662781432764856186_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=GtcAhn1Pt8MQ7kNvgHnP-NA&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AJXtZrNsBNzUOuf4GUk-fQw&oh=00_AYAvRaMEeHpD-3wj_19tsbr6MRSld9yzynd9vc9Unce-Sg&oe=6717EBE4",
    "蘿蔔糕" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463626171_2993754974140098_6611675743434029207_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=TFtd1Nhm1xUQ7kNvgEGzgGH&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AF1aen-Dl4QueMKXaJhsMG0&oh=00_AYBY9YvPQRyA-8poS_BzBBD5dem2u-6rGpi_4m1RmKZuXA&oe=6717DC78",
    "雞蛋糕" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463666052_2993754837473445_2935918891627468882_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Hc4rsmjAwUUQ7kNvgHXsTx9&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AoL7R_HVAkCt6kZiI7W7y4H&oh=00_AYAXtPE_ZswKXu8wWGc-Jzl7-MYz5tCBbdnvLH9BKWrjOw&oe=6717D77C",
    "紅豆湯圓" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463655883_2993753777473551_7265885691341576421_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=edON_3nRhO8Q7kNvgFzedBW&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=A8St880hgvznj7yEuSUsRjQ&oh=00_AYCU_rpezpvy0NCWEBMFW64tYkW-6uae_tt_e-ilehr2Wg&oe=6717DA27",
    "冰" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463780679_2993753067473622_2034739526831788538_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=C0Wq_k8BymYQ7kNvgG3SSKh&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AATe9O9oBtSAT5GPtte9XzL&oh=00_AYCehjtlQHWqin9L8cMTKuB7kc-5g1--u7HAUTp1q803Lw&oe=6717D288",
    "KFC" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463745575_2993752567473672_9106425881006544197_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=5o2p8SAC2N8Q7kNvgFRG8Yg&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=ATZBitE6rdsVvQQXMTRoJfX&oh=00_AYD1IjLB1-VZTyHDT7QYTT8jELZFE_RBci5137XttpEXrQ&oe=6717FC99",
    "SUBWAY" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/464009515_2993752564140339_934226926842380896_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=KkoH0QV2Z30Q7kNvgFLrW2S&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=ACOxL5w9P9ybBCg-075LrCC&oh=00_AYA0wkAPO37I8g1Bfk4r2Ht6w8pof5Ik99hAQNIt8jYZyw&oe=6717E59D",
    "麥當勞" :"https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/463749963_2993754074140188_5569871791299815390_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=w6Vkg7Fl2L8Q7kNvgGNDYAF&_nc_zt=23&_nc_ht=scontent.ftpe8-1.fna&_nc_gid=A9lO8xao1JHaIgQuYFP5BOd&oh=00_AYAtz6-66WJP--kT01empdfEoN-zKvMdvt1hizTMCSFASg&oe=6717E16D"

};

function selectRandomShop() {
    const randomIndex = Math.floor(Math.random() * drinkShops.length);
    const selectedShop = drinkShops[randomIndex];

    document.getElementById('result').textContent = `吃 ${selectedShop} 吧！`;
    document.getElementById('menuImage').src = menuImages[selectedShop];
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
