document.addEventListener('DOMContentLoaded', function () {
  const backgroundContainer = document.getElementById('background-container');
  const cutout = document.getElementById('cutout');
  let currentBackgroundIndex = 0;

  const backgrounds = [
      'background1',
      'background2',
      'background3',
      'background4',
      'background5',
      'background6',
      // add more backgrounds as needed
  ];

  cutout.addEventListener('click', function () {
      currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;

      // Remove all existing background classes
      backgroundContainer.classList.remove('background1', 'background2', 'background3', 'background4', 'background5', 'background6');

      // Add the current background class
      backgroundContainer.classList.add(backgrounds[currentBackgroundIndex]);
  });
});
