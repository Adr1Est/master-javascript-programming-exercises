function findShortestWordAmongMixedElements(arr) {
    // your code here
    let str = "";
    if (Array.isArray(arr) && arr.length != 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "string" && str == "") {
                str = arr[i];
            }
            if (str.length > arr[i] && typeof arr[i] === "string") { str = arr[i]; }
        }
    } else {
        return "";
    }
    return str;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
