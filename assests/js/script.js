/* 
==============================================================================================================
                                            LOADING PAGE
==============================================================================================================

*/
document.addEventListener('DOMContentLoaded', () => {
    // Attendre le temps nécessaire à l'animation des lettres
    const animationDuration = 1500 + 1100; // 1.5s pour chaque lettre + 1.1s de délai pour la dernière

    // Après la durée totale de l'animation, ajouter 2 secondes de délai, puis rediriger
    setTimeout(() => {
        // Rediriger vers la page de connection (par exemple, "conn.html")
        window.location.href = '/pages/conn.html';
    }, animationDuration + 2000); // Attente de 2 secondes supplémentaires après l'animation
});

/* 
==============================================================================================================
                                            PAGE DE CONNECTION
==============================================================================================================
*/
function validatePhoneNumber() {
    var phoneNumber = document.getElementById("phoneNumber").value;
    if (phoneNumber === "") {
        alert("Veuillez entrer votre numéro de téléphone.");
    } else {
        window.location.href = "/pages/conf.html"; // Redirige vers la page de confirmation
    }
}