const findSmallest = (arr) => {
  let smallest = arr[0]; //храним наименьшее значение 
  let smallestIndex = 0; //храним индекс наименьшего значения

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex; 
}

const  selectionSort = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    
    let smallest = findSmallest(arr); //находим наименьший элемент в массиве и добавляем его в новый массив

    newArr.push(arr.splice(smallest, 1)[0]);
  }

  return newArr;
}
