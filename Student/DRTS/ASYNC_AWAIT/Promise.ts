const BlogPost = [
  { title: 'Kalu', Body: 'I love Kalu' },
  { title: 'Lalu', Body: 'I love Lalu' },
  { title: 'Valu', Body: 'I love Valu' },
  { title: 'Aalu', Body: 'I love Aalu' },
  { title: 'Dalu', Body: 'I love Dalu' },
];

let GetPosts = () => {
  let output: string = '';
  BlogPost.forEach((e) => {
    output += `<li>${e.title}:${e.Body}</li>`;
  });
  document.body.innerHTML = output;
};

GetPosts(BlogPost);

let createPost = (post: any) => {
  return new Promise((resolve, reject) => {
    if (post.title.length > 0 && post.body.length > 0) {
      BlogPost.push(post);
      resolve();
    } else {
      reject('please provide Valid Value');
    }
  });
};

createPost({ title: '', Body: '' })
  .then(GetPosts)
  .catch((err) => {
    console.error(err);
  });
