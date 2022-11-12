export const getCurrentUser = () => {
    const currentUser = JSON.parse(localStorage.getItem('user'))
    if (currentUser){
        return currentUser
    }
}
