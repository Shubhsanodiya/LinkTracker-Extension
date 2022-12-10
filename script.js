let myLeads = []
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEl=document.getElementById("ul-el")

const deleteBtn=document.getElementById("delete-btn")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

const tabBtn=document.getElementById("tab-btn")
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
  myLeads=leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click",function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
          myLeads.push(tabs[0].url)
          localStorage.setItem("myleads",JSON.stringify( myLeads ))  
          render(myLeads)

    })


})

  function render(Leads){
    let listItems=""
      for(let i=0;i<Leads.length;i++){
         //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + </a></li>"
         listItems += 
           `<li>
              <a target='_blank' href='${Leads[i]}'> 
                     ${Leads[i]} 
              </a>
           </li>`
      }
    ulEl.innerHTML=listItems
  }

deleteBtn.addEventListener("dblclick",function(){
  console.log("double Clicked!")
  localStorage.clear()
  myLeads=[]
  render(myLeads)
})
inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value=""
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)

  console.log(localStorage.getItem("myLeads"))
  
})



// for(let i=0;i<myLeads.length;i++){
    //ulEl.innerHTML+="<li>"+myLeads[i] + "</li>"
  //one way also
  //create
  //set Text content
  //Append to all
  
  /*const li=document.createElement("li")
  li.textContent=myLeads[i]
  ulEl.append(li)*/
  // 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
  // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
  // 3. Render the listItems inside the unordered list using ulEl.innerHTML


  
