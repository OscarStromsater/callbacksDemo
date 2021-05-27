
const button = document.querySelector('button');

const posts = [
  {title: 'Post One', body:'this is post One'},
  {title: 'Post Two', body:'this is post Two'}
];
console.log(posts);

const getPosts = () => {
  setTimeout(() => {
    let output ='';
    posts.forEach((post) => {
      output+= `<li>${post.title}</li>`;
    });
    const top = document.querySelector('#top')
    const divHolder = document.createElement('div')
    top.appendChild(divHolder);
    divHolder.innerHTML = output
  }, 1000);
}

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post)
    callback();
  }, 2000);
}

button.addEventListener('click', () => {
  createPost({title: 'Post Three', body: 'This is Post Three'}, getPosts);
})

