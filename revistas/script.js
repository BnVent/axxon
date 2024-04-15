const { exec } = require("child_process");
const fs = require("fs")

const cantidadDeRevistas = 301;
const getRelativePathOfBook = numBook => `${__dirname}/axxon${numBook}/axxon${numBook}.htm`

const executeCommand = () => {
   exec("convert ") 
}



/* const fs = require("fs")

const cantidadDeRevistas = 301;
const getRelativePathOfBook = numBook => `${__dirname}/axxon${numBook}/axxon${numBook}.htm`

for(let i = 0; i < cantidadDeRevistas; i++){
    fs.readFile(getRelativePathOfBook(i), {}, (err, data) => {
        if(err) throw new Error(err)
    
        let pageDocument = data.toString()
        let matchTitle = pageDocument.match(/<h1 class="indicetitulo">(.*?)<\/h1>/ig)[0]
        let finalTitleString = matchTitle.split('>')[1].split('<')[0]
    
        console.log(finalTitleString);
    })
}

 */