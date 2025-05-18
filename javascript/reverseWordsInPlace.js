// Question: Reverse words in given sentence while maintaining the order"
// Expected O/P: rakminlaG anmuydarP si eman yM

const value = "My name is Pradyumna Galnimkar"


const reverseWords = (value) => {
    const words_list = value.split("");
    words_list.reverse();
    for(const word of words_list){
        let chars = word.split("")
        let start = 0;
        let end = chars.length - 1;
        while(start < end){
            let temp = "";
            temp  = chars[start];
            chars[start] = chars[end];
            chars[end] = temp;
            start += 1;
            end -= 1;
        }
    }
    return words_list.join("");
}
console.log(reverseWords(value));
