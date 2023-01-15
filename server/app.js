const express=require('express')
const app=express()
require('dotenv').config()
const mongoose=require('mongoose')
const cors=require('cors')

const bodyparser=require('body-parser')
const imagesRoutes=require('./routes/imagesRouter')


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
const authRoutes=require('./routes/authRoutes')

app.use('/api',authRoutes)
app.use('/api',imagesRoutes)
//AIzaSyDrh8E4PDW8XTfv2B-uxQRE2D4F5t22Mbo
const apiKey = 'AIzaSyDrh8E4PDW8XTfv2B-uxQRE2D4F5t22Mbo';

const folderId = '1eKiEwLrV9lx7bmO9cqA3pUBsOZfjeiUr';

// const drive = google.drive({version: 'v3'});

// const folderLink = `https://drive.google.com/drive/folders/${folderId}`;

// drive.files.list({q: `'https://drive.google.com/drive/folders/1nBIXcK7JSUzYoZaJfDMetnPfLBRkk6dW?usp=share_link' in parents`}, (err, res) => {
//     if (err) return console.error(err);
//     const files = res.data.files;
//     for (const file of files) {
//         console.log(file.name);
//         console.log(file.mimeType);
//     }
// });


app.use('/',(req,res)=>
{
    res.status(200).json({message:'Working fine!!'})
})


mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://ravichauhan0407:ravi0407@cluster0.0o00cg4.mongodb.net/?retryWrites=true&w=majority`,{ useNewUrlParser: true,
useUnifiedTopology: true }).then((res)=>
{
       console.log('connected')
       app.listen(8000)
}).catch((err)=>
{
    console.log(err)
})
