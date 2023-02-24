//require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const dotenv = require('dotenv');
const errorMiddleware = require('./middlewares/error-middleware');

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/', router);
app.use(errorMiddleware);

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(5000, () => console.log(`Server started on PORT ${PORT}`));

// const start = async () => {
//   try {
//     await mongoose.connect(process.env.DB_URL, {
//       useNewUrlParser: true,
//       // useCreateIndex: true,
//       useUnifiedTopology: true,
//       //useFindAndModify: false,
//       //useStrictQuery: false,
//     });
//     //mongoose.set('strictQuery', true);
//     app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
//   } catch (e) {
//     console.log(e);
//   }
// };

//start();
