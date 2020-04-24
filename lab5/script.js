
let human_1 = {
	surname:"Melnychuk", 
	name:"Yana", 
	date:"10/7/2001", 
	gender:"F"
};

let human_2 = {
	surname:"Anna", 
	name:"Huljakevych", 
	date:"12/7/2001", 
	gender:"F"
};

let human_3 = {
	surname:"Kostyuk", 
	name:"Andriy", 
	date:"12/8/2001", 
	gender:"M"
};

//Повертає слово без голосних букв
function withoutVowels(word){              
    return word.replace(/[aeiouy]/gi, "");
}

//Повертає слово без приголосних букв
function withoutConsonant(word){              
    return word.replace(/[qwrtpsdfghjklzxcvbnm]/gi, "");
}

//Прізвище

function lenght_surname(word){
	var surname1 = "";
	var len = 0;

  //Якщо прізвище складається більше ніж з 3 приголосні або 3 приголосні, удаляємо всі голосні записуємо тільки перші 3 
  //приголосні (переводимо все в верхній регістр)
	if(withoutVowels(word).length >= 3){
		for(var i=0; i<3; i++){
			surname1 +=withoutVowels(word.toUpperCase())[i];
		}
		return surname1;
	}

	//Якщо приголосних менше 3 + голосні в тому порядку
	if(withoutVowels(word).length < 3 && word.length >= 3){
		surname1 = withoutVowels(word.toUpperCase());
		len = 3 - surname1.length;
		for(var i=0; i<len; i++){
			surname1 += withoutConsonant(word.toUpperCase())[i];
		}
		return surname1;
	}

	if(word.length < 3){
		var tmp = "XXX";
		len = 3 - word.length;
		surname1 = word.toUpperCase();
		for(var i = 0; i<len; i++){
			surname1 += tmp[i];
		}
		return surname1;
	}
}

//Ім'я

function lenght_name(word){
	var name1 = "";
	var len = 0;

	//Якщо ім'я складається з рівно з 3 приголосних то виводимо їх в тому ж порядку
	if(withoutVowels(word).length == 3){
		name1=withoutVowels(word.toUpperCase());
		return name1;
	}
	
	//Якщо ім'я складається більше ніж з 3 приголосні виводимо 1,3,4 (переводимо все в верхній регістр)
	if(withoutVowels(word).length > 3){
		for(var i=0; i<4; i++){
			if(i==1){
				continue;
			}
			name1 +=withoutVowels(word.toUpperCase())[i];
		}
		return name1;
	}

	//Якщо ім'я складається менш ніж з 3 приголосних: додаємо в кінець голосні (переводимо все в верхній регістр)
	if(withoutVowels(word).length < 3 && word.length >= 3){
		name1 = withoutVowels(word.toUpperCase());
		len = 3 - name1.length;
		for(var i=0; i<len; i++){
			name1 += withoutConsonant(word.toUpperCase())[i];
		}
		return name1;
	}

	//Якщо ім'я складається менше ніж з 3 букв то виводимо їх спочатку приголосні потім голосні і поки не стане 3 букви додаємо X (переводимо все в верхній регістр)
	if(word.length < 3){
		var tmp = "XXX";
		name1 = withoutVowels(word.toUpperCase()) + withoutConsonant(word.toUpperCase());
		len = 3 - name1.length;
		for(var i = 0; i<len; i++){
			name1 += tmp[i];
		}
		return name1;
	}
}

//Дата і стать

function da_te(date, gender){
	var day ="";
	var month ="";
	var year ="";
	day=date.split('/')[0]; 
	month=date.split('/')[1];
	year=date.split('/')[2];

	var year1 = year[2]+year[3]; 
	var day1 = "";

	//Робота з днем
	if(gender === "F"){
		day1=parseInt(day)+40; 
	}
	if(gender === "M" && day < 10){
		day1="0"+day;
	}
	if(gender === "M" && day >= 10){
		day1=day;
	}

	var list_months = { 
		1: "A", 
		2: "B", 
		3: "C", 
		4: "D", 
		5: "E", 
		6: "H", 
		7: "L", 
		8: "M", 
		9: "P", 
		10: "R", 
		11: "S", 
		12: "T" 
	};

	var month1=list_months[month];
	var full_date = year1 + month1 + day1;
	return full_date; 

}

console.log("Завдання №1");
console.log("human_1:");
console.log("       "+"surname:" + human_1.surname);
console.log("       "+"name:" + human_1.name);
console.log("       "+"date:" + human_1.date);
console.log("       "+"gender:" + human_1.gender);
console.log("Ідентифікаційний код:");
console.log( lenght_surname(human_1.surname) + lenght_name(human_1.name) + da_te(human_1.date, human_1.gender));
console.log(" ");

console.log("human_2:");
console.log("       "+"surname:" + human_2.surname);
console.log("       "+"name:" + human_2.name);
console.log("       "+"data:" + human_2.date);
console.log("       "+"gender:" + human_2.gender);
console.log("Ідентифікаційний код:");
console.log(lenght_surname(human_2.surname) + lenght_name(human_2.name) + da_te(human_2.date, human_2.gender));
console.log(" ");

console.log("human_3:");
console.log("       "+"surname:" + human_3.surname);
console.log("       "+"name:" + human_3.name);
console.log("       "+"data:" + human_3.date);
console.log("       "+"gender:" + human_3.gender);
console.log("Ідентифікаційний код:");
console.log(lenght_surname(human_3.surname) + lenght_name(human_3.name) + da_te(human_3.date, human_3.gender));
console.log(" ");