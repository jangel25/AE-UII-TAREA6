const fs = require('fs');
let r = [];
let total="";

fs.readFile('alumnos.csv','utf8', (err, data) => {
    if (err) throw err;
    temp="";
    for(i=0;i<=data.length;i++){
        if(i==data.length){
            r.push(temp);
            break;
        }
        if(data.charAt(i)==','||data.charAt(i)=='\n'){
            r.push(temp);
            temp="";
            continue;
        }
        temp+=data.charAt(i);
    }
    e=4;
    for(i=0;i<r.length;i++){
        if(e==4){
            cad="No. :";
        }
        if(e==3){
            cad="No. Control: ";
        }
        if(e==2){
            cad="Nombre: ";
        }
        if(e==1){
            cad="Calificacion: ";
        }
        
        total+=(cad+r[i]+" \n");
        if(e==1){
            e=4;
            total+="\n"
        }else{
            e--;
        }
        cad="";
    }
    fs.writeFile("alumnos.txt", total, function(err) {
        if(err) {
            return console.log(err);
        }
    });
  });