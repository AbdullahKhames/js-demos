export default function customMerge(...arrays){
    const merged = [];
    arrays.forEach(arr => {
        for (let index = 0; index < arr.length; index++) {
          const element = +arr[index];
          merged.push(element);
        }
    });
    return merged.sort();
}
