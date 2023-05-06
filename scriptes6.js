console.log("ES6 Version of Project 2");

class book{
    constructor(name , author, type){
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{
    // Add Function
    add (book){
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uistring =`
                      <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                      </tr>
                      `
         tableBody.innerHTML += uistring;             
    }
    // Clear Function
    clear (){
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    
    }

    // Validate Function
    validate (book){
        if(book.name.length<2 || book.author.length<2 ){
            return false
        }
        else{
            return true
        }
    }

    // show Function
    
    show (type ,displayMessage){
        let message = document.getElementById('message');
        message.innerHTML = `
                             <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                             <strong>Message:</strong> ${displayMessage}
                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                             </button>
                             </div>
        `
        setTimeout(() => {
            message.innerHTML = " "
        }, 5000);
    }
}


//Add Submit event Listener to form libraryForm
let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    e.preventDefault();
    let name =document.getElementById('bookName').value;
    let author =document.getElementById('author').value;

    let business =document.getElementById('business')
    let programming =document.getElementById('programming')
    let mathematics =document.getElementById('mathematics')
    let type;

    if(business.checked){
        type = business.value
    }
    else if(programming.checked){
        type = programming.value
    }
    else if(mathematics.checked){
        type = mathematics.value
    }

    let book = new Book(name, author ,type);
    console.log(book);


    let display = new Display();

    //Alert
    if(display.validate(book)){
        //addFunction
        display.add(book);
        //clearFunction
        display.clear();
        display.show('success' , " Your book has been successfully added")
    }
    else{
        display.show("danger" , " Sorry you can't add this book")
    }



    e.preventDefault();
    console.log("Submit the Form");

}
