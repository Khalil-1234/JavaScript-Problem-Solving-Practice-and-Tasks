let percentage=90;
switch (true) {
    case ( percentage > 85):
          document.write("you have got A grade");
        
        break;

    default:
        document.write("you have  not got A grade");
}

switch (true) {
    case ( percentage <= 85 && percentage > 80):
          document.write("you have got A- grade");
        
        break;

    default:
        document.write("sorry  have not got A- grade");
}

switch (true) {
    case ( percentage <= 80 && percentage > 70):
          document.write("you have got B grade");
        
        break;

    default:
        document.write("sorry  have not got B grade");
}

var newpercentage=65;
switch (true) {
    case ( newpercentage <= 70 && newpercentage > 60):
          document.write("you have got c grade");
        
        break;

    default:
        document.write("sorry  have not got c grade");
}

 newpercentage=55;
switch (true) {
    case ( newpercentage <= 60 && newpercentage > 40):
          document.write("you have got D grade");
        
        break;

    default:
        document.write("sorry  have not got D grade");
}

newpercentage=30;


switch (true) {
    case ( newpercentage <= 40 && newpercentage < 35):
          document.write("you have barley paas");
        
        break;

    default:
        document.write("sorry  have failed");
}