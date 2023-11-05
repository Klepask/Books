const binarySearch = (list, item) => {

  if (list.length === 0) return -1;

    low = 0;
    hight = list[list.length -1];

  while (low <= hight) {

    let mid = Math.floor((low + hight) / 2);
    
    if (list[mid] === item) {
      return mid;
    }else if (list[mid] < item) {
      low = mid + 1;
    }else{
      hight = mid - 1;
    }
  }
  return -1; 
}
