//const validator =require('validator')
const chalk = require('chalk')
const { demand, demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

//customise yargs version

yargs.version('1.1.0')

//add,remove,read,list

//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Notes',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'Removing A note',
    builder:{
        title:
        {
            describe: 'title of the note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv)
    {
        notes.removeNote(argv.title)
    }
})

//list command
yargs.command({
    command:'list',
    describe:'Listing the notes.',
    handler()
    {
        notes.listNotes()
    }
})

//read command
yargs.command({
    command:'read',
    describe:'reading the notes',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.readNotes(argv.title)
    }

    })

yargs.parse()

//console.log(yargs.argv)

















//const text=getNotes()
//const msg=chalk.italic.red('How you doin?')
//console.log(process.argv[2])
//console.log(chalk.bgWhite.red(text))
//console.log(chalk.green('Success'))
//console.log(chalk.magenta.bgWhite.bold('I am a programmer'))
//console.log(validator.isURL('https://xyz.com'))