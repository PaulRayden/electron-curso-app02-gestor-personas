let menuAplicacionPlantilla = [
    {
        label: 'Aplicación',
        submenu: [
            {
                label: 'Acerca de',
                click: () => {
                    abrirVentanaAcercaDe();
                }
            },
            {
              label: "Toggle Dev Tools",
              accelerator: "F12",
              click: () => {
                ventanaPrincipal.webContents.toggleDevTools();
              }
            }
        ]
    }
]
