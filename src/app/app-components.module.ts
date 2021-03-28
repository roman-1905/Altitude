
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ContextMenuService } from './components/context-menu/context-menu.service';
import { TextinputComponent } from './components/textinput/textinput.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer-bar/footer-bar.component';
import { LoaderComponent } from './components/loader/loader.component';

export const componentDeclarations = [
    LoaderComponent,
    NavBarComponent,
    FooterComponent,
    ContextMenuComponent,
    TextinputComponent,
    TextareaComponent,
]

export const componentProviders = [
    ContextMenuService
]

