document.addEventListener('DOMContentLoaded', () => {
    const indexId = document.getElementById('index_id');
    const sensoresId = document.getElementById('sensores_id');
    const recoleccionId = document.getElementById('recoleccion_id');
    const laserId = document.getElementById('laser_id');
    const mantenimientoId = document.getElementById('mantenimiento_id');

    indexId.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'front_index.html';
    });

    sensoresId.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'front_sensores.html';
    });

    recoleccionId.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'front_recoleccion.html';
    });

    laserId.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'front_laser.html';
    });

    mantenimientoId.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'front_mantenimiento.html';
    });
});
