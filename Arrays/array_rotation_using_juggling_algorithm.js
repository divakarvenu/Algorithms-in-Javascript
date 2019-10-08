
//using juggling algorithm

//First find greatest common divisior using Euclidean Algorithm
function gcd(a, b) {
  if (b == 0)
    return a;
  else
    return gcd(b, (a % b));
}

let i, j, k, temp;
for (i = 0; i < gcd(d, n); i++)
{
  /* move i-th values of blocks */
  temp = array_Data[i];
  j = i;
  while(1)
  {
    k = j + d;
    if (k >= n)
      k = k - n;
    if (k == i)
      break;
    array_Data[j] = array_Data[k];
    j = k;
  }
  array_Data[j] = temp;
}

console.log(array_Data);