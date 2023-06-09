import axios from 'axios';
import './bootstrap';

const form = document.getElementById('form');
const inputMessage = document.getElementById('input-message');
const listMessage = document.getElementById('list-message');

form.addEventListener('submit',function(event){
    event.preventDefault();
    const userInput = inputMessage.value;

    axios.post('chat-message',{
        message: userInput
    });
});

const channel = Echo.channel('public.playground.1');

channel.subscribed(() => {
    console.log('subscribed');
}).listen('.playground', (event) => {
    console.log(event);
    const message = event.message;

    const li = document.createElement('li');

    li.textContent = message;

    listMessage.append(li);
});
