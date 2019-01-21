var a = prompt("nhập a");
var b =prompt("nhập b");
var c = prompt("nhập c");
var x;
var x1;
var x2;
var deta;
if(a == 0)
{
	if(b == 0)
	{	
		if(c == 0)
		{
		 document.write("phuong trinh vo so nghiem");	 
		}else{
			document.write("phương trình vô nghiệm");
		}
	}	else {	
		x=-b/c;
		document.write("phuong trinh co nghiem x="+x);
	}
}
else
{
 	 deta=b*b+(4*a*c);
 	if(deta<0)
 	{
 	 document.write("phuong trinh vo nghiem");
 	}else if(deta == 0){
 		 var x1=-b/(2*a);
 		document.write("phuong trinh có nghiem duy nhat x1="+x1);
 	} else {
 		x1=(-b+Math.sqrt(deta))/(2*a);
		x2=(-b-Math.sqrt(deta))/(2*a);
		document.write("Phuong trinh co 2 nghiem phan biet:"+"x1="+x1+"<br>"+"x2="+x2);
 	}
 
}