function searchElment(ele: number, arr: number[]): boolean {
  for(let i=0; i<arr.length; i++){
    if(arr[i] === ele){
      return true;
    }
  }

  return false;
}

let arr: number[] = [1, 2, 3, 4, 5];

console.log(searchElment(3, arr));