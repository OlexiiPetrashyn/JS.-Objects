'use strict';

// TASK 1

// Cоздать объект student, который содержит следующие свойства: 
// - имя,
// - фамилию,
// - пол (isMale),
// - контактные данные,

// методы: вывод адреса, смена пола (на противоположный).

const   student = {

            name    : "Rudolf",
            surname : "Alfredovich",
            gender  : "Male",
            phone   : "322-33-22",
            country : "Ukraine",
            city    : "Uzhgorog",
            street  : "Kvitucha",
            house   : "24",
            
            fullName() {
            
                return this.name + " " + this.surname
            
            },

            fullAddress() {

            return this.country + ", " + this.city + ", " + this.street + " " + this.house

        }

}

studentIntroduction();

studentGenderChanging();

// STUDENT INFORMATION FUNCTION

function studentIntroduction(){

    alert( "Hi! My name is " + student.fullName() + " and I live by address: " + student.fullAddress() );

}

// GENDER CHANGING FUNCTION

function studentGenderChanging(){

    const genderChanging = confirm("The student " + student.fullName() + " gender is " + student.gender + "." + "\nWhould you like to change the student gender?")

    if ( genderChanging ) {

        student.gender = "Female";

        alert ("The student gender was changet to " + student.gender + ".");

    } else {

        alert("Any changes. The gender still a " + student.gender + "." );

    }

}



// TASK 2

//  Cоздать объект, который содержит свойства о факультете и кафедре, 
//  методы: переименование факультета (метод должен принимать в качестве параметра новое название факультета).


const   universityStructure = {

            faculty     : "Foreign languages",
            department  : "English"

}

departmentChanging();

function departmentChanging(){
    
    const newDepartmentName = prompt("The current " + universityStructure.faculty + " faculty department name is " + universityStructure.faculty + "." + "\nWhat new department name whould do you like to use? ")

    universityStructure.department = newDepartmentName;

    alert ("Now, the " + universityStructure.faculty + " faculity department got the '" + universityStructure.department + "' name.");

}


// TASK 3

// Создать функции-конструкторы:
// - книга (автор, название, год издания, издательство)
// * предусмотреть в прототипе метод, который будет возвращать возраст книги в годах.

function BookDescription ( bookTitle, bookAuthor, publicationYear, publishingHouse ){

        this.bookTitle = bookTitle,        
        this.bookAuthor = bookAuthor,
        this.publicationYear = publicationYear,
        this.publishingHouse = publishingHouse
    
        if ( confirm ( 'Whould you like to calculate how this book is old?' ) ) {

            if (this.publicationYear > 0){

                this.bookAge = ( new Date().getFullYear() - new Date( publicationYear ) );

                alert ("The " + this.bookTitle + " book age is: " + this.bookAge + " years");

                }   else {

                    alert ("This book publication year is missed");

            }
            
            
        } else {

            alert ('As you wish )');

        };

};

const newBookCreation = new BookDescription(

        prompt('Enter the book title'),        
        prompt('Enter the book author'),
        +prompt('Enter the book publication year'),
        prompt('Enter the book publishing house')

);