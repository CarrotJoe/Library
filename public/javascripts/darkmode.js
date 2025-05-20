
window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nightModeSwitch").addEventListener("change", function() {
        
        if (this.checked){
            document.cookie = "darkmode=true; path=/; max-age=31536000"
            document.body.classList.toggle('darkmode')
        }
        else {
            document.cookie = "darkmode=false; path=/; max-age=31536000"
        }}

    );     

    const cookies = document.cookie.split('; ');
    const isDark = cookies.find(c => c === 'darkmode=true');
    if (isDark === 'darkmode=true'){
        document.cookie = "darkmode=true"
        document.body.classList.add('darkmode')
        document.getElementById("nightModeSwitch").checked = true
        }

});
    