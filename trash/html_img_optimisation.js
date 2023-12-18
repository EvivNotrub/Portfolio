async function getImageSizes() {
  let response = await fetch("./src/data/imageRenderSizes.json");
  let imageSizesList;
  if (response.ok) {
    imageSizesList = await response.json();
    return imageSizesList;
  } else {
    console.log("HTTP-Error: " + response.status);
  }
}

function addSrcSet() {
  const allImages = document.querySelectorAll('img[src*="/images"]');
  allImages.forEach(async (image) => {
    const newDir = image.src.replace(/\.[^/\\.]+$/, "/");
    const newRelDir = newDir.substr(newDir.indexOf("images") - 1);
    const file = image.src.substr(image.src.lastIndexOf("/") + 1);
    const fileName = file.replace(/\.[^/\\.]+$/, "");
    console.log(
      "image :",
      image,
      "\nnewDir :",
      newDir,
      "\nfile :",
      "\nnewRelDir: ",
      newRelDir,
      file,
      "NfileName :",
      fileName,
    );
    const imageSizesList = await getImageSizes();
    let pathList = [];

    image.src = `.${newRelDir}${fileName}.webp`;

    const imageResizeInfo = imageSizesList.find(
      (el) => el.fileName === fileName,
    );
    if (imageResizeInfo.fileSizes.length) {
      imageResizeInfo.fileSizes.map((size) => {
        pathList.push(
          `.${newRelDir}${fileName}-${size.sizeName}.webp ${size.size}w`,
        );
      });
    }
    const srcset = pathList.join(", ");
    if (fileName !== "instagram") {
      image.setAttribute("srcset", srcset);
    }
  });
}

addSrcSet();

const nina = document.querySelector(".picture.left img");
nina.setAttribute(
  "sizes",
  "(min-width: 2020px) 560px, (min-width: 1200px) calc(30vw - 40px), (min-width: 660px) calc(46.15vw - 75px), calc(80vw - 51px)",
);

const carouselItems = document.querySelectorAll(".carousel-item img");
carouselItems.forEach((image) => {
  image.setAttribute(
    "sizes",
    "(min-width: 2040px) 1920px, calc(94.19vw + 17px)",
  );
});

const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach((image) => {
  image.setAttribute(
    "sizes",
    "(min-width: 1400px) 424px, (min-width: 1200px) 364px, (min-width: 1000px) 304px, (min-width: 780px) 224px, (min-width: 580px) 254px, calc(100vw - 16px)",
  );
});

const camera = document.querySelector(".picture.right img");
camera.setAttribute(
  "sizes",
  "(min-width: 1600px) 419px, (min-width: 1200px) calc(28.16vw - 26px), (min-width: 1020px) calc(43.75vw - 68px), (min-width: 980px) calc(200vw - 1612px), (min-width: 680px) calc(42.86vw - 63px), (min-width: 640px) calc(-975vw + 6653px), calc(75.94vw - 58px)",
);
