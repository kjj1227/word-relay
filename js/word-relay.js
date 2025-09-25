const number = Number(prompt('참가자는 몇 명인가요?'));
const input = document.querySelector('input');
const button = document.querySelector('button');
const wordE1 = document.querySelector('#word');
const orderE1 = document.querySelector('#order');

//사용자가 입력한 새 단어를 저장할 변수
let newWord;
//현재 단어를 저장하는 변수
let word;
const usedWords = []; // 이미 사용된 단어들을 저장하는 배열

const onInput = function (event) {
    newWord = event.target.value.trim;
};

const onClickButton = () => {
    // 입력값이 없을 경우 무시
    if (!newWord) return;
    
    // 1. 이미 사용한 단어인지 검사
    if (usedWords.includes(newWord)) {
        alert('이미 사용된 단어입니다!');
    }
    // 2. 첫 단어이거나, 끝말잇기 조건이 맞는 경우
    else if (!word || word.at(-1) === newWord[0]) {
        word = newWord;                   // 현재 단어 갱신
        wordE1.textContent = word;        // 화면에 단어 표시
        usedWords.push(word);             // 사용된 단어 목록에 추가

        // 순서 계산 및 표시
        const order = Number(orderE1.textContent);
        orderE1.textContent = order + 1 > number ? 1 : order + 1;
    }
    // 3. 끝말잇기 조건이 틀린 경우
    else {
        alert('틀린 단어입니다!');
    }

    // 입력창 초기화 및 포커스
    input.value = '';
    input.focus();
};

// 이벤트 리스너 등록
input.addEventListener('input', onInput);
button.addEventListener('click', onClickButton);

    /*if (!word || word.at(-1) === newWord[0]) {
        word = newWord;
        wordE1.textContent = word;
        const order = Number(orderE1.textContent);
        if (order + 1 > number) {
            orderE1.textContent = 1;
        }
        else {
            //화면에 다음 순서 표시
            orderE1.textContent = order + 1;
        }
    } else {
        //단어가 틀렸을 경우 경고창 표시
        alert('틀린 단어입니다!');
    }
    input.value = '';
    input.focus();
};

input.addEventListener('input', onInput);
button.addEventListener('click', onClickButton);*/