const elImageWrapper = document.getElementById('image-wrapper');
const elLoadImageBtn = document.getElementById('load-image');
const elErrorImageBtn = document.getElementById('error-image');

/**
 * Image Load, Error 처리
 * Image Load 실패시 대체이미지로 표현
 * @param {MouseEvent} e 
 */
const loadImage = (e) => {
    const elImage = document.createElement('img');

    elImage.addEventListener('load', (e) => {
        console.log('image load: ' ,e);
    });
    elImage.addEventListener('error', (e) => {
        console.log('image error: ' ,e);
        e.target.src = './error.png';
    });

    if (e.target.value === 'Load Image') {
        elImage.src = './image.jpeg';
    } else if (e.target.value === 'Error Image') {
        elImage.src = 'error';
    }

    elImageWrapper.append(elImage);
};

elLoadImageBtn.addEventListener('click', loadImage);
elErrorImageBtn.addEventListener('click', loadImage);