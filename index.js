const posts = [
    {
        title: "게시글 1",
        content: "내용 1"
    },
    {
        title: "게시글 2",
        content: "내용 2"
    },
    {
        title: "게시글 3",
        content: "내용 3"
    }
];

const postsContainer = document.getElementById('posts-container');

function addPosts() {
    posts.forEach(post => {
        //<> 설정
        const article = document.createElement('article');
        const title = document.createElement('h2');
        const content = document.createElement('p');
        
        //빈 값에 텍스트 저장
        title.textContent = post.title;
        content.textContent = post.content;

        //아티클에 자식들 추가
        article.appendChild(title);
        article.appendChild(content);
        
        //html에 갖다 붙이기
        postsContainer.appendChild(article);
    });
}

//페이지 로드 시 게시글 갱신
window.onload = addPosts;