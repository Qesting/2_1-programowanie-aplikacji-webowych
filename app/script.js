(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", async function () {
    //DONE
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsonArray = await response.json()
    const list = document.createElement('ul')
    for (let index = 0; index < jsonArray.length; ++index) {
      const element = document.createElement('li')
      element.textContent = JSON.stringify(jsonArray[index])
      list.appendChild(element)
    }
    answer.appendChild(list)
  })

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
