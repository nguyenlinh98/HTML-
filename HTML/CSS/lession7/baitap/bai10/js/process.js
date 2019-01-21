document.write("<table>");
  var tich;
tich=0;
document.write("<tr id='daude'>");
document.write("<td colspan='9'> bảng cửu chương");
document.write("</tr>")
document.write("<tr>");
for( var i=1;i<=9;i++)
{
	for(var j=1;j<=9;j++)
	{
		tich =i*j;
		document.write("<td>"+i+"x"+j+"="+tich+"</td>");
	}
document.write("</tr>");
}
document.write("</table>");
