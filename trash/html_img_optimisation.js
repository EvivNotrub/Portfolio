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

const image = document.querySelector(".someClass img");
image.setAttribute(
  "sizes",
  "100vw",
);

