var a=[2,3,4,7,9,11,13,15] ,count=0;
function oddno(a) {
for(i=0;i<a.length;i++){
  if(a[i]%2!=0){
	  console.log(a[i]);
	  count++;
  //  newarr.push(a[i]);
  } 
 }
 return count;
 
}
console.log(oddno(a));