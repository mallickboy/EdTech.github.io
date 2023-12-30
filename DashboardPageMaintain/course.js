const { insertFile, getFile, getFilesByCriteria,getCourses } = require('../databaseMaintain/coursesdb');


// const os= require("os")
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');
const courseRoute = (express, app) => {
    app.use('/files', express.static('DashboardPageMaintain/files'));
  app.get('/file/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const result = await getFile(id);
      res.send(result[0]);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });

  // Middleware for serving static files
//   app.use('/files', express.static(path.join(__dirname, 'files')));

  // Middleware for file upload
  app.use(fileUpload());
  const generateFilename = (userId, originalFilename) => {
    const timestamp = Date.now();
    const fileExtension = path.extname(originalFilename);
    const uniqueFilename = `${userId}-${timestamp}${fileExtension}`;
    return uniqueFilename;
  };
  app.post('/upload', async (req, res) => {
    try {
      const userId = req.body.userId || 'defaultUserId';
      const contentType = req.body.contentType;
      const year = req.body.year;
      const subject = req.body.subject;
      const courseName = req.body.courseName;

      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
      }

      const file = req.files.file;
      const uniqueFilename = generateFilename(userId, file.name);
      const relativeFilePath = `courses/${year}/${subject}/${contentType}`;

      file.mv(path.join(__dirname, 'files', relativeFilePath, uniqueFilename), async (err) => {
        if (err) {
          console.error('Error:', err);
          return res.status(500).json({ success: false, message: 'Error uploading file' });
        }

        // Insert file information into the database
        const fullpath = relativeFilePath + '/' + uniqueFilename;
        await insertFile(courseName, year, contentType, subject, uniqueFilename, fullpath);

        console.log(`User ID: ${userId}`);
        console.log(`Saved Filename: ${uniqueFilename}`);
        const fileUrl = `http://localhost:8080/files/${relativeFilePath}/${uniqueFilename}`;
        res.json({ success: true, message: 'File uploaded successfully', fileUrl });
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });

  app.get('/uploadfileform', (req, res) => {
    fs.readFile(__dirname + '/index.html', 'utf8', (err, text) => {
      res.send(text);
    });
  });

  app.get('/getFiles', async (req, res) => {
    try {
      const { year, subject, contentType, courseName } = req.query;

      const fileLinks = await getFilesByCriteria(year, subject, contentType, courseName);

      res.json({ success: true, fileLinks });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });
  app.get("/getcourses",async(req,res)=>
  {
      data=await getCourses(2023);
      res.send(data)
  })
};

module.exports = { courseRoute };