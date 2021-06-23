class BinarySearch { findIndex(koleksi, kueri){
    let start = 0;
    let end = koleksi.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (koleksi[middle] === kueri) {
           
            return middle;
        } else if (koleksi[middle] < kueri) {
            
            start = middle + 1;
        } else {
         
            end = middle - 1;
        }
    }
	
    return -1;
}
}
module.exports = BinarySearch