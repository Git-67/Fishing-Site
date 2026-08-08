async function loadposts() {
    try {
        const response = await fetch('post-media/posts.json')

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const posts = await response.json()
        const postarea = document.getElementById("cardholder")
        for (const post of posts) {
            postarea.innerHTML += `
            <div class="card mt-3 mb-3">
                <div class="card-header">
                    <img src="post-media/avatar/${post["avatar"]}" alt="avatar" class="rounded-circle">
                    <p class="card-title ms-3">${post['title']}</p>
                </div>
                <div class="card-body">
                    <p class="card-info mb-1">Posted by ${post["user"]} at ${post["timestamp"]}</p>
                    ${(() => {
                        if (!post['img']) return "";
                        return `<img src="post-media/${post["img"]}" class="card-img">
                                <p class="img-alt-text">${post["alt-text"]}</p>`;
                    })()}
                    <p class="card-text">${post["text"]}</p>
                </div>
            </div>
            `
        }
    }
    catch (error) {
        console.error("Posts could not load:", error)
    }
}

loadposts()