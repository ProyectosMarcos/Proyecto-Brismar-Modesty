const modal = document.getElementById('dialog');

const btnOpen = document
  .getElementById('open__crear-cuenta')
  .addEventListener('click', () => modal.showModal());

const btnClose = document
  .getElementById('button__close')
  .addEventListener('click', () => modal.close());

/***************/

const modalDos = document.getElementById('dialog_dos');

const btnOpenDos = document
  .getElementById('open__iniciar-cuenta-2')
  .addEventListener('click', () => modalDos.showModal());

const btnCloseDos = document
  .getElementById('button__close-2')
  .addEventListener('click', () => modalDos.close());

/***************/

const modalTres = document.getElementById('dialog-tres');

const btnOpenTres = document
  .getElementById('open__crear-cuenta-3')
  .addEventListener('click', () => modalTres.showModal());

const btnCloseTres = document
  .getElementById('button__close-3')
  .addEventListener('click', () => modalTres.close());

/****************/
const modalCuatro = document.getElementById('dialog_cuatro');

const btnOpenCuatro = document
  .getElementById('open__iniciar-cuenta-4')
  .addEventListener('click', () => modalCuatro.showModal());

const btnCloseCuatro = document
  .getElementById('button__close-4')
  .addEventListener('click', () => modalCuatro.close());
