function createPost(post, newPost) {
    const postarea = document.getElementById("cardholder");

    if (newPost) {
        var imageHTML = "";
        if (post.img instanceof File && post.img.type.startsWith("image/") && post.img.size) {
            const imageURL = URL.createObjectURL(post.img);

            imageHTML = `
                <img src="${imageURL}" class="card-img">
            `;
        }

        var altTextHTML = "";
        if (post["alt-text"]) {
            altTextHTML = `
                <p class="img-alt-text">${post["alt-text"]}</p>
            `;
        }

        postarea.innerHTML = `
            <div class="card mt-3 mb-3">
                <div class="card-header">
                    <img src="post-media/avatar/${post['avatar']}" alt="avatar" class="rounded-circle">
                    <p class="card-title ms-3">${post['title']}</p>
                </div>
                <div class="card-body">
                    <p class="card-info mb-1">Posted by ${post['user']} at ${post['timestamp']}</p>
                    ${imageHTML}
                    ${altTextHTML}
                    <p class="card-text">${post['text']}</p>
                </div>
            </div>
        ` + postarea.innerHTML
    }
    else {
        var imageHTML = `
            ${(() => {
                if (!post['img']) return "";
                return `<img src="post-media/${post['img']}" class="card-img">`;
            })()}`

        var altTextHTML = `
            ${(() => {
                if (!post['alt-text']) return "";
                return `<p class="img-alt-text">${post['alt-text']}</p>`;
            })()}`

        postarea.innerHTML += `
            <div class="card mt-3 mb-3">
                <div class="card-header">
                    <img src="post-media/avatar/${post['avatar']}" alt="avatar" class="rounded-circle">
                    <p class="card-title ms-3">${post['title']}</p>
                </div>
                <div class="card-body">
                    <p class="card-info mb-1">Posted by ${post['user']} at ${post['timestamp']}</p>
                    ${imageHTML}
                    ${altTextHTML}
                    <p class="card-text">${post['text']}</p>
                </div>
            </div>
        `
    };

    
}

async function loadPosts() {
    try {
        const response = await fetch('post-media/posts.json')

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const posts = await response.json();

        for (const post of posts) {
            createPost(post, 0)
        }
    }
    catch (error) {
        console.error("Posts could not load:", error)
    }
}

function newPost() {
    const modalE = document.getElementById("myFormModal");
    const modal = bootstrap.Modal.getOrCreateInstance(modalE)
    const newPost = document.getElementById("newPost");

    newPost.addEventListener("submit", e => {
        e.preventDefault();

        const postData = new FormData(newPost);
        const postContent = Object.fromEntries(postData.entries());

        // Because there is no functional server due to the no framework requirement, default values are placed
        postContent["user"] = "You"
        postContent["avatar"] = "default.png"

        const time = new Date()
        postContent["timestamp"] = `${String(time.getHours()).padStart(2, "0")}:${String(time.getMinutes()).padStart(2, "0")} 
                                    ${String(time.getDate()).padStart(2, "0")}/${String(time.getMonth() + 1).padStart(2, "0")}/${time.getFullYear()}`

        createPost(postContent, 1);
        
        modal.hide()
        newPost.reset()
    });
}

function imageStuff() {
    const imageInput = document.getElementById("form-img");
    const imagePreviewContainer = document.getElementById("img-preview-container");
    const imagePreview = document.getElementById("img-preview")

    imageInput.addEventListener("change", () => {
        const file = imageInput.files[0];

        if (!file) {
            imagePreviewContainer.style.display = "none";
            imagePreview.src = "";
            return;
        }

        if (!file.type.startsWith("image/")) {
            imagePreviewContainer.style.display = "none";
            imagePreview.src = "";
            return;
        }

        imagePreview.src = URL.createObjectURL(file);
        imagePreviewContainer.style.display = "block";
    });
}

loadPosts()
newPost()
imageStuff()