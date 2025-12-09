
const store = (lessonId) => {
    localStorage.setItem('lessonNav',lessonId);
    console.log('Leçon stockée:', lessonId);
    window.location.href = "workpage.php";
}
// document.getElementById("toBe").addEventListener('click',()=>{
//     store('toBe');
    
// });
// document.getElementById("simplePresent").addEventListener('click',()=>{
//     store('simplePresent');
// });
// document.getElementById("articles").addEventListener('click',()=>{
//     store('articles');
// });
// document.getElementById("plurals").addEventListener('click',()=>{
//     store('plurals');
// });
// document.getElementById("basicQuestions").addEventListener('click',()=>{
//     store('basicQuestions');
// });
// document.getElementById("existOrnot").addEventListener('click',()=>{
//     store('existOrnot');
// });
// document.getElementById("presentPerfect").addEventListener('click',(e)=>{
//     e.preventDefault();
//     store('presentPerfect');
// });
