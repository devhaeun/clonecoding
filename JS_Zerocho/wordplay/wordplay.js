const number = Number(prompt("몇 명이 참가하나요?"));
if (number){
    const $button = document.querySelector('button');
    const $input = document.querySelector('input');
    const $word = document.querySelector('#word');
    const $order = document.querySelector('#order');
    let word; // 제시어
    let newWord; // 현재 단어
    // 버튼 클릭 이벤트 리스너 함수
    const onClickButton = () => {
        if (newWord.length===3 && (!word || word[word.length-1] === newWord[0])) {
            word = newWord;
            $word.textContent = word; // 화면에 제시어 표시
            const order = Number($order.textContent); // 순서 전환 위함
            if (order+1 > number) {
                $order.textContent = 1;
            } else {
                $order.textContent = order+1;
            }
        } else{
            alert("올바르지 않은 단어입니다.");
            }
        $input.value = '';
        $input.focus();
    };
    $button.addEventListener('click', onClickButton);

    // input 태그 글자 입력 리스너 함수
    const onInput = (e) => {
        newWord = e.target.value; // 입력하는 단어를 현재 단어로
    };
    $input.addEventListener('input', onInput);
}