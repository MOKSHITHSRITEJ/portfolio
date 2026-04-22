const phrases = ["Passionate python programmer", "Interested in IoT Projects", "Crafting the Web with Code", "C Language Enthusiast","Machine Learning Interested student"];
        let currentIndex = 0;
        const dynamicTextSpan = document.getElementById("dynamic-text");
        function changeText() {
            dynamicTextSpan.style.opacity = 0;
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % phrases.length;
                dynamicTextSpan.textContent = phrases[currentIndex];
                dynamicTextSpan.style.opacity = 1;
                setTimeout(adjustProfilePicSize, 100); 
            }, 500);
        }
        setInterval(changeText, 3000);
function adjustProfilePicSize() {
    const textContainer = document.getElementById('text-container');
    const profilePic = document.getElementById('my-profile-pic');
    const textHeight = textContainer.getBoundingClientRect().height;
    profilePic.style.height = textHeight + 'px';
    profilePic.style.width = textHeight + 'px';
}
adjustProfilePicSize();
window.addEventListener('load', adjustProfilePicSize);
window.addEventListener('resize', adjustProfilePicSize);