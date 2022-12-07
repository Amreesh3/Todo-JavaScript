const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")
const toDoBox1 = document.querySelector("#to-do-box1")

item.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter" && Boolean(this.value)) {
            addToDo(this.value)
            this.value = ""
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
         <i class="fas fa-times"></i>
        
    `;

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            addToDo1(listItem.textContent.trim())
            listItem.remove()

        }
    )
    
  
    toDoBox.appendChild(listItem)
}

const addToDo1 = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
         <i class="fas fa-times"></i>
        
    `;

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {

            listItem.remove()

        }
    )
    
  
    toDoBox1.appendChild(listItem)
}