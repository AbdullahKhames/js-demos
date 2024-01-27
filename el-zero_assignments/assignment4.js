export default function checkRange(num1, num2, num3, start, end) {
    if(num1 >= start && num2 >= start && num3 >= start && num1 <= end && num2 <= end && num3 <= end){
        return true;
    }
    return false;
}
