import sharp from 'sharp';

const file_path = 'D:/Images/sharp/'
const image = sharp(file_path + '1.jpg')
console.log(await image.metadata())

image
  .resize(200, 200)
  .toFile(file_path + '1_200x200.jpg', (err, info) => {
    if (err) console.log(err)
    console.log(info)
  })