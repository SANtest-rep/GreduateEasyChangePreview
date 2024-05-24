const inputImage = document.querySelector(".input-image");
const chooseImgBtn = document.querySelector(".header__buttons__button-choose");

const filtersBtn = document.querySelector(".wrapper__sidebar-left__filter-variations__button-filters");
const filtersContent = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option");

const cutBtn = document.querySelector(".wrapper__sidebar-left__filter-variations__button-cut");
const cutContent = document.querySelector(".wrapper__sidebar-left__filter-content__cut-option");

const rotateBtn = document.querySelector(".wrapper__sidebar-left__filter-variations__button-rotate");
const rotateContent = document.querySelector(".wrapper__sidebar-left__filter-content__rotate-option");

const textBtn = document.querySelector(".wrapper__sidebar-left__filter-variations__button-text");
const textContent = document.querySelector(".wrapper__sidebar-left__filter-content__text-option");

const brightnessSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__brightness__slider"),
brightnessValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__brightness__info__amount");
const saturationSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__saturation__slider"),
saturationValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__saturation__info__amount");

const contrastSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__contrast__slider"),
contrastValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__contrast__info__amount");
const sepiaSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__sepia__slider"),
sepiaValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__sepia__info__amount");
const blurSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__blur__slider"),
blurValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__blur__info__amount");

const inversionSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__inversion__slider"),
inversionValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__inversion__info__amount");
const grayscaleSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__grayscale__slider"),
grayscaleValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__grayscale__info__amount");

const hueSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__hue__slider"),
hueValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__hue__info__amount");

const grainSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__grain__slider"),
grainValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__grain__info__amount");

const rotateOptions = document.querySelectorAll(".wrapper__sidebar-left__filter-content__rotate-option button");
const saveBtn = document.querySelector(".header__buttons__button-save");
const resetFilters = document.querySelector(".header__buttons__button-reset");
const filterOptions = document.querySelectorAll(".wrapper__sidebar-left__filter-content input");

const brightnessObj = { value: 100 };
const saturationObj = { value: 100 };

const contrastObj = { value: 100 };
const sepiaObj = { value: 0 };
const blurObj = { value: 0 };

const inversionObj = { value: 0 };
const grayscaleObj = { value: 0 };

const hueObj = { value : 0 };

const grainObj = { value : 0 }

let rotate = 0, flipHorizontal = 1, flipVertical = 1;



const presets = {
    normal: {
        brightness: 100,
        saturation: 100,
        contrast: 100,
        sepia: 0,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    _1977: {        
        brightness: 100,
        saturation: 140,
        contrast: 100,
        sepia : 50,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue : 330,
    },
    aden : {
        brightness: 115,
        saturation: 140,
        contrast: 100,
        sepia: 20,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    amaro : {
        brightness: 120,
        saturation: 130,
        contrast: 110,
        sepia: 35,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    ashby : {
        brightness: 100,
        saturation: 180,
        contrast: 120,
        sepia: 50,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    brannan : {
        brightness: 110,
        saturation: 90,
        contrast: 125,
        sepia: 40,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 357
    },
    charmes : {
        brightness: 125,
        saturation: 135,
        contrast: 125,
        sepia: 25,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 355
    },
    clarendon : {
        brightness: 125,
        saturation: 100,
        contrast: 125,
        sepia: 15,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 5
    },
    crema : {
        brightness: 115,
        saturation: 90,
        contrast: 125,
        sepia: 50,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 358
    },
    dogpatch : {
        brightness: 100,
        saturation: 110,
        contrast: 150,
        sepia: 35,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    earlybird : {
        brightness: 115,
        saturation: 125,
        contrast: 90,
        sepia: 25,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 355
    },
    gingham : {
        brightness: 110,
        saturation: 100,
        contrast: 110,
        sepia: 0,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    ginza : {
        brightness: 120,
        saturation: 135,
        contrast: 115,
        sepia: 25,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 355
    },
    hefe : {
        brightness: 120,
        saturation: 140,
        contrast: 150,
        sepia: 40,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 350
    },
    helena : {
        brightness: 105,
        saturation: 135,
        contrast: 105,
        sepia: 50,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    hudson : {
        brightness: 120,
        saturation: 105,
        contrast: 120,
        sepia: 25,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 345
    },
    inkwell : {
        brightness: 125,
        saturation: 180,
        contrast: 85,
        sepia: 0,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    juno : {
        brightness: 115,
        saturation: 180,
        contrast: 115,
        sepia: 35,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    kelvin : {
        brightness: 110,
        saturation: 100,
        contrast: 150,
        sepia: 15,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 350
    },
    lark : {
        brightness: 130,
        saturation: 125,
        contrast: 120,
        sepia: 25,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    lofi : {
        brightness: 100,
        saturation: 110,
        contrast: 150,
        sepia: 0,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    ludwig : {
        brightness: 105,
        saturation: 200,
        contrast: 105,
        sepia: 25,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    maven : {
        brightness: 105,
        saturation: 175,
        contrast: 105,
        sepia: 35,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    mayfair : {
        brightness: 115,
        saturation: 110,
        contrast: 110,
        sepia: 0,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    moon : {
        brightness: 140,
        saturation: 0,
        contrast: 95,
        sepia: 35,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    nashville : {
        brightness: 90,
        saturation: 100,
        contrast: 150,
        sepia: 25,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 345
    },
    perpetua : {
        brightness: 125,
        saturation: 110,
        contrast: 110,
        sepia: 0,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    poprocket : {
        brightness: 120,
        saturation: 100,
        contrast: 100,
        sepia: 15,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    reyes : {
        brightness: 125,
        saturation: 140,
        contrast: 75,
        sepia: 75,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    rise : {
        brightness: 120,
        saturation: 90,
        contrast: 125,
        sepia: 25,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    sierra : {
        brightness: 90,
        saturation: 100,
        contrast: 150,
        sepia: 25,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 345
    },
    skyline : {
        brightness: 125,
        saturation: 120,
        contrast: 125,
        sepia: 15,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    slumber : {
        brightness: 100,
        saturation: 125,
        contrast: 125,
        sepia: 35,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    stinson : {
        brightness: 110,
        saturation: 125,
        contrast: 125,
        sepia: 35,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    sutro : {
        brightness: 90,
        saturation: 140,
        contrast: 120,
        sepia: 40,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 350
    },
    toaster : {
        brightness: 95,
        saturation: 100,
        contrast: 150,
        sepia: 25,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 345
    },
    valencia : {
        brightness: 110,
        saturation: 100,
        contrast: 110,
        sepia: 25,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    vesper : {
        brightness: 120,
        saturation: 130,
        contrast: 115,
        sepia: 35,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    walden : {
        brightness: 125,
        saturation: 140,
        contrast: 80,
        sepia: 35,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    // затестить
    willow : {
        brightness: 120,
        saturation: 5,
        contrast: 85,
        sepia: 20,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 0
    },
    xpro : {
        brightness: 175,
        saturation: 130,
        contrast: 125,
        sepia: 45,
        blur: 0,
        inversion: 0,
        grayscale: 0,
        hue: 355
    }
    
};

let originalImage = null;
let tempForSharpness = null;
let sharpnessApplied = false;
let beforeSharpness = null;
let gaussianNoiseApplied = false;

let userLoadedImage = false;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let fabricCanvas;

const loadImage = () => {
    let image = inputImage.files[0];
    
    if(!image) return;
    
    const previewImg = new Image();
    previewImg.src = URL.createObjectURL(image);
    ctx.drawImage(previewImg, -previewImg.width / 2, -previewImg.height / 2);
    originalImage = previewImg.cloneNode();
    tempForSharpness = previewImg.cloneNode();
    userLoadedImage = true;
    previewImg.onload = () => {
        // Изменение размера холста в соответствии с размерами изображения
        if (userLoadedImage) {
            resetFilters.click();
            
        }
        canvas.width = previewImg.naturalWidth;
        canvas.height = previewImg.naturalHeight;

        ctx.drawImage(previewImg, 0, 0);

        // Инициализация холста Fabric
        fabricCanvas = new fabric.Canvas(canvas);
        fabricCanvas.setBackgroundImage(previewImg.src, fabricCanvas.renderAll.bind(fabricCanvas), {
            scaleX: fabricCanvas.width / previewImg.width,
            scaleY: fabricCanvas.height / previewImg.height
        });

        // Предполагаем, что здесь будут другие функции настройки
        document.querySelector(".header").classList.remove("disable");
        document.querySelector(".wrapper").classList.remove("disable");
    };
    userLoadedImage = false;
    
};


var cropper = null;
// При нажатии на кнопку "Activate Cropper"
document.getElementById('activateCropper').addEventListener('click', function () {
    if (!cropper) {
        cropper = new Cropper(canvas, {
            aspectRatio: 16 / 9,
            viewMode: 3,
            background: false,
            dragMode: 'move',
            autoCropArea: 1,
        });
    }

    // Показываем кнопку "Crop Canvas"
    document.getElementById('cropButton').style.display = 'inline-block';
});

// При нажатии на кнопку "Deactivate Cropper"
document.getElementById('deactivateCropper').addEventListener('click', function () {
    if (cropper) {
        cropper.destroy();
        cropper = null;
        // Скрываем кнопку "Crop Canvas"
        document.getElementById('cropButton').style.display = 'none';
    }
});

// При нажатии на кнопку "Crop Canvas"
document.getElementById('cropButton').addEventListener('click', function () {
    if (cropper) {
        // Получаем обрезанный канвас
        var croppedCanvas = cropper.getCroppedCanvas();
        // Очищаем текущий канвас
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Обновляем размеры канваса
        canvas.width = croppedCanvas.width;
        canvas.height = croppedCanvas.height;
        // Рисуем обрезанный канвас
        ctx.drawImage(croppedCanvas, 0, 0);
    }
});

const buttons = [filtersBtn, rotateBtn, cutBtn, textBtn];
const contents = [filtersContent, rotateContent, cutContent, textContent];

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        contents.forEach((content, contentIndex) => {
            if (index === contentIndex) {
                content.removeAttribute("hidden");
            } else {
                content.setAttribute("hidden", true);
            }
        });
    });
});


const updateFilter = (slider, obj, valueElement) => {
    valueElement.innerText = `${slider.value}%`;
    if(valueElement === blurValue){
        valueElement.innerText = `${slider.value}`;
    }
    else if(valueElement === hueValue){
        valueElement.innerText = `${slider.value}град.`;
    }
    obj.value = slider.value;
    applyFilter();
}

const applyFilter = () => {
    canvas.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    canvas.style.filter = `brightness(${brightnessObj.value}%) saturate(${saturationObj.value}%) contrast(${contrastObj.value}%) sepia(${sepiaObj.value}%) blur(${blurObj.value}px) invert(${inversionObj.value}%) grayscale(${grayscaleObj.value}%) hue-rotate(${hueObj.value}deg)`;
    
}

rotateOptions.forEach(option => {
    option.addEventListener("click", () => {
        if(option.id === "left-rotate") {
            rotate -= 90;
        } else if(option.id === "right-rotate") {
            rotate += 90;
        } else if(option.id === "mirror-horizontal") {
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;
        } else if(option.id === "mirror-vertical"){
            flipVertical = flipVertical === 1 ? -1 : 1;
        }
        
        applyFilter();
    });
});


const applyPreset = (preset) => {
    brightnessObj.value = preset.brightness;
    brightnessValue.innerText = `${preset.brightness}%`;
    brightnessSlider.value = preset.brightness;

    saturationObj.value = preset.saturation;
    saturationValue.innerText = `${preset.saturation}%`;
    saturationSlider.value = preset.saturation;

    contrastObj.value = preset.contrast;
    contrastValue.innerText = `${preset.contrast}%`;
    contrastSlider.value = preset.contrast;

    sepiaObj.value = preset.sepia;
    sepiaValue.innerText = `${preset.sepia}%`;
    sepiaSlider.value = preset.sepia;

    blurObj.value = preset.blur;
    blurValue.innerText = `${preset.blur}`;
    blurSlider.value = preset.blur;

    inversionObj.value = preset.inversion;
    inversionValue.innerText = `${preset.inversion}%`;
    inversionSlider.value = preset.inversion;


    grayscaleObj.value = preset.grayscale;
    grayscaleValue.innerText = `${preset.grayscale}%`;
    grayscaleSlider.value = preset.grayscale;

    hueObj.value = preset.hue;
    hueValue.innerText = `${preset.hue}град.`;
    hueSlider.value = preset.hue;
    
    applyFilter();

};

// const normalBtn = document.querySelector(".normal-btn");
// normalBtn.addEventListener("click", () => applyPreset(presets.normal));

const presetButtons = document.querySelectorAll('.presets');

presetButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Удаляем класс 'button' у всех кнопок пресетов
        presetButtons.forEach(btn => {
            btn.classList.remove('button');
        });
        // Добавляем класс 'button' только к нажатой кнопке
        button.classList.add('button');
    });
});



function addGaussianNoise(imageData, intensity) {
    const data = imageData.data;
    const length = data.length;
    const std = intensity * 255; // Стандартное отклонение для гауссовского шума

    for (let i = 0; i < length; i += 4) {
        const random = Math.random() * std - std / 2; // Генерация случайного шума с нулевым средним
        data[i] = Math.min(255, Math.max(0, data[i] + random)); // Красный канал
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + random)); // Зеленый канал
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + random)); // Синий канал
    }

    return imageData;
}




// Функция добавления шума на изображение с заданной интенсивностью
const addGaussianNoiseToImage = (intensity) => {
    
    // if(sharpnessApplied){
    //     previewImg.src = tempForSharpness.src;
    // }
    // else {
    //     previewImg.src = originalImage.src;
    // }
    previewImg.src = originalImage.src;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Добавляем новый шум
    const noisyImageData = addGaussianNoise(imageData, intensity); // Используем заданную интенсивность

    ctx.putImageData(noisyImageData, 0, 0);
    previewImg.src = canvas.toDataURL();

    gaussianNoiseApplied = true;
    
}










let canv;
let isEditing = false;

// const createTextCanvas = () => {
//     if (!canvas) return;

//     // Сохраняем текущее изображение холста
//     const dataURL = canvas.toDataURL();

//     // Инициализируем новый холст fabric
//     canv = new fabric.Canvas(canvas);

//     // Загружаем изображение в качестве фона холста
//     fabric.Image.fromURL(dataURL, function(img) {
//         canv.setBackgroundImage(img, canv.renderAll.bind(canv), {
//             scaleX: canv.width / img.width,
//             scaleY: canv.height / img.height
//         });
//     });

//     // Добавляем обработчики событий на canv
//     canv.on('object:scaling', function(e) {
//         const obj = e.target;
//         if (obj.type === 'textbox') {
//             const scaleX = obj.scaleX;
//             const scaleY = obj.scaleY;
//             obj.set({
//                 width: obj.width * scaleX,
//                 scaleX: 1,
//                 scaleY: 1
//             });
//         }
//         canv.renderAll();
//     });
// };



// Функция для добавления текста
const addText = () => {
    if (!fabricCanvas) return;

    const text = new fabric.Textbox('Ваш текст здесь', {
        left: 50,
        top: 50,
        fontSize: 20,
        fontFamily: 'Arial',
        fill: '#ffffff',
        borderColor: 'black',
        borderDashArray: [5, 5],
        cornerColor: 'blue',
        cornerSize: 8,
        transparentCorners: false,
        editable: true
    });

    fabricCanvas.add(text);
    fabricCanvas.setActiveObject(text);

    text.on('editing:entered', function() {
        isEditing = true;
    });

    text.on('editing:exited', function() {
        isEditing = false;
    });

    text.on('modified', function() {
        text.setCoords();
        fabricCanvas.renderAll();
    });
};

// Функция для удаления выбранных объектов
function removeSelectedObjects() {
    const activeObjects = fabricCanvas.getActiveObjects();
    activeObjects.forEach(function(obj) {
        fabricCanvas.remove(obj);
    });
    fabricCanvas.discardActiveObject();
    fabricCanvas.renderAll();
}

// Обработчики событий
document.getElementById('addTextBtn').addEventListener('click', addText);
document.getElementById('removeTextBtn').addEventListener('click', removeSelectedObjects);
document.getElementById('fontFamilySelect').addEventListener('change', function(e) {
    const activeObjects = fabricCanvas.getActiveObjects();
    activeObjects.forEach(function(obj) {
        if (obj.type === 'textbox') {
            obj.set('fontFamily', e.target.value);
        }
    });
    fabricCanvas.renderAll();
});

document.getElementById('fontSizeRange').addEventListener('input', function(e) {
    const activeObjects = fabricCanvas.getActiveObjects();
    activeObjects.forEach(function(obj) {
        if (obj.type === 'textbox') {
            obj.set('fontSize', parseInt(e.target.value, 10));
        }
    });
    fabricCanvas.renderAll();
});

document.getElementById('fontColorPicker').addEventListener('input', function(e) {
    const activeObjects = fabricCanvas.getActiveObjects();
    activeObjects.forEach(function(obj) {
        if (obj.type === 'textbox') {
            obj.set('fill', e.target.value);
        }
    });
    fabricCanvas.renderAll();
});

document.addEventListener('keydown', function(e) {
    if (!isEditing && (e.key === 'Delete' || e.key === 'Backspace')) {
        removeSelectedObjects();
    }
});

// Функция для обновления контролов
function updateControls(textObject) {
    if (textObject && textObject.type === 'textbox') {
        document.getElementById('fontFamilySelect').value = textObject.fontFamily;
        document.getElementById('fontSizeRange').value = textObject.fontSize;
        document.getElementById('fontColorPicker').value = textObject.fill;
    }
}











const saveImage = () => {
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");

    // Рассчитываем новые размеры временного канваса с учетом поворота
    const angle = Math.abs(rotate) % 180;
    const radians = angle * Math.PI / 180;
    const sin = Math.abs(Math.sin(radians));
    const cos = Math.abs(Math.cos(radians));
    const newWidth = canvas.width * cos + canvas.height * sin;
    const newHeight = canvas.width * sin + canvas.height * cos;

    tempCanvas.width = newWidth;
    tempCanvas.height = newHeight;

    // Применяем фильтры
    tempCtx.filter = `brightness(${brightnessObj.value}%) saturate(${saturationObj.value}%) contrast(${contrastObj.value}%) sepia(${sepiaObj.value}%) blur(${blurObj.value}px) invert(${inversionObj.value}%) grayscale(${grayscaleObj.value}%) hue-rotate(${hueObj.value}deg)`;
    

    // Трансформация контекста
    tempCtx.translate(newWidth / 2, newHeight / 2);
    if (rotate !== 0) {
        tempCtx.rotate(rotate * Math.PI / 180);
    }
    tempCtx.scale(flipHorizontal, flipVertical);

    // Рисуем изображение с учетом всех трансформаций и фильтров
    tempCtx.drawImage(canvas, -canvas.width / 2, -canvas.height / 2);

    // Сохраняем изображение
    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = tempCanvas.toDataURL("image/jpeg");
    link.click();
};

const resetFilter = () => {
    rotate = 0; flipHorizontal = 1; flipVertical = 1;

    brightnessObj.value = 100;
    saturationObj.value = 100;

    contrastObj.value = 100;
    sepiaObj.value = 0;
    blurObj.value = 0;

    inversionObj.value = 0;
    grayscaleObj.value = 0;

    brightnessValue.innerText = '100%';
    brightnessSlider.value = 100;
    saturationValue.innerText = '100%';
    saturationSlider.value = 100;
    
    contrastValue.innerText = '100%';
    contrastSlider.value = 100;
    sepiaValue.innerText = '0%';
    sepiaSlider.value = 0;
    blurValue.innerText = '0';
    blurSlider.value = 0;


    inversionValue.innerText = '0%';
    inversionSlider.value = 0;
    grayscaleValue.innerText = '0%';
    grayscaleSlider.value = 0;

    hueObj.value = 0;
    hueValue.innerText = '0град.';
    hueSlider.value = 0;

    applyFilter();

    grainObj.value = 0;
    grainValue.innerText = '0%';
    grainSlider.value = 0;
    tempForSharpness.src = originalImage.src;
    // previewImg.src = originalImage.src;

    if(sharpnessApplied){
        beforeSharpness.src = originalImage.src;
    }
    presetButtons.forEach(btn => {
        btn.classList.remove('button');
    });
    const normalPresetButton = document.querySelector('.normal-btn');
    normalPresetButton.classList.add('button');
}

const sliders = [brightnessSlider, saturationSlider, contrastSlider, sepiaSlider, blurSlider, inversionSlider, grayscaleSlider, hueSlider, grainSlider];
const values = [brightnessObj, saturationObj, contrastObj, sepiaObj, blurObj, inversionObj, grayscaleObj, hueObj, grainObj];
const valueElements = [brightnessValue, saturationValue, contrastValue, sepiaValue, blurValue, inversionValue, grayscaleValue, hueValue, grainValue];

sliders.forEach((slider, index) => {
    slider.addEventListener("input", () => updateFilter(slider, values[index], valueElements[index]));
});

inputImage.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => inputImage.click());
saveBtn.addEventListener("click", saveImage);
resetFilters.addEventListener("click", resetFilter);





