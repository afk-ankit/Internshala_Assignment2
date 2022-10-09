const array = [1, 2, 2, 4, 4, 4, 4, 5]


if (array.length > 0) {
    let obj = {};
    //function to filter and reduce the array to key value pair of id's and frequencies {id1:freq1,id2:freq2,id3:freq3..}
    array.forEach(e => {
        let newArray = []
        newArray = array.filter(element => {
            return element == e
        })
        obj = {
            ...obj,
            [e]: newArray.length
        }
    })


    //this is the reduced array [[id1,freq1],[id2,freq2],[id3,freq3]....]
    const reducedArray = Object.entries(obj);

    //finding the id with greateast frequency which takes the reduced array as the argument  [[id1,freq1],[id2,freq2],[id3,freq3]....]

    let great = reducedArray[0]
    reducedArray.forEach(element => {
        if (great[1] < element[1]) {
            great = element;
        }
        else if (great[1] == element[1]) {
            (great[0] > element[0]) ? great = element : {}
        }
    });




    //finding the id with least frequencies which takes the reduced array as the arguments [[id1,freq1],[id2,freq2],[id3,freq3]....]

    let small = reducedArray[0]
    reducedArray.forEach(element => {
        if (small[1] > element[1]) {
            small = element;
        }
        else if (small[1] == element[1]) {
            small[0] > element[0] ? small = element : {}
        }
    });

    console.log(`[${great[0]},${small[0]}]`);



}
else {
    console.log("Please Enter a valid array");
}






