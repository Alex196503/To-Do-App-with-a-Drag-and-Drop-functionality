    let images = [{src: 'images/icon-sun.svg', alt: 'Icon with a sun to change the theme to light theme' }, {src: 'images/icon-moon.svg', alt: 'Icon with a moon to change the theme to dark theme'}]
    export default function changeTheme(body, icon)
    {
        body.classList.toggle('light-mode');
    if(body.classList.contains('light-mode') === false)
    {
        icon.src = images[0].src;
        icon.alt = images[0].alt;    
    }
    else{
        icon.src = images[1].src;
        icon.alt = images[1].alt;
    }
    }
