


// read button changes that 'article' to the .read class
// delete button deletes the whole 'article'

// ==============================================================
// Universal Variables
// ==============================================================

var siteTitle = document.querySelector('.website-title-input');
var siteUrl = document.querySelector('.url-input');
var enterBtn = document.querySelector('.enter-btn');
var siteDisplay = document.querySelector('.website-title-display');
var urlDisplay = document.querySelector('.website-link-display');
var readBtn = document.querySelector('.read-btn');
var deleteBtn = document.querySelector('.delete-btn');
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
// readBtn.addEventListener('click', displayAsRead);

siteUrl.addEventListener('keyup', disableEnterBtn); 
siteTitle.addEventListener('keyup', disableEnterBtn);



// ==============================================================
// Functions
// ==============================================================


//displayAsRead should:
// change the style of the current article so that it reflects the correct comp styles
// change the background color of that article
// change the text color of the actual 'read' button
// change the color of the underlines
// increment the total number of readLinkCount by one
// decrease the total number of unreadLinkCount by one
// Is it possible to just change the class name to dry things up?

// function displayAsRead(e) {
//   e.preventDefault();
//   newArticle.style.background = '#F2F4F4';???
//   newArticle.className = 'read-bookmarks';???
// }

//deleteBookmark should:
// maybe just hide the bookmark using display: none?
// increment a new var of deleted bookmarks
// decrease the total linkCount
//

//Create bookmark should:
// take site title input
// take site url input
// create a new bookmark 'article' element
// with the site title, url and the two buttons
// Those buttons need to work the same as all the others...


// still need to make the new URL clickable
function createBookmark(e) {
  if (checkForInput(e) === true) {
    var newSite = document.createElement('h5');
    var newArticle = document.createElement('article');
    // newArticle.className = 'new-bookmarks';
    newSite.className = 'website-title-display';
    var newUrl = document.createElement('a');
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
    if (linkCount < 5) {
      for (x = 0; x < linkCount; x++) {
        exampleBookmarks[x].style.display = 'none';
      }
    };
    linkCount++;
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



// Specification
// In it’s simplest form, the application should have the following:

// Two input fields
// One for the title of the bookmark
// One for the URL that the bookmark should link to
// One button for creating the bookmark and adding it to the page
// A section for all of the created bookmarks; each bookmark should display:
// The title of the bookmark
// The URL of the bookmark (this should be clickable and link to the URL)
// A button to “Mark as Read”
// A button to “Remove” the bookmark


// Phase One
// The user should be able to input a title and URL into the appropriate fields
// When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section
// When the user clicks on the “Mark as Read” button:
// A class of .read should be added to the bookmark
// If it already has the class of .read, it should be removed
// When the user clicks on the “Remove” button, the link should be removed from the page


// Phase Two
// If the user omits the title or the URL, the application should not create the link and should instead display an error.
// The application should be responsive and work equally well on desktop and mobile.


// Phase Three
// The button for creating links should be disabled if there are no contents in the title or URL fields.
// The application should be able to keep count of the total number of links currently on the page.
// The application should be able to keep count of the total number of read and unread links currently on the page.


// Phase Four: The Project Strikes Back
// Add a “Clear Read Bookmarks” button which clears all the read bookmarks when clicked.
// The user should not to be able to add a URL that isn’t valid.




















