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


export const routes: Routes = [
{path: "inicio" , component: InicioComponent },
{path: "productos" , component: ProductosComponent },
{path: "servicios" , component: ServiciosComponent },
{path: "nosotros" , component: NosotrosComponent },
{path: "contacto" , component: ContactoComponent },
{path: "registrarse" , component: RegistrarseComponent },
{path: "iniciarSesion" , component: IniciarSesionComponent },
{path: "privado" , component: PrivadoComponent },
{path: "navegacion" , component: NavegacionComponent },
{path: "header" , component: HeaderComponent },
{path: "footer" , component: FooterComponent }

];
