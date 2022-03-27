let rndNumber = Math.random() * 101
rndNumber = Math.floor(rndNumber)

while (true) {
    const userAnswer = prompt('حدس خود را وارد کنید')
    if (rndNumber == userAnswer) {
        alert('حدس شما درست بود')
        break
    }
    else if (rndNumber > userAnswer) {
        alert('عدد بزرگتر است')
    }
    else {
        alert('عدد کوچکتر است')
    }
}