function fibonacci(num) {
// your code here
	var a=0;
	var b=1;
	var c=a+b;
	for(var i=2;i<num;i++){
		a=b;
		b=c;
		c=a+b;
	}
	return c;
}

module.exports = fibonacci;
