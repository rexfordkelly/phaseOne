/*
	When talking about our programs it helps to have labels
	for it's parts. This enables us to think and talk about
	our programs with great detail and precision.

	Programs: 

		A Program is a set of Instructions for a Computer follow. A computer
		follows these instructions and carries out some work.

	JavaScript: 

		JavaScript is a light weight scripting language, that works almost
		anywhere. In the browser, on a server and even powers robots and 
		wearables. 

		JavaScript as a Language does nothing, it simply allows us humans 
		to compose programs that will be executed by a JavaScript Engine.

	JavaScript Engine: 

		A JavaScript Engine is a program that can read and understand JavaScript.
		Such an Engine, will take in a program, writen in JavaScript, break it apart
		organizing it into Expressions, Commands and Instructions, and then evaluate
		these, performing some useful work.

	JavaScript Environment:

		As a JavaScript program is executed, it is brought to life within an
		environment. This environment is where all Values and Instructions
		live and interact.

	Keywords:

		A keyword, or "reserved" word, is a word which is a part of the language itself.
		They are called reseved words because they have special meaning and as such are
		generally untouchable. Only the particular JavaScript engine in use can 
		define or change the meaning of a keyword.

	Values:

		A particular piece of data or information, which can be used
		or combined into bigger or more conplex expressions.

		In JavaScript we sometimes refer to prepaired expressions, 
		or instructions as values. Once such values are evaluated, 
		they will in-tern become new/different values.

		Examples:

			a) 	A name might be a value. For example "John Doe"
			b)  A number could be a value, for example the number 
				3.14159265359 is the Value, known as PI.


	Operator: 

		An Operator is a command or symbol which performs some action
		on one or more Values, when evaluated. 

		Every Operator has particular associative properties, understanding these
		are crucial to being able correctly read and understand how they
		are evaluated.

			typeof 9
			The "typeof" operator is joined to a Value to it's right.

			1 + 1
			The "+" operator is paired with a left-hand and right-hand Value.
		
		Operators, that operate on a single value are called Unary operators.
		Operators, that operate on two Values are called Binary Operators. 
		Operators, that operate on three Values are called Tunary Operators.

		Note: 	Generally speaking JavaScript evaluates a program top down, 
				left to right. This is not always the case, but generally 
				this is how it flows. Operators can break this flow, and enforce
				their own order of operations.

		Some operators have symbols, ( +, -, *, / etc. ) and some only 
		have commands, such as "typeof".

		Example:  

			1 + 1, here the "+" operator becomes accociated with the 
			left-hand "1" and the right-hand "1" and performs an 
			addition operation with the two. 


	Expressions: 

		An expression is any valid set of Values and Operators written in 
		JavaScript which can be evaluated. 

		Expressions are, once evaluated, "transformed" into single Values.

		Examples:

			a) 	1 + 1: this expression, once evaluated will have 
				the value of 2.

			b)  1 + 1 * 3: these two expressions, 1 * 3 and 3 + 1 once evaluated 
				will have the value of 4.

	Statements: 

		A Statment is one or more expressions, combined into a single set of work.
		Statements, are used to give order to and seperate a series or expressions, 
		ensuring some unit of work is evaluated as an isolated set of work.

		Note: 	White-space, like the space charicter " ", tabs "    " and all other 
				"non-visable" characters are removed from a program before being evaluated.


		Example: 

			The following Program

				1 + 1 * 4; 
				12 / 99;

			will be reformated into a single line of code:
			
				1+1*4;12/99;

			Without the Semi-colons to indicate where one statements ends and another begins
			we would have a single set of expressions that would not work as intended.

				1+1*412/99

			would evalute to 5.161616161616162, instead of two seperate Values of 5 and 
			0.12121212121212122 respectivly.

		We use a Semi-colon ";" to terminate a Statment.


	Declarations: 

		As our program is executed, it lives within an execution environment. When
		our program executes, it needs to name Values and sets of Instructions so 
		it can conviently access and reference them as time goes by. In order to access
		such Values by name we must perform a Declaration, that such and such Value
		should be named x or y. 

		A common declaration one makes all the time is a Variable declaration, such as:

			var name = "John Doe";

		Here we have declared that a Variable, identified by name has the Value of "John Doe"

	Variables:

		A variable is a named link/reference to some Value or set of Instructions.

		To make a variable we use the "var" keyword followed by an assigment of a Value or
		the result of some Expression or Instruction.

		The main idea behine variable is they allow us to build programs that operate on 
		data based on relationships rather than particular value directly.

		Example:

			var numberOne = 1;
			var numberTwo = 10;

			numberOne + numberTwo; 

		Here we have a simple program which will add the Values of numberOne and numberTwo
		and will add them together. If we changed the Value of numberOne or numberTwo, our
		overal algorithm will continue work as expected.



	-- End of File --