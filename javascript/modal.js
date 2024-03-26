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
  .getElementById('open__iniciar-cuenta')
  .addEventListener('click', () => modalDos.showModal());

const btnClose2 = document
  .getElementById('button__close-2')
  .addEventListener('click', () => modalDos.close());
