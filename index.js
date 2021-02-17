const citations = document.getElementById('citations');


 

const getQuotes = () => {


fetch('https://api.quotable.io/random')
  .then((res) => res.json())
  .then((data) => {
    citations.innerHTML = (`${data.content} —${data.author}`)
  });
fetch('https://picsum.photos/1600/1000')
  .then((res)=> {
    document.getElementById('image').innerHTML = `<img src=${res.url} />`;

  })
    
  };

citations.addEventListener('click', () => getQuotes());