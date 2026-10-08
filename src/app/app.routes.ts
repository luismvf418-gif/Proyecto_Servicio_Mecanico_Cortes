import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full',
  },
  {
    path: 'bienvenida',
    loadComponent: () => import('./bienvenida/bienvenida.page').then(m => m.BienvenidaPage)
  },
  {
    path: 'iniciar-sesion',
    loadComponent: () => import('./iniciar-sesion/iniciar-sesion.page').then(m => m.IniciarSesionPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then(m => m.RegistroPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: 'services',
    loadComponent: () => import('./services/services.page').then(m => m.ServicesPage)
  },
  {
    path: 'servicio-detalles',
    loadComponent: () => import('./servicio-detalle/servicio-detalle.page').then(m => m.ServicioDetallePage)
  },
  {
    path: 'carrito',
    loadComponent: () => import('./carrito/carrito.page').then(m => m.CarritoPage)
  },
  {
    path: 'metodo-pago',
    loadComponent: () => import('./metodo-pago/metodo-pago.page').then(m => m.MetodoPagoPage)
  },
  {
    path: 'citas',
    loadComponent: () => import('./citas/citas.page').then(m => m.CitasPage)
  },
  {
    path: 'citas-lista',
    loadComponent: () => import('./citas-lista/citas-lista.page').then(m => m.CitaListaPage)
  },
  {
    path: 'cita-detalle',
    loadComponent: () => import('./cita-detalle/cita-detalle.page').then(m => m.CitaDetallePage)
  },
  {
    path: 'cita-resumen',
    loadComponent: () => import('./cita-resumen/cita-resumen.page').then(m => m.CitaResumenPage)
  },
  {
    path: 'vehiculos',
    loadComponent: () => import('./vehiculos/vehiculos.page').then(m => m.VehiculosPage)
  },
  {
    path: 'agregar-vehiculo',
    loadComponent: () => import('./agregar-vehiculo/agregar-vehiculo.page').then(m => m.AgregarVehiculoPage)
  },
  {
    path: 'seleccionar-vehiculo',
    loadComponent: () => import('./seleccionar-vehiculo/seleccionar-vehiculo.page').then(m => m.SeleccionarVehiculoPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then(m => m.PerfilPage)
  }
];