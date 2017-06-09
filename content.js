function hide(account) {
    var posts = document.getElementsByTagName("article");

    for (var post of posts)
        if (post.firstChild.children[1].children[0].textContent == account)
            post.style = "display:none;";
}
