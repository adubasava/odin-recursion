function mergeSort(array) {
    if (array.length === 0) return [];    
    if (array.length === 1) return array;
    
    const leftArray = array.slice(0, array.length/2);
    const rightArray = array.slice(array.length/2, array.length);
      
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(array1, array2) {
    let i = 0;
    let j = 0;
    const sortedArray = [];

    while (array1[i] !== undefined && array2[j] !== undefined) {
        if (array1[i] > array2[j]) {
            sortedArray.push(array2[j]);
            j++;
        } else {
            sortedArray.push(array1[i]);
            i++;
        }
    }

    while (array1[i] !== undefined) {
        sortedArray.push(array1[i]);
        i++;
    }

    while (array2[j] !== undefined) {
        sortedArray.push(array2[j]);
        j++;
    }

    return sortedArray;
}

//console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
//console.log(mergeSort([105, 79, 100, 110]));