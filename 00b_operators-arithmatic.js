/*

	Arithmetic operators take numerical values (either literals or variables) 
	as their operands and return a single numerical value. The standard arithmetic 
	operators are addition (+), subtraction (-), multiplication (*), and division (/).

Addition (+): 
	
	The addition operator produces the sum of numeric operands or string concatenation.

	Syntax: x + y
	
	Examples
*/
		// Number + Number -> addition
		1 + 2 //-> 3

		// Boolean + Number -> addition
		true + 1 // 2

		// Boolean + Boolean -> addition
		false + false // 0

		// Number + String -> concatenation
		5 + "foo" // "5foo"

		// String + Boolean -> concatenation
		"foo" + false // "foofalse"

		// String + String -> concatenation
		"foo" + "bar" // "foobar"

/* 

Subtraction (-):
	
	The subtraction operator subtracts the two operands, producing their difference.

Syntax: x - y

	Examples

*/
	
	5 - 3 // 2
	
	3 - 5 // -2

	"foo" - 3 // NaN

/*

	Division (/):
		
		The division operator produces the quotient of its 
		operands where the left operand is the dividend 
		and the right operand is the divisor.

	Syntax: x / y

	Examples
*/

	1 / 2      // returns 0.5
	1.0 / 2.0  // returns 0.5

	2.0 / 0    // returns Infinity in JavaScript
	2.0 / 0.0  // returns Infinity too
	2.0 / -0.0 // returns -Infinity in JavaScript

/*

	Multiplication (*):

		The multiplication operator produces the product of the operands.

	Syntax: x * y


	Examples
*/

	2 * 2 // 4
	-2 * 2 // -4
	Infinity * 0 // NaN
	Infinity * Infinity // Infinity
	"foo" * 2 // NaN

/*
	Remainder (%):

		The remainder operator returns the remainder left over when one
		operand is divided by a second operand. It always takes the sign
		of the dividend, not the divisor. 

	Syntax: 5 % 2

	Examples:
*/

	12 % 5 // 2
	-1 % 2 // -1
	NaN % 2 // NaN
	1 % 2 // 1
	2 % 3 // 2
	-4 % 2 // -0
	5.5 % 2 // 1.5

/*

	Increment (++):

		The increment operator increments (adds one to) its operand and returns a value.

		If used postfix, with operator after operand (for example, x++), then it returns 
		the value before incrementing. If used prefix with operator before operand 
		(for example, ++x), then it returns the value after incrementing.

	Syntax: x++ or ++x

	Examples
*/

	// Postfix 
	var x = 3;
		y = x++; // y = 3, x = 4

	// Prefix
	var a = 2;
		b = ++a; // a = 3, b = 3

/* 

	Decrement (--);
	
		The decrement operator decrements (subtracts one from) its
		operand and returns a valu.

		If used postfix (for example, x--), then it returns the value before
		decrementing.

		If used prefix (for example, --x), then it returns the value
		after decrementing.

	Syntax: x-- or --x

	Examples:
*/

	// Postfix 
	var x = 3;
		y = x--; // y = 3, x = 2

	// Prefix
	var a = 2;
		b = --a; // a = 1, b = 1

/* 
	Unary negation (-):

		The unary negation operator precedes its operand and negates it.

	Syntax: -x

	Examples:

*/

	var x = 3;
		y = -x; // y = -3, x = 3

/*
	Unary plus (+):

		The unary plus operator precedes its operand and evaluates to its
		operand but attempts to convert it into a number, if it isn't already.

	Syntax: +x

	Examples:
*/

	+3     // 3
	+"3"   // 3
	+true  // 1
	+false // 0
	+null  // 0