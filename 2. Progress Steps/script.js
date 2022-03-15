const circles = document.querySelectorAll('.circle')
const progress = document.querySelector('.progress')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

let currentCounter = 1;

nextBtn.addEventListener('click', () => {
    currentCounter++
    if (currentCounter > circles.length ) {
        currentCounter = circles.length
    }

    update()
})


prevBtn.addEventListener('click', () => {
    currentCounter--
    if (currentCounter < 1 ) {
        currentCounter = 1
    }

    update()
})

function update() {
    console.log(currentCounter)

//buttons disabled
    if (currentCounter <= 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (currentCounter >= 4) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }

//circle active
    circles.forEach((circle, id) => {
        if(id < currentCounter ) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

//progress fill
    const actives = document.querySelectorAll('.active')    
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
}