import inq from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inq.prompt([
 { message: "type in your URL ",
  name:"URL"},
]).then((answers)=>{
  const url=answers.URL;
  console.log(url);
  var qr_png = qr.image(url,{ type: 'png' });
  qr_png.pipe(fs.createWriteStream('qr.png'));

  fs.writeFile("message.txt", url, (err)=>{
    if (err) console.log(err);
  })
}).catch((err)=>{
  if(err) console.log(err);
})
