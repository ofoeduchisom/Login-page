let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    password = id("password"),
    errorMsg = classes("error");
    header = btoa(username + ":" + password)
    
    

   let form = document.getElementById('form')

   form.addEventListener('submit',function(event){
       event.preventDefault()
      
     let checkU, checkP = true 
      checkU = engine(username, 0, "username cannot be blank");
    checkP = engine(password, 1, "password cannot be blank");
    if(!checkU || !checkP) return
    let a = document.createElement("a")
    a.href = "./profilepage.html"
    a.click()
});

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
      return false  
    }
    else{
        errorMsg[serial].innerHTML = "";
       return true 

    }
};

