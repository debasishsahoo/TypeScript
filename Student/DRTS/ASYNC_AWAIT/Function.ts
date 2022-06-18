const BlogPost = [
  { title: 'Kalu', Body: 'I love Kalu' },
  { title: 'Lalu', Body: 'I love Lalu' },
  { title: 'Valu', Body: 'I love Valu' },
  { title: 'Aalu', Body: 'I love Aalu' },
  { title: 'Dalu', Body: 'I love Dalu' },
];

let GetPosts = (posts: any) => {
  let output: string = '';
  posts.forEach((e) => {
    output += `<li>${e.title}:${e.Body}</li>`;
  });
  document.body.innerHTML = output;
};

GetPosts(BlogPost);

let createPost = (post: any) => {
  BlogPost.push(post);
};

createPost({ title: 'Candy', Body: 'I love Candy' });
