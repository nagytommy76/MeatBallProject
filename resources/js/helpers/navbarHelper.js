import authHelper from './authHelper'
export default class navbarHelper{
    static openBtn(){
        const navOpen = document.getElementById('navOpen');
        const navbarNav = document.querySelector('.navbar-nav');
        if (navOpen != null) {
            navOpen.addEventListener('click', () =>{
                navbarNav.classList.toggle("open");
            })
        }        
    }
    static logOutBTN(store){
        const logOutBtn = document.getElementById('logOutBtn');
        const localST = JSON.parse(localStorage.getItem('accessToken'));
        if (logOutBtn != null) {
            logOutBtn.addEventListener('click', () =>{
                authHelper.logOut()
                .then(response => {
                    store.dispatch('setToken', null)
                    this.$store.dispatch('setUserName', '')
                    store.dispatch('setLoggedIn', false)
                    if (localST != null) {
                        localStorage.removeItem('accessToken');
                    }
                })                
            }); 
        }       
    }
}
