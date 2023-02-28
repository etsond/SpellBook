//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        data.subclasses.forEach(element => {
            // creating an li
            const li = document.createElement("li")

            // add text to the li
            li.textContent = element.name

            //append the li
            document.querySelector("ul").appendChild(li)
        })
        
        // console.log(data.subclasses)
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

