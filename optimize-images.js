import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";

(async () => {
  try {
    const files = await imagemin(["./img/*.{jpeg,jpg,png}"], {
      destination: "./build/images",
      plugins: [
        imageminMozjpeg({ quality: 80 }) // Set JPEG quality to 80%
      ]
    });

    // Log the destination paths of optimized images
    files.forEach(file => {
      console.log("Optimized image saved at:", file.destinationPath);
    });
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
})();