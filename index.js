//-------------------- task 1 ----------------------------------
document.getElementById('Task1').addEventListener("submit", task1);

function task1 () {
    event.preventDefault();
    let form = document.getElementById('Task1');

    let mon1 = Number(form.m1.value);
    let mon2 = Number(form.m2.value);
    let mon3 = Number(form.m3.value);

    let summ = mon1 + mon2 + mon3;

    form.average.value = (mon1 + mon2 + mon3) / 3;

    let tax = summ * 0.13;
    form.tax.value = tax;

    form.total.value = summ - tax;
}


//-------------------- task 2 --------------------
document.getElementById('Task2').addEventListener("submit", task2);

function task2() {
    event.preventDefault();
    let form = document.getElementById('Task2');
    let x1 = form.x1.value;
    let y1 = form.y1.value;

    let x2 = form.x2.value;
    let y2 = form.y2.value;

    let x3 = form.x3.value;
    let y3 = form.y3.value;

    form.s.value = 0.5 * Math.abs((x2-x1)*(y3-y1) - (x3-x1)*(y2-y1));
}


//-------------------- task 3 --------------------
document.getElementById('Task3').addEventListener("submit", task3);

function task3() {
    event.preventDefault();
    let form = document.getElementById('Task3');
    let x1 = form.x1.value;
    let y1 = form.y1.value;

    form.length.value = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
}

//-------------------- task 4 --------------------
document.getElementById('Task4').addEventListener("submit", task4);

function task4() {
    event.preventDefault();
    let form = document.getElementById('Task4');
    let v = form.val1.value;
    form.val1.value = form.val2.value;
    form.val2.value = v;
}

//-------------------- task 5 --------------------
document.getElementById('Task5').addEventListener("submit", task5);

function task5() {
    event.preventDefault();
    let form = document.getElementById('Task5');
    let r = form.radius.value;
    form.V.value = 4/3 * Math.PI * Math.pow(r,3);
    form.S.value = 4 * Math.PI * Math.pow(r,2);
}

//-------------------- task 6 --------------------
document.getElementById('Task6').addEventListener("submit", task6);

function task6() {
    event.preventDefault();
    let form = document.getElementById('Task6');
    let r = form.radius.value;
    form.L.value = 2 * Math.PI * r;
    form.S.value =Math.PI * Math.pow(r,2);
}

//-------------------- task 7 --------------------
document.getElementById('Task7').addEventListener("submit", task7);

function task7() {
    event.preventDefault();
    let form = document.getElementById('Task7');
    let x1 = form.x1.value;
    let y1 = form.y1.value;
    let x2 = form.x2.value;
    let y2 = form.y2.value;
    let r = form.radius.value;

    let l1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    form.length.value = Math.sqrt(Math.pow(l1,2) - Math.pow(r,2));
}

//-------------------- task 7 --------------------
document.getElementById('Task8').addEventListener("submit", task8);

function task8() {
    event.preventDefault();
    let form = document.getElementById('Task8');
    let x1 = form.x1.value;
    let y1 = form.y1.value;
    let x2 = form.x2.value;
    let y2 = form.y2.value;
    form.length.value = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}