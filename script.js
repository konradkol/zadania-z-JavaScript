//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------

//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych
console.log(
  "/* 1.a) Zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych */"
);

const isEasy = true;
const age = 39;
const firstName = "Konrad";

console.log(isEasy, typeof isEasy);
console.log(age, typeof age);
console.log(firstName, typeof firstName);

//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.
// 2 + "2"
// 2 + 2
// 2 * "2"
// 2 * 2
// 1 == true
// 0 == false
// 0 == null
// null == undefined
console.log(
  "/* 1.b) Użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika: */"
);

console.log(
  2 + "2",
  `'2 + "2"' - Podczas dodawania typu number i typu string zachodzi niejawna konwersja do typu string`
);
console.log(
  2 + 2,
  "'2 + 2' - Przy dodawaniu do siebie typów number zwracany jest typ number"
);
console.log(
  2 * "2",
  `'2 * "2"' - Podczas mnożenia typu number i typu string zachodzi nejawna konwersja do typu number`
);
console.log(
  2 * 2,
  "'2 * 2' - Przy mnożeniu typów number zwracany jest typ number"
);
console.log(
  1 == true,
  "'1 == true' - Wynikiem będzie typ Boolean i będzie to true. True jest konwertowane na 1, natomiast '==' to porównanie dwóch wartości bez uwzględnienia ich typu"
);
console.log(
  0 == false,
  "'0 == false' - Wynikiem będzie typ Boolean i będzie to true. False jest konwertowane na 0, natomiast '==' to porównanie dwóch wartości bez uwzględnienia ich typu"
);
console.log(
  0 == null,
  "'0 == null' - Wynikiem będzie typ Boolean i będzie to false. Null to nie to samo co 0"
);
console.log(
  null == undefined,
  "'null == undefined' - Wynikiem będzie typ Boolean i będzie to true. Przy porównaniu '==' te typy są sobie równe."
);

//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="
console.log(
  '/* Napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "===" */'
);

console.log(`"="   - to operator przypisania wartości
"=="  - to operator logiczny porównania dwóch wartości bez uwzględniania ich typu
"===" - to operator logiczny porównania dwóch wartości z uwzględnieniem ich typu`);

//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli
console.log(
  "/* 1.c) Napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli */"
);

console.log(`Podczas tworzenia typu prostego przypisujemy do niego jakąś konkretną wartość. 
Natomiast do typu referencyjnego nie przypisujemy konkretnej wartości tylko wskazuje on 'na miejsce' w pamięci, gdzie przechowywana jest dana wartość.
W tym przypadku kilka zmiennych może wskazywać na to samo miejsce. (Zmieniając jedną z nich zmieniamy wszystkie) 
const name = 'Konrad'           - to typ prosty
const person = {name: "Konrad"} - typ referencyjny`);

//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości:
// let val = 0 (przekonwertuj na typ Boolean)
// let num = "2137" (przekonwertuj na typ Number)
// let str = 007 (przekonwertuj na String)
// let und = undefined (przekonwertuj na Boolean)
console.log(
  "/* 1.d) Spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości: */"
);

let val = 0;
console.log("'let val = 0 (przekonwertuj na typ Boolean)'", Boolean(val));
let num = "2137";
console.log(`'let num = "2137" (przekonwertuj na typ Number)'`, num * 1);
let str = 007;
console.log("'let str = 007 (przekonwertuj na String)'", "00" + str);
let und = undefined;
console.log("'let und = undefined (przekonwertuj na Boolean)'", !!und);

//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli
console.log(
  "/* 1.e) Stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli */"
);

const arr = new Array();
console.log(arr);
arr.push(1, 2, 3);
console.log(arr);

//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli
console.log(
  "/* 1.f) Stwórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli */"
);

const color = "red";
const car = new Object();
console.log(car);
car.model = "Fiat";
car["11.02.23"] = "production";
car[color] = "color";
console.log(car);

//g)* opisz krótko czym dokładnie jest typ NaN
console.log("/* 1.g)* Opisz krótko czym dokładnie jest typ NaN */");

console.log(
  `'NaN' - jest typem number, ale to nie jest liczba. Jest zwracany jeśli w wyniku jakiegoś działania matematycznego nie można odczytać konkretnej liczby. Np. podczas dzielenia przez 0 
   czy mnożenia string i number `
);
//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko
console.log(
  "/* 1.h)** Znajdź w sieci informacje o typie Symbol i opisz go krótko */"
);

console.log(`Został wprowadzony w języku JavaScript od wersji ECMAScript 2015 (ES6). Jest to specjalny typ wartości, który reprezentuje unikalny i niezmienialny identyfikator. Symbole są tworzone za pomocą funkcji konstruktora Symbol() lub z użyciem składni literałowej Symbol(description), gdzie description jest opcjonalnym parametrem pozwalającym na dodanie opisu symbolu. 
Główną cechą symboli jest ich unikalność. Każdy utworzony symbol jest unikalny i niepowtarzalny, nawet jeśli dwa symbole mają tę samą nazwę, są one różne i nieporównywalne. Symbole są przydatne w przypadkach, gdy potrzebujemy utworzyć unikalny identyfikator, np. jako klucz w obiekcie lub symbolizujący niepowtarzalną funkcjonalność w kodzie.`);
//--------------------------
//2. FUNKCJE & WARUNKI
//--------------------------

//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb
console.log(
  "/* 2.a) Napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb */"
);

const sum = (num1, num2, num3) => num1 + num2 + num3;
console.log(sum(1, 4, 5));

//b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik
console.log(
  "/* 2.b) Napisz funkcję która przyjmie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik */"
);

const triangleArea = (h, a) => 0.5 * a * h;
console.log(triangleArea(2, 4));

//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację
console.log(
  "/* 2.c) Napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację */"
);

const howManyYearsFrom18 = (age) => {
  if (age < 18) {
    return console.log("Podany wiek jest mniejszy niż 18 lat.");
  }
  return console.log(`Od 18 urodzin minęło ${age - 18} lat`);
};
howManyYearsFrom18(18);
howManyYearsFrom18(25);
howManyYearsFrom18(15);

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości
console.log(
  `/* 2.d) Napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości */`
);

const howLongArray = (arr, num) => {
  if (arr.length < 3) {
    return console.log("Twoja tablica ma mniej niż 3 elementy");
  }
  if (num > arr.length) {
    return console.log("Twoja tablica nie posiada tylu elementów");
  }
  return console.log(
    `Przekazana tablica ma ${
      arr.length
    } elementów a elementem numer ${num} jest ${arr[num - 1]}`
  );
};
howLongArray([1, 2, 3], 3);
howLongArray([1, 2, 3], 2);
howLongArray([1, 2, 3], 4);
howLongArray([1, 2], 4);

//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.
console.log(
  `/* 2.e) Napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie */`
);

let testPerson = {
  name: "Jan",
  surname: "Kowalski",
  age: 20,
  height: 180,
};
const personInfo = (obj) =>
  console.log(
    `Pan/i ${obj.name} ${obj.surname} ma ${obj.age} lat oraz ${obj.height} cm wzrostu".`
  );
personInfo(testPerson);

//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.
console.log(
  "/* 2.f) Napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek */"
);

const changePersonAge = (obj, age) => {
  obj.age = age;
  console.log(obj);
};
changePersonAge(testPerson, 25);

//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"
console.log(`/* 2.g) Napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
   - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
   - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
   - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz" */`);

const checkNumber = (num) => {
  if (typeof num !== "number") {
    return console.log("Można podać tylko wartość typu number");
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    return console.log("Fizz");
  } else if (num % 5 === 0) {
    return console.log("Buzz");
  }
};
checkNumber("test");
checkNumber(15);
checkNumber(5);
checkNumber(3);
checkNumber(2);

//h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego
console.log(
  "/* 2.h) Napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego */"
);

const isEqual = (num) =>
  !(num % 2)
    ? `Wprowadzona liczba ${num} jest parzysta`
    : `Wprowadzona liczba ${num} jest nieparzysta`;

console.log(isEqual(2));
console.log(isEqual(3));

//i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10
console.log(
  "/* 2.i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10 */"
);

const getRandomNumberFrom1To10 = () =>
  parseInt((Math.random() * 9 + 1).toFixed());

console.log(getRandomNumberFrom1To10(), typeof getRandomNumberFrom1To10());
// dodatkowa pętla żeby sprawdzić działanie losowania
for (let i = 1; i <= 10; i++) {
  console.log(getRandomNumberFrom1To10());
}

//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu
console.log(
  "/* 2.j)** Napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu */"
);

const getRandomNumFromMinToMax = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

console.log(getRandomNumFromMinToMax(11, 15));
console.log(getRandomNumFromMinToMax(1, 5));

//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.
console.log(
  "/* 2.k)*** Wyszukaj w internecie metody Javascriptowe Math. I użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu */"
);

console.log(
  "odp.1. Napisz funkcję, która przyjmie jakąś liczbę a nastepnie za pomocą odpowiedniej metody wbudowanego w JS obiektu 'Math' obliczy i zwróci pierwiastek kwadratowy tej liczby"
);

const calcSquare = (num) => Math.sqrt(num);
console.log(calcSquare(4));

console.log(
  "odp.2. Napisz funkcję, która przyjmie dwa parametry. Pierwszym będzie dowolna liczba, natomiast drugim wartość potęgi do jakiej ma zostać podniesiona ta liczba. Niech funkcja za pomocą odpowiedniej metody obiektu 'Math' obliczy i zwróci wartość tego działania"
);

const calcPow = (num, x) => Math.pow(num, x);
console.log(calcPow(2, 3));

console.log(
  "odp.3 Napisz funkcję, która przyjmie kilka liczb. A następnie za pomocą odpowiedniej metody obiektu 'Math' zwraca największą z nich. UWAGA: Funkcja powinna działać niezależnie od ilości przekazanych do niej parametrów. Dodatkowo jeśli choć jedna z podanych wartości nie będzie typem 'number' funkcja powinna przerwać dalsze działanie i wyświetlić odpowiedni komunikat"
);

const getMaxNumber = (...rest) => {
  if ([...rest].some((num) => typeof num !== "number")) {
    return console.log(
      "Co najmniej jedna z wprowadzonych wartości nie jest typu 'number'"
    );
  }
  return Math.max(...rest);
};
console.log(getMaxNumber(1, 2));
console.log(getMaxNumber(1, 3, 2));
console.log(getMaxNumber(10, 2, 5, "test", 100));

//--------------------------
// 3. FUNKCJE & PĘTLE
//--------------------------

console.log("/* 3. FUNKCJE & PĘTLE */");
//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9
console.log("a)");

const countDownFrom1To9 = () => {
  for (let i = 1; i <= 9; i++) {
    console.log(i);
  }
};
countDownFrom1To9();
//b) napisz pętlę która odliczy od 9 do 1
console.log("b)");

const countDownFrom9To1 = () => {
  for (let i = 9; i >= 1; i--) {
    console.log(i);
  }
};
countDownFrom9To1();
//c) napisz pętlę która odliczy od 5 do 15
console.log("c)");

const countDownFrom5To15 = () => {
  for (let i = 5; i <= 15; i++) {
    console.log(i);
  }
};
countDownFrom5To15();
//d) napisz pętlę która odliczy od 0 do -10
console.log("d)");

const countDownFrom0ToMinus10 = () => {
  for (let i = 0; i >= -10; i--) {
    console.log(i);
  }
};
countDownFrom0ToMinus10();
//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2
console.log("e)");

const countDownFrom1To20Every2 = () => {
  for (let i = 1; i <= 20; i += 2) {
    console.log(i);
  }
};
countDownFrom1To20Every2();
//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4
console.log("f)");

const countDownFrom10ToMinus10Every4 = () => {
  for (let i = 10; i >= -10; i -= 4) {
    console.log(i);
  }
};
countDownFrom10ToMinus10Every4();
//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...
console.log("g)");

const countDownFrom1To100Every2x = () => {
  for (let i = 1; i <= 100; i *= 2) {
    console.log(i);
  }
};
countDownFrom1To100Every2x();
//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości
console.log("h)");

const countDownFrom1To10EveryOdd = () => {
  for (let i = 1; i <= 10; i++) {
    if (i % 2) {
      console.log(i);
    }
  }
};
countDownFrom1To10EveryOdd();
//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego
console.log("i)");

const countDownFrom1To10EvenAndOdd = () => {
  for (let i = 1; i <= 10; i++) {
    i % 2
      ? console.log(i, "Liczba nieparzysta")
      : console.log(i, "Liczba parzysta");
  }
};
countDownFrom1To10EvenAndOdd();

//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości
console.log("j)");

const countDownToNum = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};
countDownToNum(3);
//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)
console.log("k)");

const countDownEveryNum = (num) => {
  if (num <= 0) return;
  for (let i = num; i <= 50; i += num) {
    console.log(i);
  }
};
countDownEveryNum(3);
//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób
console.log("l)");

const arrNames = [
  "Ksawery",
  "Zenobiusz",
  "Klementyna",
  "Apolonia",
  "Jeremiasz",
  "Bernadetta",
];
const showHello = (arr) => arr.forEach((name) => console.log(`Witaj ${name}`));
showHello(arrNames);

//ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.
console.log("ł)");

const arrObjects = [
  {
    brand: "Mustang",
    color: "niebieski",
  },
  {
    brand: "Tesla",
    color: "czarna",
  },
  {
    brand: "Polonez",
    color: "żółty",
  },
  {
    brand: "Toyota",
    color: "fioletowa",
  },
];
const showObjInfo = (arr) =>
  arr.forEach((obj) =>
    console.log(`Przed Tobą stoi ${obj.color} ${obj.brand}`)
  );
showObjInfo(arrObjects);

//m) napisz funkcję która przyjmie tablic arrNumbers i wyświetli w konsoli tylko przyste elementy tablicy
console.log("m)");

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const showEvenElements = (arr) =>
  arr.forEach((num) => (!(num % 2) ? console.log(num) : null));
showEvenElements(arrNumbers);

//n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// - za pomocą push umieści numery parzyste w tablicy arrEven
// - na końcu zwróci obiekt z tymi trzema tablicami
console.log("n)");

const arrTypes = [
  2,
  4,
  5,
  undefined,
  null,
  "val",
  NaN,
  7,
  10,
  333,
  "874",
  22,
  21,
  400,
  "400",
  "undefined",
];

const arrOther = [];
const arrNubers = [];
const arrEven = [];

const getObjWithArrTypes = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      arrOther.push(arr[i]);
    } else {
      arrNubers.push(arr[i]);
    }
    if (!(arr[i] % 2) && typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
      arrEven.push(arr[i]);
    }
  }
  return {
    arrOther,
    arrNubers,
    arrEven,
  };
};
console.log(getObjWithArrTypes(arrTypes));
//--------------------------
// 4. METODY
//--------------------------
console.log("/* 4. METODY */");

//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names
console.log("a)");

const names = ["Seba", "Kari", "Mati", "Andżi"];
names.map((name) => console.log(`Hello ${name}`));

//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami
console.log("b)");

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayEven = array10.filter((num) => num % 2 === 0);
console.log(arrayEven);

//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami
console.log("c)");

const people = [
  {
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
  },
  {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
  },
  {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
  },
  {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
  },
];
const arrFemale = people.filter((el) => el.gender === "female");
console.log(arrFemale);
// lub można też
const arrFemale2 = people.filter((el) => el.name[el.name.length - 1] === "a");
console.log(arrFemale2);

//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.
console.log("d)");

const shopping =
  "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny";

const arrayShopping = shopping
  .split(" ")
  .map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase())
  .sort();
console.log(arrayShopping);

//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."
console.log("e)");

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const stringAlphabet = alphabet.join("");
console.log(stringAlphabet);

let reversedStr = "";
for (let i = stringAlphabet.length - 1; i >= 0; i--) {
  reversedStr += stringAlphabet[i];
}
console.log(reversedStr);

//  lub
const reversedStr2 = stringAlphabet.split("").reverse().join("");
console.log(reversedStr2);
