function reverseAlphabetsWithNumber(str) {
    const alphabets = str.replace(/[0-9]/g, '');
    const number = str.replace(/[^0-9]/g, '');
    const reversedAlphabets = alphabets.split('').reverse().join('');
    return reversedAlphabets + number;
}

function longest(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return `${longestWord}: ${longestWord.length} character`;
}

function countQueryInInput(input, query) {
    const result = query.map(q => {
        return input.filter(item => item === q).length;
    });
    return result;
}

function diagonalDifference(matrix) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - 1 - i];
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

function numberOne() {
    const inputStr = "NEGIE1";
    console.log(reverseAlphabetsWithNumber(inputStr));
}

function numberTwo() {
    const sentence = "Saya sangat senang mengerjakan soal algoritma";
    console.log(longest(sentence));
}

function numberThree() {
    const INPUT = ['xc', 'dz', 'bbb', 'dz'];
    const QUERY = ['bbb', 'ac', 'dz'];
    console.log(countQueryInInput(INPUT, QUERY));
}

function numberFour() {
    const matrix = [
        [1, 2, 0],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log(diagonalDifference(matrix)); // Output: 3

}


numberOne()
numberTwo()
numberThree()
numberFour()