const multiplier = {
   numbers:[1,2,3],
   multiplyBy:function(x){
       return this.numbers.map((number) => x*number);
   }
};

console.log(multiplier.multiplyBy(6));