
const setting1 = document.getElementById('setting1')
let numbercoler = ""

document.addEventListener('DOMContentLoaded', function () {
    const rgbreloadbtn = document.getElementById('rgbreloadbtn')
    const allsavebtn = document.getElementById('allsavebtn')
    const rgbtext = document.getElementById('rgb')

    reset_setting_value()

    //저장값 불러오기
    if (localStorage.getItem("numbercoler") !== null) {
        numbercoler = localStorage.getItem("numbercoler");
        console.log(numbercoler)
        const values = numbercoler.split(', ');
        console.log(values)
        document.getElementById('rgbinput_r').value = values[0];
        document.getElementById('rgbinput_g').value = values[1];
        document.getElementById('rgbinput_b').value = values[2];
    }

    // 모든 값 저장
    allsavebtn.addEventListener('click', () => {
        all_setting_save()
    })

    // 컬러 미리보기 버튼
    rgbreloadbtn.addEventListener('click', function () {
        const r = Number(document.getElementById('rgbinput_r').value);
        const g = Number(document.getElementById('rgbinput_g').value);
        const b = Number(document.getElementById('rgbinput_b').value);

        if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
            rgbtext.style.color = `rgb(${r}, ${g}, ${b})`
            numbercoler = `${r}, ${g}, ${b}`
        }
    })

    // 컬러 리셋 버튼
    document.getElementById('rgbreset').addEventListener('click', function () {
        rgbtext.style.color = 'white'
        document.getElementById('rgbinput_r').value = 255
        document.getElementById('rgbinput_g').value = 255
        document.etElementById('rgbinput_b').value = 255
    })
})

function visibledivs(show) {
    setting1.style.display = show ? 'block' : 'none'; // 또는 'inline' 등
}

// 로컬 데이터 저장
function setdata(name, data) {
    localStorage.setItem(name, data);
}

// 데이터 초기값 세팅
function reset_setting_value() {
    if (localStorage.getItem("numbercoler") === null) {
        localStorage.setItem('numbercoler', '255, 255, 255');
        console.log("numbercoler 기본값 세팅")
    }
}

function all_setting_save(){
    const r = document.getElementById('rgbinput_r').value;
    const g = document.getElementById('rgbinput_g').value;
    const b = document.getElementById('rgbinput_b').value;
    setdata("numbercoler", `${r}, ${g}, ${b}`)
    console.log(`numbercoler 값을 변경하였습니다 r:${r}, g:${g}, b:${b}`)
    alert("저장하였습니다")
}
