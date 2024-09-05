// const links = document.querySelectorAll('.sidebar a');
// const sections = document.querySelectorAll('.main-content div');

// links.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         sections.forEach(section => section.classList.remove('active'));
//         document.querySelector(`.${link.id.split('-')[0]}`).classList.add('active');
//     });
// });

const getToken = async function(){
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const token = await fetch('http://localhost:3000/login/', {
        method: "POST",
        body: JSON.stringify({
            "email": "johnson@example.com",
            "password": "password1"
        }),
        headers: headers

    });

    console.log(await token.json());
}

getToken();