
const {google} = require('googleapis');

exports.getImagesFromDrive = async (req, res) => {

  const apiKey = "AIzaSyDrh8E4PDW8XTfv2B-uxQRE2D4F5t22Mbo";

  const folderId = "1eKiEwLrV9lx7bmO9cqA3pUBsOZfjeiUr";
  const drive = google.drive({ version: "v3" });

  const folderLink = `https://drive.google.com/drive/folders/${folderId}`;

  drive.files.list(
    {
      q: `'https://drive.google.com/drive/folders/1nBIXcK7JSUzYoZaJfDMetnPfLBRkk6dW?usp=share_link' in parents`,key:apiKey
    },
    (err, result) => {
      
      const files = result.data.files;
      res.json({files:files})
    }
  );
};
