import React from 'react';
const {dialog} = require('electron').remote;
var fs = require('fs');


const playSound = (path: string) => {
    fs.readFile(path, function(err: any, file: any){
        if (err) {
            console.log(err)
        }
        var base64File = new Buffer(file, 'binary').toString('base64');

        var audioSrc = 'data:audio/mp3;base64,' + base64File;
        var audio = new Audio();

        audio.src = audioSrc;
        audio.load();
        audio.play();
    });
}

export default function Home() {
    const click = () => {
        playSound('track_01.mp3')
        /*
         var options = {
          title: "Save file",
          //defaultPath : "my_filename",
          buttonLabel : "Save",

          filters :[
            {name: 'txt', extensions: ['txt',]},
            {name: 'All Files', extensions: ['*']}

           ]
        }

            */
          //fs.writeFileSync('ggwp.txt', "hello world", 'utf-8');
          /*
        dialog.showSaveDialog( options, (filename: String) => {
            try {
                console.log('file', filename)
          fs.writeFileSync(filename, "hello world", 'utf-8');
            } catch(e) {
                console.log('e', e)
            }
        })
        */
    }
    return (
        <div>
            <button onClick={click}>hi</button>
        </div>
    )
}