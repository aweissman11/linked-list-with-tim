// ==============================================================
// Universal Variables
// ==============================================================

var siteTitle = document.querySelector('.website-title-input');
var siteUrl = document.querySelector('.url-input');
var enterBtn = document.querySelector('.enter-btn');
var siteDisplay = document.querySelector('.website-title-display');
var urlDisplay = document.querySelector('.website-link-display');
var readBtn = document.querySelectorAll('.read-btn');
var deleteBtn = document.querySelector('.delete-btn');
var clearLinksBtn = document.querySelector('.clear-all-links');
var clearReadBtn = document.querySelector('.clear-read-links');
var linkCount = 0;
var newArticle;
var newSite;
var newUrl;
var newSiteTitel;
var newSiteUrl;
var exampleBookmarks;
var newReadBtn;
var newReadBtnValue;
var newDeleteBtn;
var newDeleteBtnValue;
var linkList = document.querySelector('.mark-grid');

// ==============================================================
// Page Load
// ==============================================================

countTheLinks();

// ==============================================================
// Event Listeners
// ==============================================================

enterBtn.addEventListener('click', createBookmark);
enterBtn.addEventListener('click', countTheLinks);
clearReadBtn.addEventListener('click', clearReadLinks);

document.querySelector('section').addEventListener('click', function(event) {
  if (event.target.className === 'delete-btn') {
    event.target.parentNode.remove();
    countTheLinks();
  }
});

document.querySelector('section').addEventListener('click', function(event) {
  if (event.target.classList.contains('read-btn')) {
    event.target.classList.toggle('read');
    event.target.parentNode.classList.toggle('read');
    event.target.parentNode.classList.toggle('remove');
    countTheLinks();
  }
});

siteUrl.addEventListener('keyup', disableEnterBtn); 
siteTitle.addEventListener('keyup', disableEnterBtn);

// ==============================================================
// Functions
// ==============================================================

function clearReadLinks(e){
  e.preventDefault();
  var elements = document.getElementsByClassName('remove');
  console.log('removes: ' + elements.length);
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
  countTheLinks();
};

function countTheLinks() {
  var totalLinkCount = document.querySelectorAll('.read-btn').length - document.querySelectorAll('.example-bookmark').length;
  var readLinkCount = document.querySelectorAll('.read').length / 2;
  var unreadLinkCount = totalLinkCount - readLinkCount;
  if (unreadLinkCount <= 0) {
    unreadLinkCount = 0;
  };
  // console.log("Total count: " + totalLinkCount);
  // console.log("Read count: " + readLinkCount);
  // console.log("Unread count: " + unreadLinkCount);
  document.querySelector('.article-count').innerHTML = "N# of Articles: " + totalLinkCount;
  document.querySelector('.read-article-count').innerHTML = "N# of Read: " + readLinkCount;
  document.querySelector('.unread-article-count').innerHTML = "N# of Unread: " + unreadLinkCount;
}

function createBookmark(e) {
  if (checkForInput(e, siteUrl.value) === true) {
    var newSite = document.createElement('h5');
    var newArticle = document.createElement('article');
    var newUrl = document.createElement('a');
    var newSiteTitle = document.createTextNode(siteTitle.value);
    var newSiteUrl = document.createTextNode(siteUrl.value);
    var newBooks = document.getElementById('new-books')
    var newReadBtn = document.createElement('button');
    var newReadBtnValue = document.createTextNode('Read');
    var newDeleteBtn = document.createElement('button');
    var newDeleteBtnValue = document.createTextNode('Delete');
    var exampleBookmarks = document.getElementsByClassName('example-bookmark');
    siteTitle.value = '';
    siteUrl.value = '';
    newSite.className = 'website-title-display';
    newUrl.className = 'website-link-display';
    newUrl.href = "https://www." + siteUrl.value;
    newUrl.target = "_blank";
    newUrl.appendChild(newSiteUrl);
    newSite.appendChild(newSiteTitle);
    newBooks.prepend(newArticle);
    newReadBtn.className = 'read-btn';
    newReadBtn.appendChild(newReadBtnValue);
    newDeleteBtn.className = 'delete-btn';
    newDeleteBtn.appendChild(newDeleteBtnValue);
    newArticle.appendChild(newSite);
    newArticle.appendChild(newUrl);
    newArticle.appendChild(newReadBtn);
    newArticle.appendChild(newDeleteBtn);
    if (linkCount < 5) {
      for (x = 0; x < linkCount; x++) {
        exampleBookmarks[x].style.display = 'none';
      }
    };
    linkCount++;
  }
};

function checkForInput(e, str) {
  e.preventDefault();
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else if (siteTitle.value.length === 0) {
    window.alert('Please enter a website name');
    return false;
  } else if (siteUrl.value.length === 0) {
    window.alert('Please enter a URL');
    return false;
  } else {
    window.alert('Please enter a valid url');
    return false;
  }
}

function disableEnterBtn(e) {
  if (siteTitle.value.length === 0 || siteUrl.value.length === 0) {
    enterBtn.disabled = true;
  } else {
    enterBtn.disabled = false;
  }
};
















