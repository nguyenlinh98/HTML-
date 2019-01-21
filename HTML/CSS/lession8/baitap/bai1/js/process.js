var n = prompt("nhap n:");
 if(n > 0 && n < 100)
 {
 	var i=0;
 	var mang = new Array();
 	 while (i<n) {
 	 	mang.push(prompt('Nhap phan tu thu : '+i+' : '));
 	 	i++;
 	 }

 	 document.write(mang);
 }	else {
 	 prompt("nhap lai n:");

 }
