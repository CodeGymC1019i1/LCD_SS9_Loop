function game() {
    let n1 = parseInt(prompt("Mời chọn khoảng đón số từ số: "));
    let n2 = parseInt(prompt("đến số: "));
    let x = n1 + Math.floor(Math.random()*(n2-n1));
    for( i = 1; i <4;i++){
        let y = parseInt(prompt("Mời đoán lần "+i))
        if (y === x) {
            alert("Bạn đã đoán đúng, chúc mừng bạn");
            break;
        }
        else if (y< x)
            alert("Bạn đã đoán sai,  " +y +" nhỏ hơn đáp án");
        else
            alert("Bạn đã đoán sai,  " +y +" lớn hơn đáp án");

    }


}