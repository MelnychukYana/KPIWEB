function set() {
    document.getElementById("email").value = localStorage.getItem("email");
}

function get() {
    localStorage.setItem("email", document.getElementById("email").value);
}

set();




