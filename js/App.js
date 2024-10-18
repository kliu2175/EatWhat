const drinkShops = [
    "KFC",
    "SUBWAY",
    "叉燒飯",
    "小籠包",
    "手抓海鮮",
    "水煮魚",
    "牛肉麵",
    "牛汶水",
    "牛排",
    "生魚片",
    "冰",
    "印度菜",
    "肉夾饃",
    "肉圓",
    "肉粿",
    "西班牙菜",
    "拉麵",
    "炒飯",
    "炸肉圓",
    "炸物",
    "炸臭豆腐",
    "紅豆湯圓",
    "泰國菜",
    "海南雞飯",
    "海鮮丼",
    "烤生蠔",
    "烤肉",
    "麥當勞",
    "麻油雞",
    "麻辣臭豆腐",
    "義大利麵",
    "鼎泰豐",
    "滷肉飯",
    "蒸餃",
    "燉飯",
    "薯條",
    "韓式料理",
    "雞蛋糕",
    "鰻魚飯",
    "蘿蔔糕"
];

const menuImages = {
    "KFC" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463745575_2993752567473672_9106425881006544197_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=5o2p8SAC2N8Q7kNvgFRG8Yg&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=ATZBitE6rdsVvQQXMTRoJfX&oh=00_AYD1IjLB1-VZTyHDT7QYTT8jELZFE_RBci5137XttpEXrQ&oe=6717FC99",
    "SUBWAY" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/464009515_2993752564140339_934226926842380896_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=KkoH0QV2Z30Q7kNvgFLrW2S&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=ACOxL5w9P9ybBCg-075LrCC&oh=00_AYA0wkAPO37I8g1Bfk4r2Ht6w8pof5Ik99hAQNIt8jYZyw&oe=6717E59D",
    "叉燒飯" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463908012_2993752717473657_4644149387586413439_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=fiqwmt6IPZAQ7kNvgFhDCo0&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AhX0QDlIaLmpy1d7-mSFtns&oh=00_AYBFUJ5WCaXl5WN4yU8ANpRxJrcAAX4TE7nJsS6gBXVimg&oe=6717CEBC",
    "小籠包" :"https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/463720186_2993752724140323_5832228113761714230_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=W0XlyRIUwy8Q7kNvgHYYCNa&_nc_zt=23&_nc_ht=scontent.ftpe8-1.fna&_nc_gid=A43m8Hd6px7mUfWbT-SvACV&oh=00_AYAGx7JiWoctRVWsryiMBtGtzK9Pq6hMIkOt6_t2ihIeow&oe=6717D709",
    "手抓海鮮" :"https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/463824243_2993752590807003_6517490825316958297_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=E3lgoWh2eWcQ7kNvgGNp6zy&_nc_zt=23&_nc_ht=scontent.ftpe8-1.fna&_nc_gid=AFL58rDlw3A3eFr1pcLNweT&oh=00_AYB179adP0cAWgTu54Tc0C-ihtwfCg4YJEEHtLknTwE5Jw&oe=671802B5",
    "水煮魚" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463758758_2993752767473652_6018902208193164998_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=GXhvLky0F5cQ7kNvgEP_YQl&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=ABqeMa63CmHgQu2_VsIwHkj&oh=00_AYDGuKpSP8dqvBtKnPBbt6eEtXH28SFp_syocd-atN0MiQ&oe=6717E0F3",
    "牛肉麵" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463745293_2993752877473641_1082203314847522896_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=a7IbdNx2RJ0Q7kNvgE12Ka_&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=A1Zv4GVld63Sqk6LVjQN4ea&oh=00_AYBsFeVXu8-dbzZ8JHMqIHa75gYvOUPCe7e2hrB5LpxLGQ&oe=6717CDE5",
    "牛汶水" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463665664_2993752900806972_3039213590378648225_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=r2IiUkNbHnUQ7kNvgF0_kh-&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AVnrQU8cyfNiCbasrGzs85m&oh=00_AYAt8ztgozsKEVFM886H3FC-5JtEIypQJj4hRnAPfvY9bw&oe=6717FE08",
    "牛排" :"https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/463930195_2993752934140302_2690708571947041102_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=J6Zf1piNTQsQ7kNvgHF8wfV&_nc_zt=23&_nc_ht=scontent.ftpe8-1.fna&_nc_gid=AAMNQx0TTL0H7FZGvugpDAM&oh=00_AYBd-ZqSl6isbUoj9tl5I41KX9oLTmBI5TIfn6ionQTX7w&oe=6717FA3E",
    "生魚片" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463789155_2993753054140290_6281591969599256816_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=1i_nwE13yIgQ7kNvgHZkgIk&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=Al0jaCGWzNDI4aM8mUwqiYR&oh=00_AYCvUlsWQq-D5dRd_zppkwczzrGgUt3XfHny_UZWHWpgrg&oe=6717D238",
    "冰" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463780679_2993753067473622_2034739526831788538_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=C0Wq_k8BymYQ7kNvgG3SSKh&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AATe9O9oBtSAT5GPtte9XzL&oh=00_AYCehjtlQHWqin9L8cMTKuB7kc-5g1--u7HAUTp1q803Lw&oe=6717D288",
    "印度菜" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463727154_2993753160806946_2329771040687062609_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=XGNF3oA9NdMQ7kNvgHZTioU&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=Aui0evi2uzLRB1A9ljkJdvt&oh=00_AYDXVfZpF_LXfsZ_DtUxZ8WFY5F2c2paGD7xwfAGvXdZ7g&oe=6717FD67",
    "肉夾饃" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463655934_2993753330806929_5698153166498806288_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=N6uDoNE_08MQ7kNvgFR92AJ&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=A-37JfhpRBVR_zcG__SZhCI&oh=00_AYAvIwLVn8ndqDjyehLwCSGW4Kdayww9kce8nx5dC4hMtA&oe=6717F84D",
    "肉圓" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463865311_2993753334140262_1124838876959020885_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=nTkA3yE3EG0Q7kNvgEZ5CXo&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AndxPuK9P7IXrX02er2l0o7&oh=00_AYD9WkVbHsvje1LaFvpRxlyW0n_im2OomxBp-AdjhEClww&oe=6717E94F",
    "肉粿" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463630990_2993753280806934_6342660870296415615_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=P8KRHdBydXEQ7kNvgFkdd9m&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=ASzdQuTX8m5UVizpNCYlYT8&oh=00_AYCbY3AVpVx5Z4pzxUaN8meZYoixZRZx4ZO3pwWiI4IYgQ&oe=6717D12F",
    "西班牙菜" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463780358_2993753377473591_3357420914792692970_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=rBV8MxOLbQwQ7kNvgE0GMxk&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AKX5C8mKYqL3-6hL2Kfezki&oh=00_AYBWqaJiJBHQRHKO2F8Z9aJGZscmN_KWnCF10ANXNca0Tg&oe=6717D2C4",
    "拉麵" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463668916_2993753514140244_1142087378277911714_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=k5LvKA0leG0Q7kNvgEz2JX1&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=A3n2DO_gAxi_czqeZigo2zD&oh=00_AYBZaX4rbsFAX1P5DfZuDk-hbXsXulfD4nFUqnj7ADXveQ&oe=6717DBAF",
    "炒飯" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463614234_2993753520806910_5850696700441423970_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=v6JvsEygBhwQ7kNvgFLomEc&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=AiUQUwwFRF73UBjtD8-be4F&oh=00_AYCwtzGhWdPj0nV59f1Db8t3m3Wdjiv0xAgYpoVege5fLA&oe=6717EB86",
    "炸肉圓" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463748869_2993753617473567_6179242416550782338_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=s5PhjF6ykfQQ7kNvgHQRRIo&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=APOGEaHtuLIzHK_xWhQD5w7&oh=00_AYBjhO4YaECQeHsn71UDZ2sMR_ntvDgfdq3oZ2m84Qp40g&oe=6717DB21",
    "炸物" :"https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/463967149_2993753760806886_1886876629272871762_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=o49cmf1gD68Q7kNvgFka01C&_nc_zt=23&_nc_ht=scontent.ftpe8-1.fna&_nc_gid=AgVkN7UZQYmLbiFaBA3uyYV&oh=00_AYA7NCxQzr-5M_bfuOQr296AOnvIxzJ22OXgqABhdwEYTg&oe=6717DA66",
    "炸臭豆腐" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463748502_2993753674140228_3363620512908732360_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=jHchmdB93EAQ7kNvgGc7-Lm&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AX0e_OAcBEKI7jv86B2Y1BN&oh=00_AYCupG2xnCpHP4t2e5k17onrckD3XXJU8pDoJU9Fe_mN0Q&oe=6717E443",
    "紅豆湯圓" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463655883_2993753777473551_7265885691341576421_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=edON_3nRhO8Q7kNvgFzedBW&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=A8St880hgvznj7yEuSUsRjQ&oh=00_AYCU_rpezpvy0NCWEBMFW64tYkW-6uae_tt_e-ilehr2Wg&oe=6717DA27",
    "泰國菜" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463789190_2993753904140205_6894869838275410968_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=InmOK9Gfk9YQ7kNvgFDUgBf&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AvZLtavqGbCaLXgHidpC4eB&oh=00_AYCKGsp6xBkEeJzhgCWAfAPh0C4Jt8sk4Ea_jQuhyCPWew&oe=6717FEF7",
    "海南雞飯" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463720203_2993753934140202_5285036213275351002_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Z2sIUatDJXkQ7kNvgFixK_q&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AV7I_an1_v-G2sMGQmQkisC&oh=00_AYCtgZD7hM1VGhC6QMdI9vZq0yJ2uPbgGubDZuTnS4NoRA&oe=6717FF82",
    "海鮮丼" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463834681_2993753957473533_239788125610215616_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=FWNTiWyXYTAQ7kNvgFkx2hx&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=A1En9rwruLoJ-wRFFjY3XxZ&oh=00_AYBQjFujF50uhSZRdwsRPBcDuVHTrQPKHK6mm831foni0w&oe=6717F4AF",
    "烤生蠔" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463847471_2993754094140186_6222110546419090336_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=UREYolKWN94Q7kNvgEETDaL&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AcI-H3Ou9DOBwxdqEiJ48BR&oh=00_AYCgTrn6q6To1j2Ey-Zf9-CLb-w0D9erCJCXBlUVXfTAMA&oe=6717EA48",
    "烤肉" :"https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/463738270_2993754200806842_3783506944548640559_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=JD-VteRGqygQ7kNvgFfk-bI&_nc_zt=23&_nc_ht=scontent.ftpe8-1.fna&_nc_gid=AwU1CvSw11pse_Ih1pow7aX&oh=00_AYDyFzcW9eLu62WeZ8ScK3fXiz-elUObSrIKrsDdEsP2OQ&oe=6717DAA7",
    "麥當勞" :"https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/463749963_2993754074140188_5569871791299815390_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=w6Vkg7Fl2L8Q7kNvgGNDYAF&_nc_zt=23&_nc_ht=scontent.ftpe8-1.fna&_nc_gid=A9lO8xao1JHaIgQuYFP5BOd&oh=00_AYAtz6-66WJP--kT01empdfEoN-zKvMdvt1hizTMCSFASg&oe=6717E16D",
    "麻油雞" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463755694_2993754354140160_5492460113119431587_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=0JXr9y9te20Q7kNvgEHy6An&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AvNiPlV3pm3JGcRSRoX_AOx&oh=00_AYCHBz4Z6ScS6YQ_yA4Oi8xGiaYm7tVSa88vyqi8zhVF3Q&oe=6717D871",
    "麻辣臭豆腐" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463873663_2993754254140170_2418486519123598701_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=YeAASVneTBAQ7kNvgGpR3LA&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AYQQUuB8KhipS0RTHg-Aq5q&oh=00_AYBDLiPgf3q6fan2gUFPdo-H6c8yVG76ktf7s6qULuctwA&oe=6717EFCE",
    "義大利麵" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463649715_2993754380806824_995606620927874475_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=n9oHlnmSdGsQ7kNvgFiRqFF&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=AmPJqJKRHaeSNuJR-O1oht8&oh=00_AYAi1pKhFmYuivhCmuFHaVenpzkeYS8pMJKtqIF0p8R3jA&oe=67180357",
    "鼎泰豐" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463904645_2993754487473480_6118836968928639950_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=62wwLfHtmNsQ7kNvgFFUyJ0&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=Ak-6RJV5fFuzuI-u8GBxL5h&oh=00_AYCYev_AG-YNU0fbQpJ6qVFoohTADsbbAAEQ5cSFEJ7Onw&oe=6717E874",
    "滷肉飯" :"https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/463746384_2993754524140143_5249865655653749802_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=FsBTcIRdheMQ7kNvgEDMdMN&_nc_zt=23&_nc_ht=scontent.ftpe8-3.fna&_nc_gid=ATZhbBmpmPnpdZIQqGclJ0V&oh=00_AYCJgzBxYDUrwd4DEEAKA9CU899A6sRNebAyK-ZsW2B1Qg&oe=6717E7F6",
    "蒸餃" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463614664_2993754630806799_5662781432764856186_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=GtcAhn1Pt8MQ7kNvgHnP-NA&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AJXtZrNsBNzUOuf4GUk-fQw&oh=00_AYAvRaMEeHpD-3wj_19tsbr6MRSld9yzynd9vc9Unce-Sg&oe=6717EBE4",
    "燉飯" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463738222_2993754664140129_9172949789016154375_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Ty8Q-2lBfuAQ7kNvgGb7g7x&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AlPy4hvhsuHRJTtBNwuK6AH&oh=00_AYCVkX_xwMRMHYnd4YADlnOw1nOE6w87sSt82VTNtsttDg&oe=6717CF86",
    "薯條" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463740869_2993754717473457_3901846174588806195_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Pq3ZU1JVxREQ7kNvgHCDIop&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AbCRpmU9QuyWQ8YmiKTtxD7&oh=00_AYBQVJUZe7yH2jHAl0580mUYSd9FYt-_gEKmqr4i3xMmng&oe=6717D29F",
    "韓式料理" :"https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/463657447_2993754710806791_907500870339881518_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=BhuZNJmZLVoQ7kNvgFR_zKT&_nc_zt=23&_nc_ht=scontent.ftpe8-2.fna&_nc_gid=AD4XCB9R8oJ4cfHhBX1DZ1q&oh=00_AYCD7IbmM-Xx6QBppyHO39Zd9Ks0-O0jhsFzICtEQ2SDJg&oe=6717EC94",
    "雞蛋糕" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463666052_2993754837473445_2935918891627468882_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Hc4rsmjAwUUQ7kNvgHXsTx9&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AoL7R_HVAkCt6kZiI7W7y4H&oh=00_AYAXtPE_ZswKXu8wWGc-Jzl7-MYz5tCBbdnvLH9BKWrjOw&oe=6717D77C",
    "鰻魚飯" :"https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/463626401_2993754977473431_6319966975214077938_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=zvYiwqkIRzQQ7kNvgGBbZ_c&_nc_zt=23&_nc_ht=scontent.ftpe8-1.fna&_nc_gid=AYMkpTkXRcsEPhdbR5JhloK&oh=00_AYBlRvJ0yQ67-UOvZNJeuiWR9iuvhNhlvI1-RJApk6Sc0w&oe=6717D191",
    "蘿蔔糕" :"https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/463626171_2993754974140098_6611675743434029207_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=TFtd1Nhm1xUQ7kNvgEGzgGH&_nc_zt=23&_nc_ht=scontent.ftpe8-4.fna&_nc_gid=AF1aen-Dl4QueMKXaJhsMG0&oh=00_AYBY9YvPQRyA-8poS_BzBBD5dem2u-6rGpi_4m1RmKZuXA&oe=6717DC78"
};

function selectRandomShop() {
    const randomIndex = Math.floor(Math.random() * drinkShops.length);
    const selectedShop = drinkShops[randomIndex];

    document.getElementById('result').textContent = `今天就去 ${selectedShop} 吧！`;
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
