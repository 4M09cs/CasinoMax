
let Guthaben = parseFloat(localStorage.getItem("signal"));
let User = localStorage.getItem("user")
let GuthabenCount = document.getElementById("guthaben");
let LogoutButton = document.getElementById("Logout")

function builder(){
    if (User === null){
    window.location.href = "../login/login.html";

    
  } else {
    document.getElementById("Logout").removeAttribute("hidden");
    GuthabenCount.textContent = User + ": " + Guthaben.toFixed(2).replace(".", ",") + "€"
    
    
    
  }

}
window.onload = builder();

function addFund(){
    let addedFund = parseFloat(document.getElementById("add").value);
    if (isNaN(addedFund)){
        console.log("gfds<gfd")
        return;
    }
    else{
        if (addedFund > 0) {
            console.log("ugfdsoihoiugr")
            Guthaben += addedFund;
            localStorage.setItem("signal", Guthaben);
            location.reload();
        }
        
    }
    
}

document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        addFund();
    }
})


