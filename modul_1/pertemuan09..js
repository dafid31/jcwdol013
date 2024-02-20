function binarySearch(arr,left,right,middle){
if(right>=left){
    let mid= left + Math.floor((right - length) / 2)
    if (arr[mid] == middle ) {
        return mid
    }
}
if (arr[i] > middle) {
    return binarySearch(arr,left,mid-1,middle)
}
return -1;
}