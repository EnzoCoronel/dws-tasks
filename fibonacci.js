fibonacci();

function fibonacci(){
    let user = 9; //change
    let num;
    let last = 1, b4last = 0;
    let odd = [0], even = [0];

    count = 3;
    do{
        num = last + b4last;
        b4last = last;
        last = num;
        count++;
        if (num % 2 == 0){
            even.push(num);
        }
        else{
            odd.push(num);
        }
    }while(count <= user)

    even.shift(); odd.shift();
    
    if (user < 2){
        odd.pop();
    }
    else if (user > 2){
        odd.unshift(1);
    }

    if (even.length == 0)
    even = "nenhum";
    if (odd.length == 0)
    odd = "nenhum";

    console.log("Par:", even);
    console.log("Ímpar:", odd);
}