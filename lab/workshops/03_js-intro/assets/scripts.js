console.log('\nhey bitch\n\n\n');
console.log('A string with single quotes');//single quote 
console.log("A string with double quotes");//double quote
console.log(`A string with back ticks`);//back tick
console.log ('A ' + 'string ' + 'in ' + 'pieces ');//contactenation

//Numbers
//---------------------
console.log('\n\nNumbers\n\n\n');
console.log(3);//number
console.log(3 + 3);
console.log(3-3);
console.log(3*3);
console.log(3/3);
console.log (10 % 3);//modulo

//Strings & numbers
//-------------------------
console.log('\n\nStrings & Numbers\n\n\n');
console.log('100 * 50');// numbers in a string
console.log('100 * 50 equals ' + 100 * 50);//adding number to a string
console.log(100 * 50 + '25');//adding string to a number 
console.log(`The year was ${2024-333} 333 years ago.`);

//BOOLEAN 
//---------------------------
console.log('\n\nBooleans\n\n\n');
console.log(true, false);//true and false 
console.log('3 < 4 : ', 3<4);
console.log(4>10);
console.log('2 >= 2 : ',2>=2);
console.log('6 <= 3 : ', 6<=3);
console.log('8 +2 == 5 + 5 : ', 8+ 2 == 5 + 5);
console.log ("'tomato' != 'tomato'", 'tomato' != 'tomato' );//

//Variables 
//---------------------------

console.log('\n\nVariables\n\n\n');
var studentLoanDebt = 800;
console.log('studentLoanDebt : ', studentLoanDebt);

studentLoanDebt = studentLoanDebt - 100;
console.log('studentLoanDebt :', studentLoanDebt);

studentLoanDebt = studentLoanDebt + 50;
console.log('studentLoanDebt : ', studentLoanDebt);

//Arrays 
//---------------------------
var myFavoriteColors = [
    'yellowgreen', 
    'fuschia', 
    'gainsboro'
];
console.log('myFavoriteColors ; ', myFavoriteColors);
console.log('myFavoriteColors[1] : ',myFavoriteColors[1]);

//Objects 
//---------------------------
console.log('\n\nObjects\n\n\n');
var me= {
firstName: 'Meera',
lastName: 'Sunil',
age: 21,
likesMayo: true,
};
console.log('me : ', me);
console.log("me['firstName']: ", me['firstName']);

//Array of Objects 
//---------------------------
console.log('\n\nArray OF OBJECTS\n\n\n');
var us = [
    {
        firstName: 'Luiza',
        lastName: 'Whateley',
    },
    {
        firstName: 'Meera',
        lastName: 'Sunil',
    },
    {
        firstName: 'Lavanya',
        lastName: 'Ranjan',
    },
];
console.log(us);
console.log(us[0]);
console.log(us[0]['lastName']);