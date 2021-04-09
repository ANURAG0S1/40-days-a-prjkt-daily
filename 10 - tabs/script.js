var tabs = document.querySelectorAll('.tab')
var contents = document.querySelectorAll('.content')
// console.log(tabs)
for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (e) => {
        var id = e.target.dataset.id
        contents.forEach((con) => {
            if (con.id === id) {
                con.classList.add('active')
            } else {
                con.classList.remove('active')
            }
        })
        tabs.forEach((btn) => {
            if (btn.dataset.id === id) {
                btn.classList.add('active');
                // console.log(btn.dataset.id)
            } else {
                btn.classList.remove('active');
                // console.log(btn.id + 'removed')

            }
        })

    });
}
