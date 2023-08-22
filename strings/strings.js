// function checkspam(str){
//     let lowerStr =  str. toLowerCase();
//     let badWord = /abc|cde|efg/
//     return lowerStr.replace(badWord, "******") ;

// }  
// alert(checkspam("buy efg"));



//بدون فیلتر/تعداد ستاره های ثابت
//-----------------------------------------------------------------
// function reverseString(str) {
//     var splitString = str.split(""); 
//     var reverseArray = splitString.reverse()
//     var joinArray = reverseArray.join(""); 
//     return joinArray; 
// }
// alert(reverseString(prompt()));
//-------------------------------------
// function isValid (str){
//     let stack = ''
//     for (let char of str){
//         if (char ==='('){
//             stack.push(char);
//         }else if {
//             (char ===')') {
//                 if(stack.length === 0) return false;
//                 stack.toUpperCase()
//             }
//         }
//         return stack.length === 0 
//     }}
//------------------------------------------------


// function ToRial(str) {

//     str = str.replace(/\,/g, '');
//     var objRegex = new RegExp('(-?[0-9]+)([0-9]{3})');

//     while (objRegex.test(str)) {
//         str = str.replace(objRegex, '$1,$2');
//     }


//     return str;
// }
// alert(ToRial("12"))
//--------------------------------------------------



function removeDuplicate(str, n) {
    var index = 0;
    for (var i = 0; i < n; i++) {

        var j;
        for (j = 0; j < i; j++) {
            if (str[i] == str[j]) {
                break;
            }
        }
        if (j == i) {
            str[index++] = str[i];
        }
    }
    return str.join("").slice(str, index);
}
var str = prompt().split("");
var n = str.length;
alert(removeDuplicate(str, n));

