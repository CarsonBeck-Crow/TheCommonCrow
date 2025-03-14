import {recommendedBooks} from "/scripts/recommended.js";
import {recommendedVideos} from "/scripts/recommended.js";
import {recommendedPodcasts} from "/scripts/recommended.js";
import {recommendedArticles} from "/scripts/recommended.js";

document.addEventListener("DOMContentLoaded", () => {
    const articleContainer = document.querySelector("#article-list");
    const videoContainer = document.querySelector("#video-list");
    const podcastContainer = document.querySelector("#pod-list");
    const bookContainer = document.querySelector("#book-list");

    const sortRecArt = recommendedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    const sortRecVid = recommendedVideos.sort((a, b) => new Date(b.date) - new Date(a.date));
    const sortRecPod = recommendedPodcasts.sort((a, b) => new Date(b.date) - new Date(a.date));
    const sortRecBook = recommendedBooks.sort((a, b) => new Date(b.date) - new Date(a.date));

   /* sortRecArt.forEach((article) => {
        let artElement = `
        <div class="article-list">
        <ul>
            <a href="${article.url}">
                <li>
                    <p class="articles">${article.article}</p>
                </li>
                <p class="article-author">By ${article.author}</p>
                <p class="date-list">${article.date}</p>
            </a>
        </ul>
        </div>
        `;
        articleContainer.insertAdjacentHTML("beforeend", artElement);
    });
    sortRecVid.forEach((video) => {
        let bookElement = `
        <div class="video-list">
        <ul>
            <a href="${video.url}">
                <li>
                    <p class="videos">${video.video}</p>
                </li>
                <p class="creators">${video.creator}</p>
                <p class="date-list">${video.date}</p>
            </a>
        </ul>
        </div>
        `;
        videoContainer.insertAdjacentHTML("beforeend", bookElement);
    });
    sortRecPod.forEach((pod) => {
        let podElement = `
        <div class="pod-list">
        <ul>
            <a href="${pod.url}">
                <li>
                    <p class="podcasts">${pod.podcast}</p>
                </li>
                <p class="episodes">${pod.episode}</p>
                <p class="date-list">${pod.date}</p>
            </a>
        </ul>
        </div>
        `;
        podcastContainer.insertAdjacentHTML("beforeend", podElement);
    });*/
    sortRecBook.forEach((book) => {
        let bookElement = `
        <div class="book-list">
        <ul>
            <a href="${book.url}" target="_blank" rel="noopener noreferrer">
                <li>
                    <p class="bookTitle">${book.book}</p>
                </li>
                <p class="bookAuthor">By ${book.author}</p>
                <p class="date-list">${book.date}</p>
            </a>
        </ul>
        </div>
        `;
        bookContainer.insertAdjacentHTML("beforeend", bookElement);
    });
});