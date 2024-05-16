import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { IniciarSesionComponent }  from './components/iniciar-sesion/iniciar-sesion.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';



export const routes: Routes = [
{path: "inicio" , component: InicioComponent, title: "Inicio"},
{path: "" , redirectTo: "inicio", pathMatch: "full", title: "Inicio"},
{path: "productos" , component: ProductosComponent, title: "Productos"},
{path: "servicios" , component: ServiciosComponent, title: "Servicios"},
{path: "nosotros" , component: NosotrosComponent, title: "Nosotros"},
{path: "contacto" , component: ContactoComponent, title: "Contacto"},
{path: "registrarse" , component: RegistrarseComponent, title: "Registrarse"},
{path: "iniciarSesion" , component: IniciarSesionComponent, title: "Iniciar Sesion"},
{path: "privado" , component: PrivadoComponent, title: "Privado"},
{path: "navegacion" , component: NavegacionComponent, title: "Navegación"},
{path: "header" , component: HeaderComponent, title: ""},
{path: "footer" , component: FooterComponent, title: ""},
{path: "**" , component: NoEncontradoComponent, title: "404"},


];
