import {posts} from "/scripts/posts.js";

document.addEventListener("DOMContentLoaded", () => {
    const archiveContainer = document.querySelector("#archive-list");

    if (!archiveContainer) {
        console.error("Archive Container not found!");
        return;
    }

    if (typeof posts === "undefined" || !Array.isArray(posts)) {
        console.error("Posts array is missing or not found!");
        return;
    }

    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedPosts.forEach((post) => {
        let postElement = `
       <div class="archive-list">
       <ul>
            <li><a href="${post.url}">
                <p class="date-list">${post.date}</p>
                <p class="arc-t">${post.title}</p>
            </a></li>
       </ul>
       </div>
       `;
        archiveContainer.insertAdjacentHTML("beforeend", postElement);
    });
});