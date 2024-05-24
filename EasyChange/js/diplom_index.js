document.addEventListener('DOMContentLoaded', function () {
    const brightnessSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__brightness__slider");
    const brightnessValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__brightness__info__amount");

    const noiseSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__noise__slider");
    const noiseValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__noise__info__amount");

    const saturationSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__saturation__slider"),
    saturationValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__saturation__info__amount");
    
    const contrastSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__contrast__slider"),
    contrastValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__contrast__info__amount");
    const sepiaCheckBox = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__sepia__checkbox");
    // sepiaValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__sepia__info__amount");
    const blurSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__blur__slider"),
    blurValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__blur__info__amount");
    
    const negativeCheckbox = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__inversion__checkbox");
    // negativeValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__inversion__info__amount");
    const grayscaleCheckBox = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__grayscale__checkbox");
    // grayscaleValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__grayscale__info__amount");
    
    const hueSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__hue__slider"),
    hueValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__hue__info__amount");

    const sharpenSlider = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__sharpen__slider"),
    sharpenValue = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option__sharpen__info__amount");

    let isNegative = false;
    let isGrayscale = false;
    let isSepia = false;

    const canvasElement = document.getElementById('canvas');
    const canvasContainer = document.getElementById('canvas-container');
    const cropperContainer = document.getElementById('cropper-container');
    const tempImageElement = document.getElementById('tempImage');
    const cropButton = document.getElementById('cropButton');
    const confirmCropButton = document.getElementById('confirmCropButton');
    const cancelCropButton = document.getElementById('cancelCropButton');
    let cropper;
    let fabricCanvas = new fabric.Canvas(canvasElement);
    let fabricImage;
    let textObjects = [];

    const deleteTextButton = document.getElementById('deleteTextButton');
    const textColorPicker = document.getElementById('textColorPicker');
    const fontSizeSlider = document.getElementById('fontSizeSlider');
    const fontSizeValue = document.getElementById('fontSizeValue');
    const fontFamilySelector = document.getElementById('fontFamilySelector');
    const boldButton = document.getElementById('boldButton');
    const italicButton = document.getElementById('italicButton');
    const underlineButton = document.getElementById('underlineButton');
    // let selectedText;
    let selectedTexts = [];

    let initialImageState = {};

    const filtersBtn = document.querySelector(".wrapper__sidebar-left__filter-variations__button-filters");
const filtersContent = document.querySelector(".wrapper__sidebar-left__filter-content__filters-option");

const cutBtn = document.querySelector(".wrapper__sidebar-left__filter-variations__button-cut");
const cutContent = document.querySelector(".wrapper__sidebar-left__filter-content__cut-option");

const rotateBtn = document.querySelector(".wrapper__sidebar-left__filter-variations__button-rotate");
const rotateContent = document.querySelector(".wrapper__sidebar-left__filter-content__rotate-option");

const textBtn = document.querySelector(".wrapper__sidebar-left__filter-variations__button-text");
const textContent = document.querySelector(".wrapper__sidebar-left__filter-content__text-option");



// const rotateOptions = document.querySelectorAll(".wrapper__sidebar-left__filter-content__rotate-option button");
// const saveBtn = document.querySelector(".header__buttons__button-save");
// const resetFilters = document.querySelector(".header__buttons__button-reset");
// const filterOptions = document.querySelectorAll(".wrapper__sidebar-left__filter-content input");

    // Функция загрузки изображения
    const inputImage = document.querySelector(".input-image");
    const chooseImgBtn = document.querySelector(".header__buttons__button-choose");
    chooseImgBtn.addEventListener("click", () => inputImage.click());
    document.getElementById('uploadImage').addEventListener('change', function (e) {
        canvasElement.style.display = 'block';
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function (event) {
            if (cropper) {
                cropper.destroy();
                cropperContainer.style.display = 'none';
            }
            fabricCanvas.clear();
            fabric.Image.fromURL(event.target.result, function (img) {
                // Устанавливаем размеры canvas в зависимости от размера изображения
                const containerWidth = canvasContainer.clientWidth;
                const containerHeight = canvasContainer.clientHeight;
                let scale = 1;
                if (img.width > containerWidth || img.height > containerHeight) {
                    scale = Math.min(containerWidth / img.width, containerHeight / img.height);
                }
                img.scale(scale);

                canvasElement.width = img.width * scale;
                canvasElement.height = img.height * scale;
                fabricCanvas.setWidth(img.width * scale);
                fabricCanvas.setHeight(img.height * scale);

                fabricImage = img;
                fabricCanvas.setBackgroundImage(fabricImage, fabricCanvas.renderAll.bind(fabricCanvas));

                // Сохранение начального состояния изображения
                initialImageState = {
                    scaleX: img.scaleX,
                    scaleY: img.scaleY,
                    left: img.left,
                    top: img.top,
                    angle: img.angle,
                    flipX: img.flipX,
                    flipY: img.flipY
                };

                brightnessSlider.addEventListener("input", updateFilters);
                noiseSlider.addEventListener("input", updateFilters);
                saturationSlider.addEventListener("input", updateFilters);
                contrastSlider.addEventListener("input", updateFilters);
                sepiaCheckBox.addEventListener('change', function () {
                    isSepia = sepiaCheckBox.checked;
                    updateFilters();
                });
                blurSlider.addEventListener("input", updateFilters);
                negativeCheckbox.addEventListener('change', function () {
                    isNegative = negativeCheckbox.checked;
                    updateFilters();
                });
                grayscaleCheckBox.addEventListener('change', function () {
                    isGrayscale = grayscaleCheckBox.checked;
                    updateFilters();
                });
                hueSlider.addEventListener("input", updateFilters);
                sharpenSlider.addEventListener("input", updateFilters);
            });
        };
        reader.readAsDataURL(file);
                // Предполагаем, что здесь будут другие функции настройки
                document.querySelector(".header").classList.remove("disable");
                document.querySelector(".wrapper").classList.remove("disable");
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

    // Функция обновления фильтров
    const updateFilters = () => {
        const brightness = brightnessSlider.value / 100;
        brightnessValue.innerText = `${brightnessSlider.value}%`;

        const contrast = contrastSlider.value / 100;
        contrastValue.innerText = `${contrastSlider.value}%`;

        const saturation = saturationSlider.value / 100;
        saturationValue.innerText = `${saturationSlider.value}%`;

        const blur = blurSlider.value / 100;
        blurValue.innerText = `${blurSlider.value}%`;


        const noise = noiseSlider.value;
        noiseValue.innerText = `${noise}%`;

        hueValue.innerText = `${hueSlider.value}°`;
        const hue = hueSlider.value * Math.PI / 180;

        const sharpen = sharpenSlider.value / 100;
        sharpenValue.innerText = `${sharpenSlider.value}%`;


        if (fabricImage) {
            const filters = [
                new fabric.Image.filters.Brightness({ brightness: brightness - 1 }),
                new fabric.Image.filters.Noise({ noise: noise }),
                new fabric.Image.filters.Convolute({
                    matrix: [
                        0, -sharpen, 0,
                        -sharpen, 1 + sharpen * 4, -sharpen,
                        0, -sharpen, 0
                    ]
                }),
                new fabric.Image.filters.Saturation({ saturation: saturation - 1 }),
                new fabric.Image.filters.Contrast({ contrast: contrast - 1 }),
                new fabric.Image.filters.Blur({ blur: blur }),
                new fabric.Image.filters.HueRotation({ rotation: hue })
            ];
    
            // Добавляем фильтр Negative если чекбокс активен
            if (isNegative) {
                filters.push(new fabric.Image.filters.Invert());
            }
    
            // Добавляем фильтр Grayscale если чекбокс активен
            if (isGrayscale) {
                filters.push(new fabric.Image.filters.Grayscale());
            }

            // Добавляем фильтр Grayscale если чекбокс активен
            if (isSepia) {
                filters.push(new fabric.Image.filters.Sepia());
            }
    
            fabricImage.filters = filters;
            fabricImage.applyFilters();
            fabricCanvas.renderAll();
        }
    };

    const updateSliderValues = () => {
        brightnessValue.innerText = `${brightnessSlider.value}%`;
        noiseValue.innerText = `${noiseSlider.value}%`;
        sharpenValue.innerText = `${sharpenSlider.value}%`;
        saturationValue.innerText = `${saturationSlider.value}%`;
        contrastValue.innerText = `${contrastSlider.value}%`;
        blurValue.innerText = `${blurSlider.value}`;
        hueValue.innerText = `${hueSlider.value}°`;
    };

    document.getElementById('resetFiltersButton').addEventListener('click', () => {
        brightnessSlider.value = 100;
        noiseSlider.value = 0;
        sharpenSlider.value = 0;
        saturationSlider.value = 100;
        contrastSlider.value = 100;
        blurSlider.value = 0;
        hueSlider.value = 0;

        // Сброс значений чекбоксов
        sepiaCheckBox.checked = false;
        negativeCheckbox.checked = false;
        grayscaleCheckBox.checked = false;

        // Сброс значений переменных
        isSepia = false;
        isNegative = false;
        isGrayscale = false;

        updateFilters();
        updateSliderValues();
    });

    // Функция добавления текста
    document.getElementById('addTextButton').addEventListener('click', function () {
        if (fabricCanvas) {
            const text = new fabric.Textbox('Hello World', {
                left: 50,
                top: 50,
                width: 200,
                fontSize: 20,
                fill: '#ffffff',
                borderColor: 'black',
                fontFamily: fontFamilySelector.value,
                fontWeight: 'normal',
                fontStyle: 'normal',
                underline: false
            });
            fabricCanvas.add(text);
            textObjects.push(text);
        }
    });

                    
    // Функция для выбора текста
    fabricCanvas.on('mouse:down', function (e) {
        if (e.target && e.target.type === 'textbox') {
            if (e.e.shiftKey) {
                // Если нажата клавиша Shift, добавляем объект в список выделенных
                selectedTexts.push(e.target);
            } else {
                // Иначе очищаем список и добавляем только текущий объект
                selectedTexts = [e.target];
            }
        } else {
            selectedTexts = [];
        }
    });

    // Удаление выбранного текста
    deleteTextButton.addEventListener('click', function () {
        selectedTexts.forEach(text => fabricCanvas.remove(text));
        selectedTexts = [];
        fabricCanvas.renderAll();
    });

    // Удаление текста по нажатию клавиш delete и backspace
    document.addEventListener('keydown', function (e) {
        if ((e.key === 'Delete' || e.key === 'Backspace') && selectedTexts.length > 0) {
            selectedTexts.forEach(text => fabricCanvas.remove(text));
            selectedTexts = [];
            fabricCanvas.renderAll();
        }
    });

    // Изменение цвета текста
    textColorPicker.addEventListener('input', function () {
        selectedTexts.forEach(text => {
            text.set({ fill: textColorPicker.value });
        });
        fabricCanvas.renderAll();
    });

    // Изменение размера текста
    fontSizeSlider.addEventListener('input', function () {
        fontSizeValue.innerText = fontSizeSlider.value;
        selectedTexts.forEach(text => {
            text.set({ fontSize: parseInt(fontSizeSlider.value, 10) });
        });
        fabricCanvas.renderAll();
    });

    // Изменение шрифта текста
    fontFamilySelector.addEventListener('change', function () {
        selectedTexts.forEach(text => {
            text.set({ fontFamily: fontFamilySelector.value });
        });
        fabricCanvas.renderAll();
    });

    // Изменение стиля текста на жирный
    boldButton.addEventListener('click', function () {
        selectedTexts.forEach(text => {
            const isBold = text.fontWeight === 'bold';
            text.set({ fontWeight: isBold ? 'normal' : 'bold' });
        });
        fabricCanvas.renderAll();
    });

    // Изменение стиля текста на курсивный
    italicButton.addEventListener('click', function () {
        selectedTexts.forEach(text => {
            const isItalic = text.fontStyle === 'italic';
            text.set({ fontStyle: isItalic ? 'normal' : 'italic' });
        });
        fabricCanvas.renderAll();
    });

    // Изменение стиля текста на подчёркнутый
    underlineButton.addEventListener('click', function () {
        selectedTexts.forEach(text => {
            const isUnderline = text.underline === true;
            text.set({ underline: !isUnderline });
        });
        fabricCanvas.renderAll();
    });


    // Функция подготовки к обрезке изображения
    cropButton.addEventListener('click', function () {
        if (fabricImage) {
            if (cropper) {
                cropper.destroy();
            }

            // Убираем текстовые объекты временно для обрезки
            textObjects.forEach(obj => fabricCanvas.remove(obj));
            fabricCanvas.renderAll();

            const dataUrl = fabricCanvas.toDataURL({ format: 'png' });
            tempImageElement.src = dataUrl;
            tempImageElement.onload = function () {
                // Устанавливаем размеры контейнера обрезки в соответствии с размерами изображения
                cropperContainer.style.width = `${fabricCanvas.getWidth()}px`;
                cropperContainer.style.height = `${fabricCanvas.getHeight()}px`;
                cropperContainer.style.display = 'flex';
                canvasContainer.style.display = 'none';
                cropper = new Cropper(tempImageElement, {
                    viewMode: 1,
                    autoCropArea: 1,
                });
            };
            confirmCropButton.style.display = 'inline-block';
            cancelCropButton.style.display = 'inline-block';
            cropButton.style.display = 'none';
        }
    });

    // Функция завершения обрезки и обновления холста Fabric.js
    confirmCropButton.addEventListener('click', function () {
        if (cropper) {
            const croppedCanvas = cropper.getCroppedCanvas();
            const croppedDataUrl = croppedCanvas.toDataURL();
            fabric.Image.fromURL(croppedDataUrl, function (img) {
                fabricCanvas.clear();
                fabricCanvas.setWidth(img.width);
                fabricCanvas.setHeight(img.height);
                fabricCanvas.setBackgroundImage(img, fabricCanvas.renderAll.bind(fabricCanvas));
                fabricImage = img;
                cropper.destroy();
                cropperContainer.style.display = 'none';
                canvasContainer.style.display = 'flex';
                confirmCropButton.style.display = 'none';
                cancelCropButton.style.display = 'none';
                cropButton.style.display = 'inline-block';

                // Обновление начального состояния изображения после обрезки
                initialImageState = {
                    scaleX: img.scaleX,
                    scaleY: img.scaleY,
                    left: img.left,
                    top: img.top,
                    angle: img.angle,
                    flipX: img.flipX,
                    flipY: img.flipY
                };

                // Восстановление текстовых объектов
                textObjects.forEach(text => {
                    fabricCanvas.add(text);
                });
                fabricCanvas.renderAll();
            });
        }
    });


    // Функция отмены обрезки и возврата к исходному состоянию
    cancelCropButton.addEventListener('click', function () {
        if (cropper) {
            cropper.destroy();
            cropperContainer.style.display = 'none';
            canvasContainer.style.display = 'flex';
            confirmCropButton.style.display = 'none';
            cancelCropButton.style.display = 'none';
            cropButton.style.display = 'inline-block';

            // Восстановление текстовых объектов
            textObjects.forEach(text => {
                fabricCanvas.add(text);
            });
            fabricCanvas.renderAll();
        }
    });

    // Функция переворота изображения на 90 градусов
    document.getElementById('rotateButton').addEventListener('click', function () {
        if (fabricImage) {
            const currentAngle = fabricImage.angle;
            const newAngle = (currentAngle + 90) % 360;
            fabricImage.rotate(newAngle);
            adjustImageSizeAndPosition();
        }
    });

    // Функция горизонтального переворота изображения
    document.getElementById('flipHButton').addEventListener('click', function () {
        if (fabricImage) {
            fabricImage.toggle('flipX');
            adjustImageSizeAndPosition();
        }
    });

    // Функция вертикального переворота изображения
    document.getElementById('flipVButton').addEventListener('click', function () {
        if (fabricImage) {
            fabricImage.toggle('flipY');
            adjustImageSizeAndPosition();
        }
    });

    // Функция обработки прокрутки колесика мыши для увеличения или уменьшения масштаба
    canvasContainer.addEventListener('wheel', function (event) {
        if (fabricImage) {
            const pointer = fabricCanvas.getPointer(event);
            const zoomFactor = event.deltaY < 0 ? 1.1 : 0.9;

            fabricImage.scale(fabricImage.scaleX * zoomFactor);
            fabricImage.set({
                left: pointer.x - (pointer.x - fabricImage.left) * zoomFactor,
                top: pointer.y - (pointer.y - fabricImage.top) * zoomFactor
            });
            fabricCanvas.renderAll();

            event.preventDefault();
        }
    });

    // Обработчик для кнопки Reset Zoom
    document.getElementById('resetZoomButton').addEventListener('click', function () {
        if (fabricImage) {
            const currentAngle = fabricImage.angle;
            const currentFlipX = fabricImage.flipX;
            const currentFlipY = fabricImage.flipY;
            fabricImage.set({
                scaleX: initialImageState.scaleX,
                scaleY: initialImageState.scaleY,
                left: initialImageState.left,
                top: initialImageState.top,
                flipX: currentFlipX,  // сохраняем текущее состояние flipX
                flipY: currentFlipY   // сохраняем текущее состояние flipY
            });
            fabricImage.angle = currentAngle;  // сохраняем текущий угол поворота
            adjustImageSizeAndPosition();
        }
    });


    // Функция для корректировки размеров и позиции изображения
    function adjustImageSizeAndPosition() {
        const boundingRect = fabricImage.getBoundingRect(true, true);
        let newWidth = boundingRect.width;
        let newHeight = boundingRect.height;
        const containerWidth = canvasContainer.clientWidth;
        const containerHeight = canvasContainer.clientHeight;
        let scale = 1;
        if (newWidth > containerWidth || newHeight > containerHeight) {
            scale = Math.min(containerWidth / newWidth, containerHeight / newHeight);
        }
        newWidth *= scale;
        newHeight *= scale;

        fabricCanvas.setWidth(newWidth);
        fabricCanvas.setHeight(newHeight);
        fabricImage.scaleToWidth(newWidth);
        fabricImage.scaleToHeight(newHeight);

        fabricCanvas.centerObject(fabricImage);
        fabricCanvas.renderAll();
    };

    saveImageButton.addEventListener('click', function () {
        const dataURL = fabricCanvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'image.jpg';
        link.click();
    });
});