const setting1 = document.getElementById('setting1')

document.addEventListener('DOMContentLoaded', function () {
    const list1 = document.getElementById('list1')
    const rgbreloadbtn = document.getElementById('rgbreloadbtn')
    list1.addEventListener('click', function(){
        visibledivs(false)
        setting1.visible = true
    })

    const rgbtext = document.getElementById('rgb')
    const rgbinput_r = document.getElementById('rgbinput_r').value
    const rgbinput_g = document.getElementById('rgbinput_g').value
    const rgbinput_b = document.getElementById('rgbinput_b').value
    rgbreloadbtn.addEventListener('click',function(){
        if(rgbinput_r !== '' && rgbinput_g !== '' && rgbinput_b !== '') {
            rgbtext.style.color=`rgb(${rgbinput_r}, ${rgbinput_g}, ${rgbinput_b})`
        }
    })

    document.getElementById('rgbreset').addEventListener('click',function(){
        rgbtext.style.color='white'
    })
})

function visibledivs(a){
    setting1.visible = a
}