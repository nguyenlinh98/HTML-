var n=prompt("nhap n=");
 var gt=1;
 if(n==0)
 {
 	n=prompt("nhap lại n:");
 }	else {
 	for( var i=1;i<=n;i++)
	 {
	 	gt=gt*i;
	 }
	 document.write("giai thừa của"+n+"!="+gt+"<br>");
	 var i=1;
	 var giaithua=1;
	 while (i<=n) {
	 	giaithua*=i;
	 	i++; 
	 }
	 document.write("giaithua cua"+n+"la"+giaithua+"<br>");
	 var gthua=1;
	var i=1;
	 do {
	 	i++;
	 	gthua=gthua*i;
	 } while (i<n)
 document.write("giai thua la:"+gthua);
 }
 