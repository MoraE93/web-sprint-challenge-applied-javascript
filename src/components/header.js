const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
 // <div class="header">
  //<span class="date">{ 03/20/2021 }</span>
  //<h1>{ lamda Times }</h1>
  //<span class="temp">{ 35 }</span>
//</div>





const headerDiv = document.createElement('div')
  headerDiv.classList.add('header')

const HeaderDate = document.createElement('span')
  HeaderDate.classList.add('date')
  HeaderDate.textContent = `$(date)`
  headerDiv.appendChild(HeaderDate)

const headerH1 = document.createElement('h1')
  headerH1.classList.add(`$tittle`)
  headerDiv.appendChild(headerH1)

const HeaderTemp = document.createElement('span')
headerTemp.classList.add('temp')
headerTemp.textContent = `${temp}`
headerDiv.appendChild(headerTemp)

return headerDiv;




}
const headerAppender = (selector) => { 
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  
}
let headContainer = document.querySelector(selector);
  headContainer.append(Header('The Lambda Times','3/12/2021','59F'));

  }


export { Header, headerAppender }