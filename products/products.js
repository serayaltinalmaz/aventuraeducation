const products =
    [
        {
            "id": 1,
            "productName": "Bread - Ciabatta Buns",
            "productCategory": "Finance",
            "productDesc": "interdum in ante vestibulum ante ipsum primis in faucibus orci luctus",
            "isHot": true,
            "productPic": "http://dummyimage.com/250x250.png/ff4444/ffffff",
            "currentPrice": 3174,
            "oldPrice": 1252,
            "count": 0,
        },
        {
            "id": 2,
            "productName": "Ham - Virginia",
            "productCategory": "Finance",
            "productDesc": "ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum",
            "isHot": true,
            "productPic": "http://dummyimage.com/250x250.png/dddddd/000000",
            "currentPrice": 3904,
            "oldPrice": 1363,
            "count": 0,
        },
        {
            "id": 3,
            "productName": "Soup - Campbells Beef Noodle",
            "productCategory": "Technology",
            "productDesc": "etiam faucibus cursus urna ut tellus nulla ut erat id mauris",
            "isHot": false,
            "productPic": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
            "currentPrice": 2692,
            "oldPrice": 1308,
            "count": 0,
        },
        {
            "id": 4,
            "productName": "Lamb - Leg, Boneless",
            "productCategory": "n/a",
            "productDesc": "morbi odio odio elementum eu interdum eu tincidunt in leo maecenas",
            "isHot": true,
            "productPic": "http://dummyimage.com/250x250.png/ff4444/ffffff",
            "currentPrice": 3155,
            "oldPrice": 1135,
            "count": 0,
        },
        {
            "id": 5,
            "productName": "Sauce - Thousand Island",
            "productCategory": "Energy",
            "productDesc": "in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus",
            "isHot": true,
            "productPic": "http://dummyimage.com/250x250.png/dddddd/000000",
            "currentPrice": 5094,
            "oldPrice": 1427,
            "count": 0,
        },
        {
            "id": 6,
            "productName": "Broom And Brush Rack Black",
            "productCategory": "Finance",
            "productDesc": "orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum",
            "isHot": false,
            "productPic": "http://dummyimage.com/250x250.png/cc0000/ffffff",
            "currentPrice": 3447,
            "oldPrice": 1249,
            "count": 0,
        },
        {
            "id": 7,
            "productName": "Crackers - Trio",
            "productCategory": "n/a",
            "productDesc": "auctor sed tristique in tempus sit amet sem fusce consequat nulla",
            "isHot": false,
            "productPic": "http://dummyimage.com/250x250.png/cc0000/ffffff",
            "currentPrice": 3453,
            "oldPrice": 1337,
            "count": 0,
        },
        {
            "id": 8,
            "productName": "Tea - Earl Grey",
            "productCategory": "Consumer Non-Durables",
            "productDesc": "magna at nunc commodo placerat praesent blandit nam nulla integer pede",
            "isHot": true,
            "productPic": "http://dummyimage.com/250x250.png/dddddd/000000",
            "currentPrice": 1679,
            "oldPrice": 1273,
            "count": 0,
        },
        {
            "id": 9,
            "productName": "Bacardi Raspberry",
            "productCategory": "Consumer Non-Durables",
            "productDesc": "leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus",
            "isHot": true,
            "productPic": "http://dummyimage.com/250x250.png/ff4444/ffffff",
            "currentPrice": 2122,
            "oldPrice": 1038,
            "count": 0,
        },
        {
            "id": 10,
            "productName": "Appetizer - Shrimp Puff",
            "productCategory": "Basic Industries",
            "productDesc": "dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis",
            "isHot": true,
            "productPic": "http://dummyimage.com/250x250.png/dddddd/000000",
            "currentPrice": 3441,
            "oldPrice": 1070,
            "count": 0,
        }
    ]
let container = document.getElementById("container");
let sepet = [];
let badge = document.querySelector("#badge");
let sidebar = document.querySelector(".sidebar-container");
let toggle = false
let sayac = 0;
let sidebarbutton = document.querySelector(".sidebar-button");


if (sepet.length === 0) {
    badge.style.display = "none";
}

function basketcomponent(urun) {
    let sdiv = document.createElement("div");
    sdiv.className = "sdiv";
    let img2 = document.createElement("img");
    img2.className = "img2";
    let isim = document.createElement("h1");
    isim.className = "isim";
    let fiyat2= document.createElement("p");
    let adet = document.createElement("p");
    fiyat2.innerHTML=urun.currentPrice+"TL";
    adet.innerHTML = urun.count + " adet";
    img2.src = urun.productPic;
    isim.innerHTML = urun.productName
    sdiv.appendChild(img2);
    sdiv.appendChild(isim);
    sdiv.appendChild(adet);
    sdiv.appendChild(fiyat2);
    sidebar.appendChild(sdiv);
}
function component(urun) {
    let newdiv = document.createElement("div");
    newdiv.className = "card";
    let img = document.createElement("img");
    img.className = "img";
    let detail = document.createElement("div");
    detail.className = "card-detail";
    let h1 = document.createElement("h1");
    h1.className = "bas";
    let p = document.createElement("p");
    p.className = "ack";
    let fiyat= document.createElement("p");
    let button = document.createElement("button");
    button.className = "ekle";
    img.src = urun.productPic;
    h1.innerHTML = urun.productName
    p.innerHTML = urun.productDesc;
    fiyat.innerHTML=urun.currentPrice+"TL";
    newdiv.appendChild(img);
    newdiv.appendChild(detail);
    detail.appendChild(h1);
    detail.appendChild(p);
    detail.appendChild(fiyat);
    detail.appendChild(button);
    container.appendChild(newdiv);
    button.innerHTML = "Sepete Ekle";
    button.addEventListener("click", function (e) {
        let urunler = sepet.find(item => item.id === urun.id);
        console.log(urunler)
        if (urunler === undefined) {
            sepet.push(urun);
            sepet[sepet.length - 1].count = 1;
            basketcomponent(urun);
        } else {
            sepet.forEach(sepeturun => {
                if (urun.id === sepeturun.id) {
                    sepeturun.count++;
                }
            });
        };
        sidebar.innerHTML = "";
        sepet.map((sepeturun, index) => {
            basketcomponent(sepeturun);
        })
        toplam();
        console.log(sepet);
        sayac=0;
        sepet.forEach(urun => {
            sayac += urun.count
        });
        badge.innerHTML = sayac;
        if (sepet.length > 0) {
            badge.style.display = "flex";
        }
    });
    return newdiv;
}
products.forEach(function (product) {
    container.appendChild(component(product));
});

function ac() {
    if (toggle === true) {
        sidebar.style = "right: -200px;"
        sidebarbutton.style = "right:20px;"
        toggle = false
    }
    else {
        sidebar.style = "right: 0px;"
        sidebarbutton.style = "right:225px;"
        toggle = true
    }
    //console.log(toggle)
}

function toplam(){
    let toplamfiyat=document.createElement("p");
    toplamfiyat.className = "toplamfiyat";
    let tfiyat=0;
    sepet.forEach(fiyat => {
        if(fiyat.count>1){
            tfiyat += (fiyat.count * fiyat.currentPrice);
        }
        else{
            tfiyat += fiyat.currentPrice;
        }
    });
    toplamfiyat.innerHTML="Sepet tutarı: "+ tfiyat +" TL";
    sidebar.appendChild(toplamfiyat);
}




