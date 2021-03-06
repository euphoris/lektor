'use strict'

export const isDevMode = () => {
  return process.env.LEKTOR_DEV === '1'
}

export const attachDevMenu = (menu) => {
  menu.push({
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.reload();
      }
    }
  })
  menu.push({
    label: 'Toggle Developer Tools',
    accelerator: process.platform == 'darwin'
      ? 'Alt+Command+I' : 'Ctrl+Shift+I',
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.toggleDevTools();
      }
    }
  })
}
