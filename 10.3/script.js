const wsUrl = 'wss://echo-ws-service.herokuapp.com'

const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');
const sendBtn = document.querySelector('#send-btn');
const chatMessage = document.querySelector('#chat-message');

const sendBtnGeo = document.querySelector('#send-btn-geo');
const statusGeo = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');

const chatBody = document.querySelector('.chat__body');
const chatOpen = document.querySelector('.chat-open');

let websocket;

function writeToScreen(message) {
   let pre = document.createElement('div');
   pre.classList.add('chat__content-message');
   pre.innerHTML = message;
   chatMessage.appendChild(pre);
}

openBtn.addEventListener('click', () => {
   chatBody.classList.toggle('display')
   chatOpen.classList.toggle('display');


   websocket = new WebSocket(wsUrl);
   websocket.onmessage = function(evt) {
      writeToScreen (
         '<span class="chat__content-text">' + evt.data+ '</span>'
      );
   };
   websocket.onerror = function(evt) {
      writeToScreen(
         '<span class="chat__content-text">ERROR</span>'+ evt.data
      );
   };
});

closeBtn.addEventListener('click', () => {
   chatBody.classList.toggle('display')
   chatOpen.classList.toggle('display');

   websocket.close();
   websocket = null;
});

sendBtn.addEventListener('click', () => {
   const message = document.getElementById('message').value;
   writeToScreen(message);
   websocket.send(message);
});

async function position() {
   const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
   });
   const long =  pos.coords.longitude;
   const lat =  pos.coords.latitude;

   chatMessage.innerHTML = `
   <div class="chat__content-message">
      <a href="https://www.openstreetmap.org/#map=18/${lat}/${long}" id="map-link" target="_blank">Ссылка на карту</a>
   </div>
   `;
}

sendBtnGeo.addEventListener('click', () => {
   writeToScreen(position());
});