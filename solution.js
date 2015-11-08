function solution1(A)
{
	var numbers = new Array(A.length+1);
	for(number of A)
	{
		if(number < 0)
			continue;
		numbers[number] = true;
	}
	var res = 1;
	while(numbers[res])
	{
		res++;
	}
	return res;
}


function invert(bracket)
{
	if(bracket == '[')
		return ']';
	if(bracket == '{')
		return '}';
	if(bracket == '(')
		return ')';

	if(bracket == ']')
		return '[';
	if(bracket == '}')
		return '{';
	if(bracket == ')')
		return '(';
}

function solution2(S)
{
	var stack = new Array();
	for(s of S)
	{
		if(s == '{' || s == '[' || s=='(')
		{
			stack.push(s);
		}

		if(s == '}' || s == ']' || s==')')
		{
			var lastBracket = invert(stack.pop());
			if(lastBracket != s)
			{
				return false;
			}
		}
	}
	return stack.length == 0;
}

function solution3(A, F)
{
	return A.map(eval(F));
}