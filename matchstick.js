function m(step) {
	if (step ===0){
		return 0;
	}
    let output
	if(step>0){
		 output=(step*2)+step+(step+1)+step
	}
	return output
}
console.log(m(87))
console.log(m(4))
console.log(m(1))
console.log(m(0))