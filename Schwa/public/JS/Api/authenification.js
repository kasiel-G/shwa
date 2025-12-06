import fetchApi from "./fetchApi.js";
const connForm = document.getElementById("connForm");
const inscriForm = document.getElementById("inscriForm");
const btnConn = document.getElementById("btnConn"); 
const btnInscri = document.getElementById("btnLogin");   

connForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let formdata = new FormData(connForm);
    fnRegister(formdata)
});

const fnRegister = async (data) => {
    const response = await fetchApi('/api.php?api=registerAPI', 'POST', data);
    console.log(response);
    if (response.status === '200') {
        // window.location.href = '/';
        console.log(response);
    } else {
        alert(response.message);
    }
    
}
// btnConn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     let formdata = new FormData(connForm);
//     fnLogin(formdata)
// });
btnInscri.addEventListener("click", async (e) => {
    e.preventDefault();
    let formdata = new FormData(inscriForm);
    fnRegister(formdata)
});