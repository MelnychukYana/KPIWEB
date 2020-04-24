var row = 0;
function sequencing()
{
  let ascending = false;
  for (var i = 1; i <= Math.trunc(row.length/2); i++)//Функція Math.trunc() повертає цілу частину числа, повністю відкидаючи дробову.
  {
    ascending = true;
    var tmp = 0;
    for (var j = i; tmp < row.length-j; )
    {
      if(Number(row.slice(tmp+j, tmp+j+j)) - Number(row.slice(tmp, tmp+j)) == 1)
        tmp += j;
      else if (Number(row.slice(tmp+j, tmp+j+j+1)) - Number(row.slice(tmp, tmp+j)) == 1)
      {
        tmp += j;
        j++;
      }
      else
      {
        ascending = false;
        break;
      }
    }
    if (ascending)
      break;
  }
  document.getElementById('sequencing_output').innerHTML = ascending ? "Yes" : "No";
}
