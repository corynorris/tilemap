export const getImage = (dataUri) => {
  return new Promise((resolve, reject) => {
    if (/^data:image/.test(dataUri)) {
      const img = new Image();
      img.onload = () => {
        resolve(img);
      };
      img.src = dataUri;
    } else {
      reject('Not a valid image file.');
    }
  });
}

export const loadImage = (file) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = function (event) {
      return getImage(event.target.result).then((image) => {
        resolve({
          name: file.name,
          dataUri: event.target.result,
          width: image.width,
          height: image.height,
        });
      })
    };
    reader.readAsDataURL(file);
  })
}



export const cropImage = (dataUri, x, y, width, height) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  return getImage(dataUri).then((img) => {
    context.drawImage(img,
      x, y, width, height,
      0, 0, width, height);
    return canvas.toDataURL();
  });
}

