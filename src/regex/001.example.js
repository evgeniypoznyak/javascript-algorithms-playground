const method = str => {
    // // test()
    // // Метод RegExp, который тестирует совпадение в строке. Возвращет либо истину либо ложь.
    // const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
    // const regex = /^[Th]/;
    // console.log(regex.test(paragraph));

    // // exec()
    // // Метод RegExp, который выполняет поиск совпадения в  строке. Он возвращает массив данных.
    // const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
    // const regex = /[fox]/;
    // console.log(regex.exec(paragraph));


    // // match()
    // // Метод String, который выполняет поиск совпадения в строке.
    // // Он возвращет массив данных либо null если совпадения отсутствуют.
    // const paragraph = 'For more information, see Chapter 3.4.5.1';
    // const re = /see (chapter \d+(\.\d)*)/i;
    // const found = paragraph.match(re);
    // console.log(found);

    // search()
    // Метод String, который тестирует на совпадение в строке.
    // Он возвращет индекс совпадения, или -1 если совпадений не будет найдено.
    const paragraph = 'hey cat! this word never match! Ola!';
    const re = /t[^h]/gi;
    console.log(paragraph.search(re));
    console.log(paragraph.match(re));
    // console.log(re.exec(paragraph));


    // replace()
    // // Метод String, который выполняет поиск совпадения в строке,
    // // и заменяет совпавшую подстроку другой подстрокой переданной как аргумент в этот метод.
    // const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
    // const regex = /dog/gi;
    // console.log(p.replace(regex, 'ferret'));


    // split()
    // Метод String, который использует регулярное выражение или фиксированую строку чтобы разбить строку на массив подстрок.
    // const paragraph = 'The quick brown fox jumps over the lazy dog.';
    // const words = paragraph.split(' ');
    // console.log(words);
};

module.exports = {
    solution: method,
};
