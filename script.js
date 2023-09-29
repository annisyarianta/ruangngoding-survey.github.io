function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
};

function validateForm() {
    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var age = document.Form.age.value;
    var role = document.Form.role.value;
    var recommend = document.Form.recommend.value;
    var preference = document.Form.preference.value; 

    var nameErr = emailErr = ageErr = roleErr = recommendErr = preferenceErr = true;

    //validasi nama
    if(name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
        
    }

    //validasi email
    if(email == "") {
        printError("emailErr", "Please enter your email address");
        var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
            var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    //validasi umur
    if(age == "") {
        printError("ageErr", "Please enter your age");
        var elem = document.getElementById("age");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        if (age < 13) {
            printError("ageErr", "You must be at least 13 y.o");
            var elem = document.getElementById("age");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else if (age > 80) {
            printError("ageErr", "You must be under 80 y.o");
            var elem = document.getElementById("age");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("ageErr", "");
            ageErr = false;
            var elem = document.getElementById("age");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    //validasi current role
    if(role == "") {
        printError("roleErr", "Please select your role");
        var elem = document.getElementById("role");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("roleErr", "");
        countryErr = false;
        var elem = document.getElementById("role");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }

    //validasi user-recommend
    if(recommend == "") {
        printError("recommendErr", "Please select one");
        var elem = document.getElementById("recommend");
            elem.classList.add("error");
    } else {
        printError("recommendErr", "");
        recommendErr = false;
        var elem = document.getElementById("recommend");    
    }

    //validasi preference
    if (document.getElementById("android-dev").checked) {
        printError("preferenceErr", "");
    } else if (document.getElementById("ios-dev").checked) {
        printError("preferenceErr", "");
    } else if (document.getElementById("fe-webdev").checked) {
        printError("preferenceErr", "");
    } else if (document.getElementById("be-webdev").checked) {
        printError("preferenceErr", "");
    } else if (document.getElementById("ui-ux-design").checked) {
        printError("preferenceErr", "");
    } else {
        printError("preferenceErr", "Please select at least one");
        var elem = document.getElementById("preference");
            elem.classList.add("error");
    }

    if((nameErr || emailErr || roleErr || ageErr || recommendErr || preferenceErr) == true) {
        return false;
    } 
};