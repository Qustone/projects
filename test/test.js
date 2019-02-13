/*  Задание "Ряд и кратность"

Написать программный код, который перебирает целые числа от 0 
до бесконечности и выводит на экран те, которые делятся без 
остатка на количество разрядов (знаков) этого числа 
(т.е. те двухзначные, которые делятся на 2, трехзначные на три и т.д.). 
Выполнение обработки должно остановиться в тот момент, когда всего 
будет выведено N (задается пользователем) таких чисел.

Результат нужно предоставить в виде:
1) исходный код
2) результат выполнения кода для N = 28, 120, 500 */


function Click() {

	let number = document.getElementById('num').value; 	
	let res = document.getElementById('result');
	let a = 0;
	let i = 0;
	res.innerHTML = '';
	
		while( a < number ) {
			if( i % i.toString().length == 0 ) {
				res.innerHTML += i + ', ';
				a = a+1;
			}
			i = i+1;
		}
		let fin = res.innerHTML;
		fin = fin.substring(0, (fin.length-2));
		res.innerHTML = fin;
}