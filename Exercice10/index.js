//votre code ici

function printNumbers(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr.join(" ");
}

export default printNumbers
