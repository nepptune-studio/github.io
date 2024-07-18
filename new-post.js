document.addEventListener('DOMContentLoaded', () => {

    const postForm = document.getElementById('post-form');

    //폼 제출 이벤트 처리
    postForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title && content) { //Boolean인가봐.
                const post = { title, content };
                let posts = JSON.parse(localStorage.getItem('posts')) || [];
                posts.push(post); 
                
        }
    })
}
)