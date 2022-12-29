let titles = [
    { icon: '🌱', title: 'Educator' },
    { icon: '💻', title: 'Programmer' },
    { icon: '🌐', title: 'Developer' },
    { icon: '🔥', title: 'Motivator' },
    { icon: '📔', title: 'Content Creator' }
]
let technologies = [
    'JAVASCRIPT',
    'REACT',
    'MONGODB',
    'NUMPY',
    'REDUX',
    'NODE',
    'PANDAS',
    'PYTHON',
    'HTML',
    'CSS',
]
let titlearr = [
    ['🌱', 'Educator'],
    ['💻', 'Programmer'],
    ['🌐', 'Developer'],
    ['🔥', 'Motivator'],
    ['📔', 'Content Creator']
]
const randtech = document.querySelector('#randtech')

const randfunc = () => {
    let rand = Math.floor(Math.random() * technologies.length)
    let randcolor = '#' + Math.random().toString(16).substr(2, 6)
    randtech.textContent = technologies[rand]
    randtech.style.color = randcolor
    randtech.style.fontSize = '2rem'
    randtech.style.transition = 'all 1s ease-in-out'

}
randtech.style.transition = 'all 1s ease-in-out'

setInterval(randfunc, 2000)



const titlesq = document.querySelector('#titles')
const titleWord = document.querySelector('#title')
const icon = document.querySelector('#icon')


const funcTitle = () => {
    let rand = Math.floor(Math.random() * titles.length)
    icon.textContent = titles[rand].icon
    titleWord.textContent = titles[rand].title
    marquee2.direction = 'right'
    marquee2.textContent = titles[rand].title
}
console.log(titles.icon)
setInterval(funcTitle, 1900)
titlesq.style.fontSize = '2rem'