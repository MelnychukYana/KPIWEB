console.log(" ");
console.log(" Завданя №2 ");

let horizontal = [
	["A","A"],
	["B","B"],
	["C","C"]
];
  
  let vertical = [
    ["A", "B"],
    ["A", "B"],
    ["A", "B"]
];

  let diagonalleft=[
    ["A", "B", "C"],
    ["C", "A", "B"],
    ["B", "C", "A"],
    ["A", "B", "C"]
  ];

  let diagonalright=[
    ["A", "B", "C"],
    ["B", "C", "A"],
    ["C", "A", "B"],
    ["A", "B", "A"]
  ];

  function braclet(pattern){
    element2 = true;
    element1=true;
    element3=true;
    element4=true;
    for (var i=0;i<pattern.length;i++ ){
            console.log(pattern[i]);
        }
      for (var i=0;i<pattern.length;i++ ){
        for(var j = 1; j <pattern[i].length; ++j){
            if (pattern[i][j]!=pattern[i][j+1])
            element1=false;
        }
      }
      for(var j = 0; j < pattern[0].length; ++j){
		for(var i = 1; i < pattern.length; ++i){
            if(pattern[i][j]!=pattern[i-1][j]) 
            element2 = false;
		}
	}
    for (var i=0;i<pattern.length-2;i++ ){
        for(var j = 0; j <pattern.length-2; ++j){
            if (pattern[i][j]!=pattern[i+1][j+1])
            element3=false;
        }
      }
      for (var i=0;i<pattern.length-1;i++ ){
        for(var j = pattern[0].length-1; j>0; --j){
            if (pattern[i][j]!=pattern[i+1][j-1])
            element4=false;
        }
      }
      return element4||element3||element2||element1;
  }

 
  console.log(braclet(horizontal));
  console.log(braclet(vertical));
  console.log(braclet(diagonalleft));
  console.log(braclet(diagonalright));
