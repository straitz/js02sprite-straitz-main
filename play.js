// холст для рисования - игровое поле
let board = document.getElementById('cnv').getContext('2d');
let boardObject = document.getElementById('cnv');

// фоновая клетка 32×32 - трава
let bg = document.getElementById('grass');

// персонаж, спрайт 32×32 – привидение из пакмана
let char = document.getElementById('ghost');

// координаты персонажа, столбец и строка, считая с нуля
let ghostCol = 0, ghostRow = 0;

// абзац с сообщением 
let msg = document.getElementById('msg');

// препятствие (одно) (а можно было накодить много...)
// координаты как у персонажа
let prepCol = 3, prepRow = 4;

let prep = document.getElementById('bush');

const maxRv = 10;
const landSize = 32;
const maxClmns = 16;




function init() {
	for (let col = 0; col < maxClmns; col++) {
		for (let row = 0; row < maxRv; row++) {
			board.drawImage(bg, col*landSize, row*landSize);
		}
		if (col === ghostCol) board.drawImage(char, ghostRow*landSize, ghostCol*landSize);
		if (col === prepCol) board.drawImage(prep, prepCol*landSize, prepRow*landSize);
	}	
};

function moveOnce(event) {
	let cnvBorder = boardObject.getBoundingClientRect();
	console.log( cnvBorder.right, cnvBorder.top, cnvBorder.bottom, cnvBorder.left);

	// move right
	if (event.clientX > cnvBorder.right && event.clientY > cnvBorder.top && event.clientY < cnvBorder.bottom || event.key === "d" || event.key === "ArrowRight" || event.key === "в") {
		if (ghostCol < maxClmns-1 && (ghostCol+1 !== prepCol || ghostRow !== prepRow)) {
			board.drawImage(bg, ghostCol*landSize, ghostRow*landSize);
			ghostCol++;
		}	
	}
	
    // move up
	if (event.clientY < cnvBorder.top && event.clientX > cnvBorder.left && event.clientX < cnvBorder.right || event.key === "w" || event.key === "ArrowUp" || event.key === "ц") {
		if (ghostRow > 0 && (ghostRow-1 !== prepRow || ghostCol !== prepCol)) {
			board.drawImage(bg, ghostCol*landSize, ghostRow*landSize);
			ghostRow--;
		}	
	}
	
	// move left
	if (event.clientX > cnvBorder.left && event.clientY > cnvBorder.top && event.clientY < cnvBorder.bottom || event.key === "a" || event.key === "ArrowLeft" || event.key === "ф") {
		if (ghostCol > 0 && (ghostCol-1 !== prepCol || ghostRow !== prepRow)) {
			board.drawImage(bg, ghostCol*landSize, ghostRow*landSize);
			ghostCol--;
		}	
	}

	

	// move down
	if (event.clientY > cnvBorder.bottom && event.clientX > cnvBorder.left && event.clientX < cnvBorder.right || event.key === "s" || event.key === "ArrowDown" || event.key === "ы") {
		if (ghostRow < maxRv-1 && (ghostRow+1 !== prepRow || ghostCol !== prepCol)) {
			board.drawImage(bg, ghostCol*landSize, ghostRow*landSize);
			ghostRow++;
		}	
	}
	board.drawImage(char, ghostCol*landSize, ghostRow*landSize);

	if (event.type == "mouseup") {
		msg.value = "Клик в "+ event.clientX + ", "+ event.clientY +"!";
	}
}
	
window.onload = init;
document.onmouseup = moveOnce;
document.onkeyup = moveOnce;
