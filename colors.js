function listWithSelectedColorOnTop(listOfColors, selectedColor) {
    const sorting = listOfColors.sort(function(a,b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if( a == b) return 0;
        return a < b ? -1 : 1;
    });
    let save = [];
    sorting.forEach(item => {
         if (item.toLowerCase() === selectedColor.toLowerCase()) {
             save.push(item);
         }
     });
     let a = sorting.indexOf(save[0]);
     sorting.splice(a, save.length)
     save.forEach(item => {
         sorting.unshift(item)
     })

    return sorting;
}

module.exports = listWithSelectedColorOnTop;