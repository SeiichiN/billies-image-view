// view.js

(function () {
	var i, j, imgs, imgcap, figcaption;
	var eles = document.getElementsByClassName('blocks-gallery-item');
	var imageLargeEle = document.getElementById('image-large');
	var targetFigcap = document.getElementById('figcap');
	var targetImg = document.createElement('img'); // img要素を作成

	// クリックすると、クリックした画像とキャプションを読み込み、
	// 作成した img要素の画像・キャプションとする
	var setClick = function (i) {
		eles[i].addEventListener('click', function() {
			imgs = eles[i].getElementsByTagName('img'); // HtmlCollection
			imgcap = eles[i].getElementsByTagName('figcaption'); // HtmlCollection

			targetImg.setAttribute('src', imgs[0].src);
			targetImg.setAttribute('alt', imgcap[0].textContent);
			targetFigcap.textContent = imgcap[0].textContent;
		}, false);
	};

	// 初期設定
	// ギャラリーの最初の画像とキャプションを読み込む
	imgs = eles[0].getElementsByTagName('img');
	imgcap = eles[0].getElementsByTagName('figcaption');
	
	// 作成した img要素を <figure> の最初の子要素とする
	imageLargeEle.insertBefore(targetImg, imageLargeEle.firstChild);
	// ギャラリーの最初の画像とキャプションに設定
	targetImg.setAttribute('src', imgs[0].src);
	targetImg.setAttribute('alt', imgcap[0].textContent);
	targetFigcap.textContent = imgcap[0].textContent;

	for (i = 0; i < eles.length; i++) {
		setClick(i);
	}
})();
