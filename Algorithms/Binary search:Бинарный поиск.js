const binarySearch = (list, item) => {

  if (list.length === 0) return false;

    let low = 0;
    let hight = list.length - 1; //в границах low и high хранятся границы той части списка, в которой выполняется поиск

  while (low <= hight) {

    let mid = Math.floor((low + hight) / 2); //пока эта часть не сократится до одного элемента, проверяем средний элемент
    
    if (list[mid] === item) {
      return mid; //значение найдено
    }else if(list[mid] < item) {
      low = mid + 1; //мало
    }else{
      hight = mid - 1; //много
    }
  }
  return false;  //значение не существует
}
