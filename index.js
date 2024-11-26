
// const submit = document.getElementById('submit')

// submit.addEventListener('click', () => {
//     addColor(1000, 'first', 'red')
//         .then(() => addColor(3000, 'second', 'blue'))
//         .then(() => addColor(2000, 'third', 'green'))
//         .catch((err) => console.log(err))
// })

// function addColor(time, selector, color) {
//     const element = document.getElementById(selector)
//     return new Promise((resolve, reject) => {
//         if (element) setTimeout(() => {
//                 element.style.color = color
//                 resolve()
//             }, time)
//         else
//             reject(`There is no such element: ${selector}`)
//     })
// }



// const submit = document.getElementById('submit')
// const h2 = document.getElementById('first')
// const h3 = document.getElementById('second')

// submit.addEventListener('click', () => {
//     if (submit) {
//         setTimeout(() => {
//             h2.style.color = 'red'
//         }, 2000)

//         setTimeout(() => {
//             h3.style.color = 'green'
//         }, 1000)
//     }
// })

const submit = document.getElementById('submit')

submit.addEventListener('click', () => {
    addColor('first', 'red', 2000)
        .then(() => addColor('second', 'blue', 1000))
        .then(() => addColor('third', 'green', 3000))
        .catch((err) => console.log(err))
})

function addColor(selector, color, time) {
    const element = document.getElementById(selector)
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color
                resolve()
            }, time)
        } else {
            reject(`There is no such element: ${selector}`)
        }
    })
}




