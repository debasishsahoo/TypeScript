"use strict";
//Diffent Type        |Built-In
//Static ------------|
//Generic            |User-Defined
//Decorators
//Static Type
//1.Built-In
//Number Type  ----> 1,4.5,100000000000000,4.2f,0.01541
//String Type  ----> "Dev",'A',"145"
//Boolean Type ----> 1,0,true,false
//Void Type    ----> YES Memory Allocations
//Null Type    ----> NO Memory Allocations
//Undefined    ----> NO Memory Allocations
//Any
//2.User-Defined
//User-Defined Type
//Array Type    ---->
//Class Type    ---->
//Touple Type   ---->
//Enum  Type    ---->
//Interface Type ---->
//Function  Type ----->
//Object Type    ----->
//Generic
function Compare(a, b) {
    //<T> denotes As Type
    return a == b;
}
var output1 = Compare('Deb', 'Sahoo');
var output2 = Compare(5, 6);
var output3 = Compare(5.5, 6.8);
var output4 = Compare(5.0, 5);
var output5 = Compare('5.0', 5);
