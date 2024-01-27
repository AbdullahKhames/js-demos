export default function getNameFormASCII(arr){
    let name = "";
    arr.forEach(element => {

        name += String.fromCharCode(element);
    });
    return name;
}
