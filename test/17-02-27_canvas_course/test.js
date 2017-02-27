document.write('<table border="1" cellspacing="0" width="150">');
for(var i=0;i<digit.length;i++){
    for(var j=0;j<digit[i].length;j++){
      document.write('<tr>');
      for(var k=0;k<digit[i][j].length;k++){
        if(digit[i][j][k]==1){
          document.write('<td bgcolor="#000">');
        }else{
          document.write('<td>');
        }
        document.write(digit[i][j][k]+'</td>');
      }
      document.write('</tr>');
    }
    document.write("<tr>");
      document.write("<td height='20'></td><td></td><td></td><td></td><td></td><td></td><td></td>");
    document.write("</tr>");
}
document.write('</table>');
