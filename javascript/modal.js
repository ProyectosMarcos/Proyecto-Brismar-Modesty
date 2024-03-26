const modal = document.getElementById('dialog');

const btnOpencrearCuenta = document
  .getElementById('open__crear-cuenta')
  .addEventListener('click', () => modal.showModal());

const btnClose = document
  .getElementById('button__close')
  .addEventListener('click', () => modal.close());

/***************/

const modalDos = document.getElementById('dialog_dos');

const btnOpenIniciarCuenta = document
  .getElementById('open__iniciar-cuenta-2')
  .addEventListener('click', () => modalDos.showModal());

const btnClose2 = document
  .getElementById('button__close-2')
  .addEventListener('click', () => modalDos.close());

/***************/

const modalTres = document.getElementById('dialog-tres');

const btnOpenIniciarCuenta_tres = document
  .getElementById('open__crear-cuenta-3')
  .addEventListener('click', () => modalTres.showModal());

const btnClose3 = document
  .getElementById('button__close-3')
  .addEventListener('click', () => modalTres.close());

/***************/
const modalCuatro = document.getElementById('dialog_cuatro');

const btnOpenIniciarCuenta_cuatro = document
  .getElementById('open__iniciar-cuenta-4')
  .addEventListener('click', () => modalCuatro.showModal());

const btnClose4 = document
  .getElementById('button__close-4')
  .addEventListener('click', () => modalCuatro.close());
