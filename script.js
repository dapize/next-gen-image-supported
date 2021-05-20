(function (root) {
  'use strict';

  // Main Object
  const imagesSupported = {};

  // Format Images checker
  const checker = function (cb) {
    const images = {
      webp: 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA',
      jp2: 'data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k=',
      jpx: 'data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAgAAAMC8BAABAAAAWgAAAMG8BAABAAAARgAAAAAAAAAkw91vA07+S7GFPXd2jckQV01QSE9UTwAZAMFxAAAAATAAoAAKAACgAAAQgCAIAAAEb/8AAQAAAQDCPwCAAAAAAAAAAAAAAAAAjkI/AIAAAAAAAAABIAA='
    };

    const arrImages = Object.keys(images);
    const nImages = arrImages.length;
    let formatChecked = 0;

    const checkToCb = function () {
      formatChecked += 1;
      if (formatChecked >= nImages) cb(imagesSupported)
    };

    arrImages.forEach(function (base64) {
      let image = new Image();
      image.src = images[base64];
      image.onerror = function () {
        imagesSupported[base64] = false;
        checkToCb();
      };
      image.onload = function () {
        imagesSupported[base64] = image.height === 2,
        checkToCb();
      };
    });
  };

  // Returner
  const nextGenImagesSupported = function (cb) {
    if (!cb) throw new Error({
      name: 'Callback Faltante',
      message: 'Se requiere una función callback para obtener el objeto con los formatos de imágenes de proxima generación compatibles.'
    })
    return Object.keys(imagesSupported).length ? cb(imagesSupported) : checker(cb);
  };

  // Exporting
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = nextGenImagesSupported;
    }
    exports.nextGenImagesSupported = nextGenImagesSupported;
  } else {
    root.nextGenImagesSupported = nextGenImagesSupported;
  }
}(this));
