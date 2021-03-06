import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBienComponent } from './add-bien/add-bien.component';
import { AddTechnicienComponent } from './add-technicien/add-technicien.component';
import { GererBienComponent } from './gerer-bien/gerer-bien.component';
import { GererTechComponent } from './gerer-tech/gerer-tech.component';
import { ListBienComponent } from './list-bien/list-bien.component';
import { ListTechComponent } from './list-tech/list-tech.component';
import { LoginComponent } from './login/login.component';
import { ModifierProfilTechComponent } from './modifier-profil-tech/modifier-profil-tech.component';
import { ProfilTechComponent } from './profil-tech/profil-tech.component';
import { ConsulReclamationComponent } from './consul-reclamation/consul-reclamation.component';
import { ConsultContratComponent } from './consult-contart/consult-contart.component';
import { GererDemandeComponent } from './gerer-demande/gerer-demande.component';

import { ReclamationTechComponent } from './reclamation-tech/reclamation-tech.component';

const routes: Routes = [

  
  {path:'', redirectTo:'login', pathMatch:'full' },
 
  { path:'login',
component:LoginComponent 
  
},
{ path:'reclamationTech',
component:ReclamationTechComponent
  
},
{ path:'addBien',
component:AddBienComponent
  
},
{ path:'consultReclamation',
component:ConsulReclamationComponent
  
},
{ path:'listBien',
component:ListBienComponent
  
},
{ path:'consultContrat',
component:ConsultContratComponent
  
},
{ path:'gererDemande',
component:GererDemandeComponent
  
},
{ path:'gererBien',
component:GererBienComponent
  
},
{ path:'addTech',
component:AddTechnicienComponent
  
},
{ path:'gererTech',
component:GererTechComponent
  
},
{ path:'listTech',
component:ListTechComponent
  
},
/* { path:'profilTech',
component:ProfilTechComponent
  
}, */
{ path:'profilTech',
component:ModifierProfilTechComponent
  
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
