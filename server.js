
import app from './src/app.js'

const port = process.env.port || 3000;


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })