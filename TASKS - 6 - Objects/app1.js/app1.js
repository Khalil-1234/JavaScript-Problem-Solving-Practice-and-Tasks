//Your task is to traverse the object and print its properties (both names and values).

 let userObject = {

    userName: "Philip",
    
    fatherName: "Norman",
    
    className: "four",
    
    };

    console.log(Object.keys(userObject));
    console.log(Object.values(userObject));

   
    // 2. Now, using the same object, change the userName to your name, fatherName to your father’s name, and className 
    // to your class.
    userObject.userName = "khalil"
    userObject.fatherName = "Taleem shah"
    console.log(userObject);