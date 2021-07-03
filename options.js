let page = document.querySelector('#buttonDiv')
let selectedClass = 'current'
const presetColors = ["#3aa757", "#fff", "#e8453c", "#f9bb2d", "#4688f1"]

function handleButtonClick(event) {
    let current = event.target.parentElement.querySelector(`.${selectedClass}`)

    if (current && current !== event.target) {
        current.classList.remove(selectedClass)
    }

    let color = event.target.dataset.color
    event.target.classList.add(selectedClass)
    chrome.storage.sync.set({color})
}

function setOptions(buttonColors) {
    chrome.storage.sync.get('color', (data) => {
        let currentColor = data.color

        for (let c of buttonColors) {
            let button = document.createElement('button')
            button.dataset.color = c
            button.style.backgroundColor = c

            if (c === currentColor) {
                button.classList.add(selectedClass)
            }

            button.addEventListener('click', handleButtonClick)
            page.appendChild(button)
        }
    })
}

setOptions(presetColors)