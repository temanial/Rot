let Alfavit = [
         "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"
    ];

    let alfavit = [
        "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
    ];

    function encryptText () {
        let input = document.getElementById("input").value;

        let result = '';

        for (let i = 0; i < input.length; i++) {
        let letter = input[i]; // текущий символ
        let found = false;     // флаг — нашли ли букву в алфавитах

        // 1. Проверка среди заглавных (Alfavit)
        for (let j = 0; j < Alfavit.length; j++) {
            if (letter === Alfavit[j]) {
            let newIndex = (j + 13) % 26;
            result += Alfavit[newIndex];
            found = true;
            break;
            }
        }

        // 2. Проверка среди строчных (alfavit)
        if (!found) {
            for (let j = 0; j < alfavit.length; j++) {
            if (letter === alfavit[j]) {
            let newIndex = (j + 13) % 26;
            result += alfavit[newIndex];
            found = true;
            break;
            }
            }
        }

        // 3. Если не нашли ни там, ни там — оставляем символ как есть
        if (!found) {
            result += letter;
        }
        }



        document.getElementById("output").value = result;
    }