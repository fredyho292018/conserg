import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServeconsergueService {

  private paginas: string[] = [
    'Personal Assistant in Mallorca',
    'Contact',
    'Team',
    'Services',
    'Packs',
    'Privacy Policy',
    'Terms & Conditions',
    'Cookies Policy',
  ];
  private otherservices: string[] = [
    'Maintenance Boat Services',
    'Babysitter Services',
    'Maintenance House Services',
    'Waiters Services',
    'Catering Organization Services at Home and Boats',
    'Restaurant Services',
    'Relax & Spa Pack',
    'Sport Pack',
    'Fun Pack'
  ];
  private telefonoContactos: string[] = [
    'ES +34 681 16 49 98',
    'EN +34 681 16 49 98',
    'DE +34 675 50 33 56',
    'RU +34 659 79 23 83'
  ];
  private contacto: ContactoI =
    {
      nombre: 'Daniela Stranska',
      telfonos: this.telefonoContactos,
      imagen: './../../../assets/images/dsimg/contact.jpg',
      email: 'daniela@dsconciergemallorca.com',
      direccion: 'Carrer Forn d en Vila, 3, 07002 Palma de Mallorca (Islas Baleares), España, 07002 Palma de Mallorca, Islas Baleares'
      , profesion: 'Consiergue'
    };
  private clasifi: ClasificacionI[] = [
    {
      clasificacion: 'Packs',
      titulo: 'Mallorca DS Concierge Packs',
      id: 1
    },
    {
      clasificacion: 'Services',
      titulo: 'Mallorca DS Concierge Free Time Services',
      id: 2
    },
    {
      clasificacion: 'Team',
      titulo: 'Mallorca DS Concierge Comprehensive Security System Services',
      id: 3
    },
    {
      clasificacion: 'Services',
      titulo: 'Mallorca DS Concierge Comprehensive Security System Services',
      id: 4
    }
  ];

  private dslista: ServeI[] = [
    {
      titulo: 'Mallorca DS Concierge Fun Pack',
      descripcion: 'Our exclusive packs are designed to have the best experiences without worries.',
      firma: 'DS Team.',
      imagen: ['./../../../assets/images/dsimg/fun_1920.png'],
      tituloActividades: 'Fun Pack Services',
      // tslint:disable-next-line:max-line-length
      actividades: [
        {
        nombre: 'Actividad 1',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
        nombre: 'Actividad 2',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          nombre: 'Actividad 3',
          descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
          },
    ]
        ,
      // tslint:disable-next-line:max-line-length
      video: [{
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
      },
      {
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
      },
      {
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
      }
    ],
      id: 1,
      clasificacionid: 1,
      clasificacion: this.clasifi[1]
    },
    {
      titulo: 'Mallorca DS Concierge Sport Pac',
      descripcion: 'We are at your disposal during the entire stay.',
      firma: 'DS Team.',
      imagen: ['./../../../assets/images/dsimg/sport_1920.png'],
      tituloActividades: 'Sport Pack Services',
      // tslint:disable-next-line:max-line-length
      actividades: [
        {
        nombre: 'Actividad 1',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
        nombre: 'Actividad 2',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          nombre: 'Actividad 3',
          descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
          },
    ]
        ,
        video: [{
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
        }
      ],
      id: 2,
      clasificacionid: 1,
      clasificacion: this.clasifi[1]
    },
    {
      titulo: 'Mallorca DS Concierge Relax & Spa Pack',
      descripcion: 'Contact us if you want another type of service or to create a custom pack',
      firma: 'DS Team.',
      imagen: ['./../../../assets/images/dsimg/sport_1920.png'],
      tituloActividades: 'Relax & Spa Pack Services',
      // tslint:disable-next-line:max-line-length
      actividades: [
        {
        nombre: 'Actividad 1',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
        nombre: 'Actividad 2',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          nombre: 'Actividad 3',
          descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
          },
    ]
        ,
        video: [{
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
        }
      ],
      id: 3,
      clasificacionid: 1,
      clasificacion: this.clasifi[1]
    },
    {
      titulo: 'Mallorca DS Concierge Restaurant Services',
      // tslint:disable-next-line:max-line-length
      descripcion: 'We recommend and organize visits to the hairdresser and beauty salon of the gym according to the locality, quality and offers.',
      firma: 'DS Team.',
      imagen: ['./../../../assets/images/dsimg/camareros-1.jpg'],
      tituloActividades: 'Restaurant Recommendation and Reservation Services',
      // tslint:disable-next-line:max-line-length
      actividades: [
        {
        nombre: 'Actividad 1',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
        nombre: 'Actividad 2',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          nombre: 'Actividad 3',
          descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
          },
    ]
        ,
        video: [{
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
        }
      ],
      id: 4,
      clasificacionid: 2,
      clasificacion: this.clasifi[2]
    },
    {
      titulo: 'Mallorca DS Concierge Catering Organization Services at Home and Boats',
      descripcion: 'We take care of the private organization.',
      firma: 'DS Team.',
      imagen: ['./../../../assets/images/dsimg/catering-1.jpg'],
      tituloActividades: 'Catering Services',
      actividades: [
        {
        nombre: 'Actividad 1',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
        nombre: 'Actividad 2',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          nombre: 'Actividad 3',
          descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
          },
    ]
        ,
        video: [{
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
        }
      ],
      id: 5,
      clasificacionid: 2,
      clasificacion: this.clasifi[2]
    },
    {
      titulo: 'Mallorca DS Concierge Waiters Services',
      descripcion: 'Or contracting personal trainer to your private home or the boat.',
      firma: 'DS Team.',
      imagen: ['./../../../assets/images/dsimg/camareros-1.jpg'],
      tituloActividades: 'Waiter Services',
      actividades: [
        {
        nombre: 'Actividad 1',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
        nombre: 'Actividad 2',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          nombre: 'Actividad 3',
          descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
          },
    ]
        ,
      // tslint:disable-next-line:max-line-length
      video: [{
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
      },
      {
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
      },
      {
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
      }
    ],
      id: 6,
      clasificacionid: 2,
      clasificacion: this.clasifi[2]
    },
    {
      titulo: 'Mallorca DS Concierge Maintenance House Services',
      descripcion: 'We’ll do the surcharges like simple quality dry cleaning, florist and food purchases.',
      firma: 'DS Team.',
      imagen: ['./../../../assets/images/dsimg/camareros-1.jpg'],
      tituloActividades: 'Maintenance House Services',
      // tslint:disable-next-line:max-line-length
      actividades: [
        {
        nombre: 'Actividad 1',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
        nombre: 'Actividad 2',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          nombre: 'Actividad 3',
          descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
          },
    ]
        ,
      // tslint:disable-next-line:max-line-length
      video: [{
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
      },
      {
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
      },
      {
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
      }
    ],
      id: 7,
      clasificacionid: 3,
      clasificacion: this.clasifi[3]
    },
    {
      titulo: 'Mallorca DS Concierge Maintenance Boat Services',
      // tslint:disable-next-line:max-line-length
      descripcion: 'Included from the boat cleaning or your own house, arrangements and maintenance service, up to watch or take your pet out for a walk.',
      firma: 'DS Team.',
      imagen: ['./../../../assets/images/dsimg/camareros-1.jpg'],
      tituloActividades: 'Maintenance Boat Services',
      actividades: [
        {
        nombre: 'Actividad 1',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
        nombre: 'Actividad 2',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          nombre: 'Actividad 3',
          descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
          },
    ]
        ,
        video: [{
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
        }
      ],
      id: 8,
      clasificacionid: 3,
      clasificacion: this.clasifi[3]
    },
    {
      titulo: 'Mallorca DS Concierge Babysitter Services',
      descripcion: 'We organize services babysitter, visits to doctors or hospitals.',
      firma: 'DS Team.',
      imagen: ['./../../../assets/images/dsimg/camareros-1.jpg'],
      tituloActividades: 'Babysitter Services',
      // tslint:disable-next-line:max-line-length
      actividades: [
        {
        nombre: 'Actividad 1',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
        nombre: 'Actividad 2',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          nombre: 'Actividad 3',
          descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
          },
    ]
        ,
        video: [{
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          video: 'https://www.youtube.com/embed/GUEZCxBcM78',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
        }
      ],
      id: 9,
      clasificacionid: 3,
      clasificacion: this.clasifi[3]
    },
    {
      titulo: 'Mallorca DS Concierge Babysitter Services',
      descripcion: 'We organize services babysitter, visits to doctors or hospitals.',
      firma: 'DS Team.',
      imagen: ['./../../../assets/images/dsimg/guardaespaldas.jpg'],
      tituloActividades: 'Babysitter Services',
      // tslint:disable-next-line:max-line-length
      actividades: [
        {
        nombre: 'Actividad 1',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
        nombre: 'Actividad 2',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          nombre: 'Actividad 3',
          descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
          },
    ],
    video: [{
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
      },
      {
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
      },
      {
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
      }
    ],
      id: 10,
      clasificacionid: 3,
      clasificacion: this.clasifi[3]
    } ,
    {
      titulo: 'Mallorca DS Concierge Babysitter Services',
      descripcion: 'We organize services babysitter, visits to doctors or hospitals.',
      firma: 'DS Team.',
      imagen: ['./../../../assets/images/dsimg/guardaespaldas.jpg'],
      tituloActividades: 'Babysitter Services',
      // tslint:disable-next-line:max-line-length
      actividades: [
        {
        nombre: 'Actividad 1',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
        nombre: 'Actividad 2',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          nombre: 'Actividad 3',
          descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
          },
    ],
    video: [{
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
      },
      {
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
      },
      {
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
      }
    ],
      id: 11,
      clasificacionid: 1,
      clasificacion: this.clasifi[1]
    },
    {
      titulo: 'Mallorca DS Concierge Babysitter Services',
      descripcion: 'We organize services babysitter, visits to doctors or hospitals.',
      firma: 'DS Team.',
      imagen: ['./../../../assets/images/dsimg/guardaespaldas.jpg'],
      tituloActividades: 'Babysitter Services',
      // tslint:disable-next-line:max-line-length
      actividades: [
        {
        nombre: 'Actividad 1',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
        nombre: 'Actividad 2',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          nombre: 'Actividad 3',
          descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
          },
    ],
    video: [{
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
      },
      {
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
      },
      {
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
      }
    ],
      id: 12,
      clasificacionid: 1,
      clasificacion: this.clasifi[1]
    },
    {
      titulo: 'Mallorca DS Concierge Babysitter Services',
      descripcion: 'We organize services babysitter, visits to doctors or hospitals.',
      firma: 'DS Team.',
      imagen: ['./../../../assets/images/dsimg/guardaespaldas.jpg'],
      tituloActividades: 'Babysitter Services',
      // tslint:disable-next-line:max-line-length
      actividades: [
        {
        nombre: 'Actividad 1',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
        },
        {
        nombre: 'Actividad 2',
        descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
        },
        {
          nombre: 'Actividad 3',
          descripcion: 'As catering and boats, catering is offered with exclusive food and drink to your liking',
          imagen: './../../../assets/images/dsimg/fun_1920.png'
          },
    ],
    video: [{
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
      },
      {
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/camareros-1.jpg'
      },
      {
        video: 'https://www.youtube.com/embed/GUEZCxBcM78',
        imagen: './../../../assets/images/dsimg/fun_1920.png'
      }
    ],
      id: 13,
      clasificacionid: 1,
      clasificacion: this.clasifi[1]
    }
  ];


  constructor() {
    console.log('servicio listo para usar!!!');
  }
  getClasificacion() {
    return this.clasifi;
  }
  getDsLista() {
    return this.dslista;
  }
  getServicio(idq: number) {
     return this.dslista.find( x => x.id == idq);
  }
  getEsta(lista: Array<number>, num: number): boolean {
     for (const item of lista) {
       if (item == num) {
          return true;
       }
     }
     return false;
  }
  getDsListaClasificacion(clasificacion: string) {
   const list: ServeI[] = [];
   const lisN: Array<number> = [];
    for (const d of this.clasifi) {
          if (d.clasificacion == clasificacion) {
             lisN.push(d.id);
          }
    }
  console.log(lisN);
    for (const ds of this.dslista) {
      const d = ds.clasificacionid;
      if (this.getEsta(lisN, d)) {
            list.push(ds);
          }
        }
        return list;
    }
    getPaginas() {
      return this.paginas;
    }
    getOtherServices() {
     return this.otherservices;
    }
    getContacto() {
      return this.contacto;
    }
}
export interface ServeI {

  titulo: string;
  descripcion: string;
  firma: string;
  imagen: string[];
  tituloActividades: string;
  actividades: ActividadI[];
  video: VideoI[];
  id: number;
  clasificacionid: number;
  clasificacion: ClasificacionI;
}
export interface ClasificacionI {
  clasificacion: string;
  titulo: string;
  id: number;
}
export interface ContactoI {
    nombre: string;
    telfonos: string[];
    imagen: string;
    email: string;
    direccion: string;
    profesion:string;
}
export interface ActividadI {
  nombre: string;
  descripcion: string;
  imagen: string;
}
export interface VideoI {
  video: string;
  imagen: string;
}



