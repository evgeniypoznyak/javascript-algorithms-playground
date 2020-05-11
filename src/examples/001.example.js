/* eslint-disable */

function convert (a) {
    var c = []; // создаем пустой массив
    for (let i = 0; i < a.length; i++) { // запускаем цикл с 0 до количества элементов в а
        c.push(parseInt(a[i])) // 1. c.push - закидываем на кадом цикле в массив c
        // 2. parseInt - преобразовывает строку в цифру (если может) a[i] - обращается по индексу i начиная с нуля
        // то есть с индексом a[0] = "1", a[1] = "2"
        // например на первой итерации где i = 0 он берет a[0], то есть "1" и бросает это в parseInt
        // parseInt возвращает уже цифру 1
        // потом эта цыфра push в массив, так как в массиве с ничего нет, то самому первому значению (1) будет присвоен индекс 0
        // то есть в c[0] будет 1
        // потом цыкл заканчивается и i увеличивается на 1 то есть теперь i = 1 и все снова пока не достигнет последний элемент в массиве а
    }
    return c; // после окончания цикла функция convert возвращает новый массив с цифрами$
}

convert(["1", "2", "3", "4", "5"]); // пример вызова функции со строковыми значениями она вернет все значения цифры
