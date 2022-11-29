// TODO: Listen for page loading (window)
window.onload = () => {
    console.log('window', 'loaded');
}

// TODO: Listen for page loading (document)
document.addEventListener('DOMContentLoaded', (e) => {
    console.log('document', 'loaded');
// TODO: Access the h1 in HTML page
    const h1 = document.getElementById('app_title');
    console.log('h1', h1)

    const title = document.getElementById('app_title')
    const paragraph = document.getElementById('app_paragraph');
    const main = document.querySelector('body');

    document.getElementById('btn-title').addEventListener('click', () => {
        title.classList.add('title');
    })
    document.getElementById('btn-paragraph').addEventListener('click', () => {
        paragraph.classList.add('paragraph');
    })
    document.getElementById('btn-main').addEventListener('click', () => {
        main.classList.add('main');
    })

// TODO: Change color of app_title
    

// TODO: Change color of app_paragraph

// TODO: Change color of main page

// TODO: Add a new element to the container
    
    const btn = document.createElement('button')
    const btn2 = document.createElement('button')
    const div = document.querySelector('div');

    let i = 0;

    btn.innerText = "Added BTN"
    btn2.innerText = "Remove BTN"
    div.appendChild(btn)
    div.appendChild(btn2)

    btn.addEventListener('click', () => {
        const h2 = document.createElement('h2');
        h2.innerText = `${i++}`
        div.appendChild(h2)
    })


// TODO: Remove the h1 from the page
    btn2.addEventListener('click', () => {
        h1.remove()
        div.remove();
    })

// TODO: Listen for three mouse events
})

