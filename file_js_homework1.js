console.log('number' + 3 + 3); /* number33, 
коли один з операндів є строковим, 
JavaScript перетворює інший операнд на рядок, 
число '3' перетворюється на строку '"3"',
оператор '+' використовується для конкатинації строк, '"number" + "3"' => "number3", 
рядок '"number3"' і число '3' перетворюється на рядок '"3"', 
'"number3" + "3"' => "number33" */

console.log(null + 3); /* 3
при використанні математичних операцій 'null' перетворюється на '0', '0 + 3' => 3 */

console.log(5 && "qwerty"); /* 5qwerty
 && логічний оператор 'і', => перевірка 2-х умов,
повертає перше значення якщо false і друге значення якщо true, 
всі числа окрім '0' => true, будь-який рядок окрім порожньої "" => true
5 => true, qwerty => true, обидва операнди є true, тому повертається другий операнд */ 

console.log(+'40' + +'2' + 'hillel'); /* 42hillel
унарний '+' перетворює рядок на число, рядок '"40" та "2"' перетворюєится на числа '40 та 2',
два операнди є числами виконується математичне додавання чисел '40 + 2' => 42
'hillel' є рядком отже виконується перетворення числа '42' на рядок '"42"' 
і відбувається конкатинація '"42" + "hillel"' => "42hillel" */



