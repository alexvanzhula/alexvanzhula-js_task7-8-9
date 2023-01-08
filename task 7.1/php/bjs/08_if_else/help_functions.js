function getNumberWithLetters(answerNumber= 0){
    if(answerNumber == 0){
        return '0';
    }
    let hundreds2,
        tens2,
        ones2;
    let hundreds1 = Math.floor(answerNumber / 100);
    let tens1 = Math.floor((Math.floor(answerNumber % 100))/10);
    let ones1 = Math.floor(answerNumber % 100);


    if (ones1 >= 0 && ones1 < 20) {
        ones1 = Math.floor(answerNumber % 100)
    } else if (ones1 >= 20 && ones1 <=999 ) {
        ones1 = answerNumber % 10
    };
    if (ones1 > -20 && ones1 < 0) {
        ones1 = Math.floor((answerNumber * -1) % 100)
    } else if (ones1 >= -999 && ones1 < 0) {
        ones1 = (answerNumber* -1) % 10
    };
    answerNumber < 0 ? hundreds1 = Math.floor((answerNumber*-1) / 100): hundreds1 = Math.floor(answerNumber / 100);
    answerNumber < 0 ? tens1 = Math.floor((Math.floor((answerNumber*-1) % 100))/10): tens1 = Math.floor((Math.floor(answerNumber % 100))/10);

    let hundreds = String(hundreds1);
    switch (hundreds) {
        case '1':
            hundreds2 = 'сто ';
            break;
        case '2':
            hundreds2 = 'двести ';
            break;
        case '3':
            hundreds2 = 'триста ';
            break;
        case '4':
            hundreds2 = 'четыреста ';
            break;
        case '5':
            hundreds2 = 'пятьсот ';
            break;
        case '6':
            hundreds2 = 'шестьсот ';
            break;
        case '7':
            hundreds2 = 'семьсот ';
            break;
        case '8':
            hundreds2 = 'восемьсот ';
            break;
        case '9':
            hundreds2 = 'девятьсот ';
            break;
        default:
            hundreds2 = '';
    };

    let tens = String(tens1);
    switch (tens) {
        case '2':
            tens2 = 'двадцать ';
            break;
        case '3':
            tens2 = 'тридцать ';
            break;
        case '4':
            tens2 = 'сорок ';
            break;
        case '5':
            tens2 = 'пятьдесят ';
            break;
        case '6':
            tens2 = 'шестьдесят ';
            break;
        case '7':
            tens2 = 'семьдесят ';
            break;
        case '8':
            tens2 = 'восемьдесят ';
            break;
        case '9':
            tens2 = 'девяносто ';
            break;
        default:
            tens2 = '';
    };

    let ones = String(ones1);
    switch (ones) {
        case '1':
            ones2 = 'один';
            break;
        case '2':
            ones2 = 'два';
            break;
        case '3':
            ones2 = 'три';
            break;
        case '4':
            ones2 = 'четыре';
            break;
        case '5':
            ones2 = 'пять';
            break;
        case '6':
            ones2 = 'шесть';
            break;
        case '7':
            ones2 = 'семь';
            break;
        case '8':
            ones2 = 'восемь';
            break;
        case '9':
            ones2 = 'девять';
            break;
        case '10':
            ones2 = 'десять';
            break;
        case '11':
            ones2 = 'одиннадцать';
            break;
        case '12':
            ones2 = 'двенадцать';
            break;
        case '13':
            ones2 = 'тринадцать';
            break;
        case '14':
            ones2 = 'четырнадцать';
            break;
        case '15':
            ones2 = 'пятнадцать';
            break;
        case '16':
            ones2 = 'шеснадцать';
            break;
        case '17':
            ones2 = 'семнадцать';
            break;
        case '18':
            ones2 = 'восемнадцать';
            break;
        case '19':
            ones2 = 'девятнадцать';
            break;
        default:
            ones2 = '';
    };

    let main = hundreds2 + tens2 + ones2;
    let minus = 'минус ';
    answerNumber < 0 ? main = minus + hundreds2 + tens2 + ones2 : main = hundreds2 + tens2 + ones2;
    let lengthOfString = (String(main.length) < 20) ? String(main): Number(answerNumber);

    return lengthOfString;
}

function badRandomPhrase(){
    const phraseRandom = Math.round( Math.random()*5);
    let answerPhrase;
    if (phraseRandom === 1) {
        answerPhrase = 'Вы загадали неправильное число!\n\u{1F914}'}
    else if (phraseRandom === 2) {
        answerPhrase = 'Это провал\n\u{1F631}'}
    else if (phraseRandom === 3) {
        answerPhrase = 'Горите в Аду!!!\n\u{1F92C}'}
    else if (phraseRandom === 4) {
        answerPhrase = 'Ничего не получается, хнык хнык\n\u{1F922}'}
    else {
        answerPhrase = 'Я сдаюсь..\n\u{1F92F}'};
    return answerPhrase
}

function goodRandomPhrase(){
    const phrase2Random = Math.round( Math.random()*5);     // random voprosi
    let answer2Phrase;
    if (phrase2Random === 1) {
        answer2Phrase = 'Вы загадали число '+lengthOfString+'?'}
    else if (phrase2Random === 2) {
        answer2Phrase = 'Может быть '+lengthOfString+'?'}
    else if (phrase2Random === 3) {
        answer2Phrase = 'А если, вдруг, '+lengthOfString+'?'}
    else if (phrase2Random === 4) {
        answer2Phrase = 'Наверное '+lengthOfString+'?'}
    else {
        answer2Phrase = 'ВсЁ, я знаю - это '+lengthOfString+'!!!'};
    return answer2Phrase
}

function guessedRandomPhrase(){
    const phraseRandom = Math.round( Math.random()*5);
    let answerPhrase;
    if (phraseRandom === 1) {
        answerPhrase = 'О да, ДЕТКА!\n\u{1F914}'}
    else if (phraseRandom === 2) {
        answerPhrase = 'Называй меня: ЦЫГАНКА!!!\n\u{1F575}\u{1F3B2}'}
    else if (phraseRandom === 3) {
        answerPhrase = 'Я, ПОВЕЛИТЕЛЬ!!!\n\u{1F92C}'}
    else if (phraseRandom === 4) {
        answerPhrase = 'Могу еще на ставках выиграть\n\u{1F922}'}
    else {
        answerPhrase = 'Еще вопросы..?\n\u{1F92F}'};
    return answerPhrase
}