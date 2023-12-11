function Logout(element) {
    element.innerText = "Logout";
}
function showAlert(){
    alert("ninja was liked");
}
 
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        button.style.display = 'none';
    });
});