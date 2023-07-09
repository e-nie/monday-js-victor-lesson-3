//изменение, которое браузер мжет отследдить - это событие

// Если событие произошло - браузер вызоыет функцию-обработчик(слушатель, подписчик,i.e. handler, listener, subscriber)
//Обработчик должен быть назначен

//событие=> {...}=> handler({...})
// {...}=> event, ev, e

const handler = (e) => {
    e.stopPropagation()
       if (e.currentTarget.id === 'small') {
        alert('yo');
    }
};

const handler2 = (e) => {
    alert('hey');
};


const sm = document.getElementById('small');
const md = document.getElementById('medium');
const bg = document.getElementById('big');

sm.onclick = handler;
sm.onclick = () => {
};
// //sm.onclick = handler() 😱 no-go!!


//снимаем обработчик
sm.onclick = undefined;
sm.onclick = null;

//modern way

sm.addEventListener('click', handler);

md.addEventListener('click', (e)=> {
    e.stopPropagation()
    alert('wow!')})

bg.addEventListener('click', ()=> {alert('boom!')})


//remove

// sm.removeEventListener('click', handler2)


const a = document.getElementById('a')
a.addEventListener('click', (e)=> {
    e.preventDefault()
    alert('123456789')
})
