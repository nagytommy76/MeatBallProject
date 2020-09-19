export default class navbarHelper{
    static openBtn(){
        const navOpen = document.getElementById('navOpen');
        const navbarNav = document.querySelector('.navbar-nav');

        navOpen.addEventListener('click', () =>{
            navbarNav.classList.toggle("open");
        })
    }
    static logOutBTN(){
        const logOutBtn = document.getElementById('logOutBtn');
        const localST = JSON.parse(localStorage.getItem('accessToken'));
        if (logOutBtn != null) {
            logOutBtn.addEventListener('click', () =>{
                if (localST != null) {
                    localStorage.removeItem('accessToken');
                }
            }); 
        }       
    }
}
