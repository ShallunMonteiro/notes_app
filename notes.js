const fs = require('fs')
const chalk = require('chalk')

const getNotes=()=>
{
    return 'Your notes: '
}

//Creating function for adding notes.
const addNote = (title, body)=>
{
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note)=>note.title === title)
    /*
    const duplicateNotes = notes.filter(function (note)
    {
        return note.title ===title
    })
    */
   const duplicateNote = notes.find((note)=>note.title===title)

    if (!duplicateNote)
    {
        notes.push({
            title:title,
            body : body 
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added. :)'))
    }
    else 
    {
        console.log(chalk.green.inverse('Note title taken! :('))
    }
    saveNotes(notes)
}
//saving notes
const saveNotes = (notes)=>
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

//Loading notes 
const loadNotes = ()=>
{
    try
    {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return [ ]
    }
    
}
// Removing notes
const removeNote = (title)=>
{
    const notes=loadNotes()
    const notesToKeep =notes.filter((note)=>note.title !==title)
    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('No Note FOund!'))
    }
    

}
//listing notes
const listNotes = ()=>{
    console.log(chalk.inverse('Your Notes'))
    
    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    });

}
//Reading Notes
const readNotes =(title)=>{
    const notes= loadNotes()
    const note = notes.find((note)=>note.title===title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else
    {
      console.log(chalk.red.inverse('Note Not Found'))  

    }
}

module.exports = 
{
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes

}