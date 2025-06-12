const projects = [

     {
        photo: "IMG/ezgif.com-speed.gif",
        alt: "A gif of studio ghibli api project website",
        title: "Studio Ghibli API Project",
        description: 'A Studio Ghibli film gallery inspired site using the Ghibli API. Allows users to browse films, and click for more details.',
        link: "https://studioghibliapiproject.netlify.app/"
    },
    {
        photo: "IMG/tempconvertergif.gif",
        alt: "A gif of temperature converter website",
        title: "Temperature Converter",
        description: 'The temperature converter will convert any numeric value interchangeably between Celsius, Fahrenheit, and Kelvin.',
        link: "https://temperatureconverterbyid.netlify.app/"
    },
  
];

document.addEventListener('DOMContentLoaded', () => {
  const revampingProjects = document.querySelectorAll('.bubble[data-status="revamping"]');

  revampingProjects.forEach(project => {
    project.classList.add('revamping');

    // Remove buttons or disable links if present
    const button = project.querySelector('a');
    if (button) button.remove(); // Or button.style.pointerEvents = 'none';
  });
});

/*
   {
        photo: "IMG/elegantgreensgif.gif",
        alt: "This is what its about",
        title: "Elegant Greens",
        description: "Where elegance meets vegan cuisine, Elegant Greens. This chic Vegan Restaurant layout is inspired by the restaurant's interior, food, and stylish vibe.",
        link: "https://elegantgreens.netlify.app/"
    },
     <img src="IMG/ayeshasalongif.gif" alt="a gif of ayesha salon site being browsed">
            <h3>Ayesha Hair Salon</h3>
            <p>A "Bold & Beautiful" beauty salon layout for Ayesha Salon. Incoraporated bold fonts, colors, images, and more to capture the essence of this incredible black owned salon. </p>
            <a href="https://ayeshasalons.netlify.app/"><button class="hvr-grow-shadow">View Site</button></a>
*/
