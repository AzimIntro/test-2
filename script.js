let name = 'Alex';
let money = 10000;
let account = 7777;
switch (nameInput) {
case 'Alex':
console.log(`Здравствуйте, ${nameInput}`);
break;
default:
console.log('Пользователь не найден, до свидули');
 break;
}switch (true) {
case nameInput !== 'Alex':
break;
case accountInput === account:
let nameInput = 'Alex';
let accountInput = 7777;
let withdrawAmount = 5000;
console.log(`Ваш номер счета: ${accountInput}`);
break;
default:
console.log('Неверный номер счета');
}switch (true) {
case nameInput === 'Alex' || accountInput === account:
break;
case withdrawAmount <= money:
console.log('Все отлично');
console.log(`Вы сняли: ${withdrawAmount}`);
console.log(`Остаток на счете: ${money}`);
break;
default:
console.log('Недостаточно средств');
break;
}