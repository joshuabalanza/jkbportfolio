$( document ).ready(function() {
    document.getElementById('UserAge').innerText = MyAge();
});


function MyAge(){
    var today = new Date();
    var birthDate = new Date('1997/11/08');
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}