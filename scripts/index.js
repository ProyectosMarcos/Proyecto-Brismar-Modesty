import responsiveMedia from './components/maps_responsive.js';

window.addEventListener('DOMContentLoaded', (e) => {
  responsiveMedia(
    'gmaps',
    '(min-width: 1024px)',
    `<a href="https://maps.app.goo.gl/mXUE4wMvWmavbRS27" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18413.595725867563!2d-58.50060666404017!3d-34.569020468633425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb65ef23cc8ab%3A0x5c73440ae1e8c91a!2sPlaza%20Echeverr%C3%ADa!5e0!3m2!1ses-419!2sar!4v1717610456135!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
});
