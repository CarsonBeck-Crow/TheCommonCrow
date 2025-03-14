function menuFunction() {
    let x = document.getElementById("main-menu");
    if (x.className === "menu") {
        x.className+= "responsive";
    }
    else {
        x.className = "menu";
    }
}

import {posts} from '/scripts/posts.js';

document.addEventListener("DOMContentLoaded", () => {
    const recentContainer = document.querySelector("#recent-posts");

    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    const recentPosts = sortedPosts.slice(0, 3);

    recentPosts.forEach((post) => {
        let postElement = `
        <div class="recent-posts">
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <a href="${post.url}">
                <h2>${post.title}</h2>
                <p>${post.date}</p>
                <p>${post.excerpt}</p>
            </a>
        </div>
        `;
        recentContainer.insertAdjacentHTML("beforeend", postElement);
    });
});