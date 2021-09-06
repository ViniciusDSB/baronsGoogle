document.addEventListener('keydown', (e) => {
    if(e.keyCode !== 13) return;
    let term = document.getElementById('input').value
    term.replaceAll(' ', '+')
    window.location.href = `https://www.google.com/search?q=${term}`
})


if(localStorage.getItem('backImg')){
    let backEl = document.getElementById('display')
    backEl.style.backgroundImage = `url(${localStorage.getItem('backImg')})`
}

function changeThemePage(switcher){
    if(switcher == 1){
        document.getElementById('styleDiv').style.display = 'block'
    }else{
        document.getElementById('styleDiv').style.display = 'none'
    }
}

var imgLink
var imgTagId = '01'
function saveChosenImg(link, id){
    document.getElementById(imgTagId).style.border = 'none'
    imgTagId = id
    imgLink  = link
    localStorage.setItem('backImg', imgLink)

    document.getElementById(id).style.border = '2px solid #09afff'
}

function customizePage(){
    let element = document.getElementById('display')
    element.style.backgroundImage = `url(${imgLink})`
    document.getElementById('styleDiv').style.display = 'none'
}