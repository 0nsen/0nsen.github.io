window.onload = time();

function time() {
    const now = new Date();

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const hourArr = [hour, minute, second];
    const hourString = hourArr.reduce((prev, curr) => {
        return prev + ' : ' + curr.toString().padStart(2, 0);
    });

    const option = {
        weekday: 'long',
        year: 'numeric',
        day: 'numeric',
        month: 'long',
    }
    const dateString = now.toLocaleDateString('en-US', option);

    document.querySelector('#hours').innerHTML = hourString;
    document.querySelector('#date').innerHTML = dateString;

    setTimeout(time, 1000);
}