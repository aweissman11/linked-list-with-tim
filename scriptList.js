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
// var readStyle = ?????
var linkCount = 0;
// var readLinkCount = ????
// var unreadLinkCount = ????
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

// ==============================================================
// Event Listeners
// ==============================================================

enterBtn.addEventListener('click', createBookmark);
enterBtn.addEventListener('click', countTheLinks);

clearLinksBtn.addEventListener('click', clearAllLinks);
document.querySelector('#new-books').addEventListener('click', function(event) {
  if (event.target.className === 'delete-btn') {
    event.target.parentNode.remove();
  }
});

document.querySelector('header').addEventListener('click', function(event) {
  if (event.target.className === 'clear-all-links') {
    clearAllLinks(e);
  }
});

document.querySelector('#new-books').addEventListener('click', function(event) {
  if (event.target.classList.contains('read-btn')) {
    event.target.classList.toggle('read');
    event.target.parentNode.classList.toggle('read');
    countTheLinks();
  }
});


siteUrl.addEventListener('keyup', disableEnterBtn); 
siteTitle.addEventListener('keyup', disableEnterBtn);


// ==============================================================
// Functions
// ==============================================================

var linkList = document.querySelector('.mark-grid');
=======

function clearAllLinks(e) {
  e.preventDefault();
  readBtn = document.querySelectorAll('.read-btn');
  for (i = 0; i < readBtn.length; i++) {
    readBtn[i].parentNode.remove();
  }
}

function countTheLinks() {
  var totalLinkCount = document.querySelectorAll('.read-btn').length;
  var readLinkCount = document.querySelectorAll('.read').length / 2;
  var unreadLinkCount = totalLinkCount - readLinkCount;
  console.log("Total count: " + totalLinkCount);
  console.log("Read count: " + readLinkCount);
  console.log("Unread count: " + unreadLinkCount);
}


// still need to make the new URL clickable
function createBookmark(e) {
  if (checkForInput(e) === true) {
    var newSite = document.createElement('h5');
    var newArticle = document.createElement('article');
    // newArticle.className = 'new-bookmarks';
    newSite.className = 'website-title-display';
    var newUrl = document.createElement('a');
    newUrl.className = 'website-link-display';
    // the link above needs to be made clickable.
    var newSiteTitle = document.createTextNode(siteTitle.value);
    var newSiteUrl = document.createTextNode(siteUrl.value);

    newSite.appendChild(newSiteTitle);
    newArticle.appendChild(newSite);
    newUrl.appendChild(newSiteUrl);
    newArticle.appendChild(newUrl);

    var newBooks = document.getElementById('new-books')
    newBooks.prepend(newArticle);
    // newBooks.style.visibility = 'visible';

    var newReadBtn = document.createElement('button');
    var newReadBtnValue = document.createTextNode('Read');
    newReadBtn.className = 'read-btn';
    newReadBtn.appendChild(newReadBtnValue);

    var newDeleteBtn = document.createElement('button');
    var newDeleteBtnValue = document.createTextNode('Delete');
    newDeleteBtn.className = 'delete-btn';
    newDeleteBtn.appendChild(newDeleteBtnValue);

    newArticle.appendChild(newReadBtn);
    newArticle.appendChild(newDeleteBtn);

    var exampleBookmarks = document.getElementsByClassName('example-bookmark');

    // linkCount++;
  }
  // siteTitle.value = '';
  // siteUrl.value = '';
};


// Right now this is useless code because I have it so that
// the enter button is disabled if there is no input.
// I want to keep it here for now though because I think I will
// use it to create a check for a valid URL
function checkForInput(e) {
  e.preventDefault();
  if (siteTitle.value.length === 0) {
    window.alert('Please enter a website name');
    return false;
  } else if (siteUrl.value.length === 0) {
    window.alert('Please enter a URL');
    return false;
  } else {
    return true;
  }
}

function disableEnterBtn(e) {
  if (siteTitle.value.length === 0 || siteUrl.value.length === 0) {
    enterBtn.disabled = true;
  } else {
    enterBtn.disabled = false;
  }
};

// URLs need to be clickable
// The application should be responsive and work equally well on desktop and mobile.

// The application should be able to keep count of the total number of links currently on the page.
// The application should be able to keep count of the total number of read and unread links currently on the page.

// Add a “Clear Read Bookmarks” button which clears all the read bookmarks when clicked.
// The user should not to be able to add a URL that isn’t valid.















