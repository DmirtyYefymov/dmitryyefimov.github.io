'use strict';

window.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

let comments = [];

document.getElementById('comment-add').onclick = function() {
	event.preventDefault();
	let commentBody = document.getElementById('comment-body');
	
	let comment = {
		body : commentBody.value,
		time : Date.now()/1000
	};
	commentBody.value = '';
	comments.push(comment);
	showComments();
};

function showComments() {
	let commentField = document.getElementById('comment-field');
	let out = '';
	comments.forEach(function(item){
		out += `<div class="fans_text">${item.body}</div>`;
		out += `<div class="fans_time">${timeConverter(item.time)}</div>`;	
	});
	commentField.innerHTML = out;
}
    
function timeConverter(unixTimestamp){
    let a = new Date(unixTimestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}



