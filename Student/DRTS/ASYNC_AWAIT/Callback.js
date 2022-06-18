"use strict";
const BlogPost = [
    { title: 'Kalu', Body: 'I love Kalu' },
    { title: 'Lalu', Body: 'I love Lalu' },
    { title: 'Valu', Body: 'I love Valu' },
    { title: 'Aalu', Body: 'I love Aalu' },
    { title: 'Dalu', Body: 'I love Dalu' },
];
let GetPosts = (posts) => {
    let output = '';
    posts.forEach((e) => {
        output += `<li>${e.title}:${e.Body}</li>`;
    });
    document.body.innerHTML = output;
};
GetPosts(BlogPost);
let createPost = (post) => {
    BlogPost.push(post);
    GetPosts(BlogPost);
};
createPost({ title: 'Candy', Body: 'I love Candy' });
