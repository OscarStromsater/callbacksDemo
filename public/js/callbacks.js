const asyncButton = document.querySelector('#async');
const syncButton = document.querySelector('#sync');
const stopButton = document.querySelector('#stop');
const syncRow1 = document.querySelector('#sync1')
const syncRow2 = document.querySelector('#sync2')
const asyncRow1 = document.querySelector('#async1')
const asyncRow2 = document.querySelector('#async2')

const posts = [
  { title: 'Post One', body: 'this is post One' },
  { title: 'Post Two', body: 'this is post Two' }
];

const syncPosts = [
  { title: 'Post One', body: 'this is post One' },
  { title: 'Post Two', body: 'this is post Two' }
]
const syncPosts1 = [
  'There are currently two posts on the server',
  'Create your post and send it to the server',
  'This takes some time',
  'Getting all posts doesnt wait and is called as soon as post is created',
  'Post One',
  'Post Two'
]



const getPosts = () => {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    asyncRow1.style.backgroundColor = 'green'
    asyncRow1.innerHTML = output
  }, 1000);
}

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post)
    callback();
  }, 2000);
}

let output = 0;

const syncGetPost = () => {
  setTimeout(() => {
    let output = '';
    syncPosts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    syncRow1.innerHTML = output
  }, 1000)
}

let syncput = 0;
const blockingCounter = () => {
  for(let i = 0; i< 4e6; i++){
    syncput += i;
    syncRow2.innerHTML = syncput;
  }
  
}

asyncButton.addEventListener('click', () => {
  if (!asyncRow1.innerText) {
    return createPost({ title: 'Post Three', body: 'This is Post Three' }, getPosts);
  }
    const counter = setInterval(() =>{
    output +=1
    asyncRow2.style.backgroundColor = 'yellow'
    asyncRow2.innerHTML = output
    if(output=== 1000) {
      clearInterval(counter);
    }
   },10);
})

syncButton.addEventListener('click', () => {
  if(!syncRow1.innerText) {
    return syncGetPost();
  }
  blockingCounter();
})
