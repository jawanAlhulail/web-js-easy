function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

let tasks=[];
  function addtask(){
  let newtask = document.getElementById("task").value;
  tasks.push(newtask);
  console.log(tasks)
  document.getElementById("tasks-list").innerHTML += "<li>" + newtask + "</li>";
}






