let count = 1;

const increaseCounter = () =>
{
    let title = document.getElementById('title');
    count++;
    title.innerHTML = ("Counter: " + count);
}

const decreaseCounter = () =>
{
    let title = document.getElementById('title');
    count--;
    title.innerHTML = ("Counter: " + count);
}

const resetButton = () =>
{
    let title = document.getElementById('title');
    count = 1;
    title.innerHTML = ("Counter: " + count);
}