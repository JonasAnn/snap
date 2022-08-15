// first drop down
let dropDown = document.getElementById("myDropdown-feature");

dropDown.addEventListener('mouseover', function(e){
    document.getElementById('dropdown-content-1').classList.add("flex");
}
);

dropDown.addEventListener('mouseout', function(e){
    document.getElementById('dropdown-content-1').classList.remove("flex");
}
);


// second drop down
let dropDownTwo = document.getElementById("dropdown-content-2");

dropDownTwo.addEventListener('mouseover', function(e){
    document.getElementById('myDropdown-feature-2').classList.add("flex");
}
);

dropDownTwo.addEventListener('mouseout', function(e){
    document.getElementById('myDropdown-feature-2').classList.remove("flex");
}
);
