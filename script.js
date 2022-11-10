post_author = window.prompt("Post author: ");
post_content = window.prompt("Post content: ");
post_likes = window.prompt("Post likes:(not working) ");
post_bookmarks = window.prompt("Post bookmarks:(not working) ");

document.getElementById("author").innerHTML = "@"+post_author;
document.getElementById("content").innerHTML = post_content;