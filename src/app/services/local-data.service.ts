import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  constructor() { }

  private valorBanner: boolean[] = [];
  private valorCard: boolean[] = [];
  private valorDiccionario:string = "";

  private textData:any = {
    "historia": [
      {
        "tipo": "titulo",
        "texto": "HK6LRM 50 años"
      },
      {
        "tipo": "subtitulo",
        "texto": "Celebrando 50 años de la Liga de Radioaficionados de Manizales"
      },
      {
        "tipo": "parrafo",
        "texto": "En Colombia, el 18 de agosto de 1933 se fundó la Liga Colombiana de Radioaficionados por los señores Italo Amore, Gustavo Uribe Th. y Roberto Jaramillo Ferro, entre otros."
      },
      {
        "tipo": "parrafo",
        "texto": "En la década de los años 60 y 70, se inició con la creación de las seccionales de la LCRA en las principales ciudades capitales del país, mediante el sistema de Emisarios: representantes del ente nacional que se desplazaban a las ciudades con el propósito de reunir y asesorar a los radioaficionados en la creación de las seccionales, bajo el amparo de los estatutos nacionales."
      },
      {
        "tipo": "parrafo",
        "texto": "En el contexto histórico, se conoce, que desde 1969 un grupo de Radioaficionados en Envigado Antioquia, ante la ya existencia del Radio Club de Antioquia en la Ciudad de Medellín, se propusieron la fundación de La Liga Colombiana de Radioaficionados seccional Medellín, se habla igualmente de que dicha asamblea constitutiva se realizó el 17 de diciembre de 1969 en salón prestado por la Alcaldía de Medellín, obteniendo su Personería Jurídica el 01 de septiembre de 1972, mediante la Resolución 1601 emanada de la Gobernación de Antioquia, suscrita por el entonces gobernador Diego Calle Restrepo y Juan Vicente Gómez Sierra como Director encargado del área jurídica."
      },
      {
        "tipo": "parrafo",
        "texto": "En dicha resolución se inscribe como representante legal al colega Julio Ponce de León HK6BSV."
      },
      {
        "tipo": "parrafo",
        "texto": "Al parecer, otros miembros que conformaron la primera Junta fueron:"
      },
      {
        "tipo":"lista1",
        "texto":"Vicepresidente: HK4BFD Alberto Moreno; Secretario: HK4BXV Conrado Guendica;Tesorero: HK4BXL Sergio Uribe A.;Revisor Fiscal: HK4BVV Jaime Simpson;Vocal: HK4BFE Bernardo Rabinovitch;Representante Directiva Nacional (Emisario): HK4AZR Héctor Gómez G."
      },
      {
        "tipo": "parrafo",
        "texto": "Una interminable lista de destacados radioaficionados sin distingo de posición social, profesión o procedencia han pasado por nuestras filas en calidad de socios animados por el espíritu experimental y de comunicación a través de las bandas y frecuencias asignadas a la radioafición. Con el trascurrir de los años, y de las tantas leyes, decretos y resoluciones expedidos desde 1958, con la expedición del decreto 2552 del mismo año el cual lleva las firmas del Doctor Alberto Lleras Camargo, como Presidente de la República, y del Doctor Hernán Echavarría Olózaga, como Ministro de Comunicaciones, la radioafición ha encarado una serie de obstáculos, entre ellos el surgimiento de las nuevas tecnologías en 1990 con la Internet y la Telefonía Celular, entre otros, que dio lugar a la definición de quienes desertaron de la actividad como “radio necesitados”."
      },
      {
        "tipo": "parrafo",
        "texto": "En el año 2000 las seccionales de la Liga Colombiana de Radioaficionados iniciaron un proceso de independencia y autonomía del Ente nacional. Nuestra Seccional no fue ajena a este proceso el cual se aprobó en asamblea general de socios en el año 2003, cambiando su razón social por LIGA DE RADIOAFICIONADOS MEDELLÍN COLOMBIA y reconocida mediante la Resolución 1753 del 21 de septiembre de 2004 como entidad regional. En el año 2008 se elevo petición de inscripción y registro ante el Ministerio de las Tecnologías, la Información y las Comunicaciones como entidad nacional, carácter que hoy día ostentamos mediante la Resolución 1553 del 25 de agosto de 2.020."
      },
      {
        "tipo": "parrafo",
        "texto": "Durante estos 50 años de vida jurídica la Liga de Radioaficionados Medellín Colombia, se ha destacado y obtenido reconocimientos en su vinculación en desastres y emergencias y servicios como los ocurridos con el accidente del avión de SAM el 19 de mayo de 1993, en el Cerro el Burro del municipio de Urrao. La tragedia de Armero-Tolima el 13 de noviembre de 1985, el sismo de Armenia Quindío el 25 de enero de 1999, entre otras emergencias y servicios de radio comunicaciones brindados en nuestra razón y objeto social como entidad sin ánimo de lucro."
      },
      {
        "tipo": "parrafo",
        "texto": "Compartimos esta celebración con nuestros socios, ex socios y radioaficionados en general. Les invitamos a que nos acompañen en nuestras actividades y eventos, algunos de estos con tradición como las emisiones del Programa Institucional los martes 08:00 PM a través de nuestra Frecuencia en VHF 147.990 MHz, los tradicionales Jueves de Liga en nuestra Sede como reafirmación de que el contacto personal es un gran complemento al contacto vía radio, y por qué no, a que se vinculen a ella en calidad de socios de número cuya mayor satisfacción y beneficio es la asociatividad, el contagiarnos de la amistad, el compartir conocimientos y experiencias y mutuo apoyo en nuestra pasión por las radiocomunicaciones."
      },
      {
        "tipo": "parrafo",
        "texto": "Escrito originalmente en agosto 31 de 2016, actualizado a agosto 14 de 2023."
      },
    ],
    "estatutosLiga": [
      {
        "tipo": "parrafo",
        "texto": "estatutos aprobados en Asamblea Extraordinaria de 2 de febrero de 2023"
      },
      {
        "tipo": "titulo",
        "texto": "LIGA DE RADIOAFICIONADOS DE MEDELLIN-COLOMBIA ESTATUTOS"
      },
      {
        "tipo": "subtitulo",
        "texto": "CAPITULO I NOMBRE, DURACION, DOMICILIO, PERSONERÍA. OBJETO SOCIAL Y PATRIMONIO"
      },
      {
        "tipo": "titulo",
        "texto": "Datos de la tabla 1 prueba"
      }
    ],
    "juntaDirectiva":[
      {
        "tipo": "parrafo",
        "texto": "información actualizada a septiembre 9 de 2023"
      },
      {
        "tipo": "parrafo",
        "texto": "La Junta Directiva de la Liga de Radioaficionados de Medellín-Colombia para el periodo 2023/2024 está compuesta de la siguiente manera:"
      },
      {
        "tipo": "titulo",
        "texto": "Presidente"
      },
      {
        "tipo": "parrafo",
        "texto": "Al parecer, otros miembros que conformaron la primera Junta fueron:"
      },
      {
        "tipo": "titulo",
        "texto": "Vicepresidente"
      },
      {
        "tipo": "parrafo",
        "texto": "José Soto HJ4YZA"
      },
      {
        "tipo": "titulo",
        "texto": "Secretario"
      },
      {
        "tipo": "parrafo",
        "texto": "Diego López HK4PBV"
      },
      {
        "tipo": "titulo",
        "texto": "Tesorero"
      },
      {
        "tipo": "parrafo",
        "texto": "Víctor Pérez HK4IFF"
      },
      {
        "tipo": "titulo",
        "texto": "Coordinador Técnico"
      },
      {
        "tipo": "parrafo",
        "texto": "Santiago Hernández HK4MBO"
      },
      {
        "tipo": "titulo",
        "texto": "Fiscal"
      },
      {
        "tipo": "parrafo",
        "texto": "Andrés Cardona HK4ACB"
      },
      {
        "tipo": "titulo",
        "texto": "Fiscal Suplente"
      },
      {
        "tipo": "parrafo",
        "texto": "(puesto desierto)"
      },
    ],
    "listaAsociados": [
      {
        "tipo": "parrafo",
        "texto": "estatutos aprobados en Asamblea Extraordinaria de 2 de febrero de 2023"
      },
      {
        "tipo": "parrafo",
        "texto": "indicativos en orden alfabético, primero asociados sin indicativos colombianos, luego HK (primera y avanzada), luego HJ (novicios)"
      },
      {
        "tipo": "titulo",
        "texto": "Junta Directiva"
      },
      {
        "tipo": "tabla1",
        "cabeceras": [],
        "datos": [
          ["HK4ACB","HK4IFF","HK4MBO","HK4MBO"]
        ]
      },
      {
        "tipo": "titulo",
        "texto": "Asociados Honorarios"
      },
      {
        "tipo": "tabla1",
        "cabeceras": [],
        "datos": [
          ["HK4ACB","HK4IFF","HK4MBO","HK4MBO"],
          ["HK4PBV","HK4SSI","HJ4YZA","HK4MBO"]
        ]
      },
      {
        "tipo": "titulo",
        "texto": "Asociados de Número"
      },
      {
        "tipo": "tabla1",
        "cabeceras": [],
        "datos": [
          ["HK4ACB","HK4IFF","HK4MBO","HK4MBO"],
          ["HK4PBV","HK4SSI","HJ4YZA","HK4MBO"],          
          ["HK4PBV","HK4SSI","HJ4YZA","HK4MBO"],
          ["HK4ACB","HK4IFF","HK4MBO","HK4MBO"],
          ["HK4PBV","HK4SSI","HJ4YZA","HK4MBO"],          
          ["HK4PBV","HK4SSI","HJ4YZA","HK4MBO"],
          ["HK4ACB","HK4IFF","HK4MBO","HK4MBO"],
          ["HK4PBV","HK4SSI","HJ4YZA","HK4MBO"],          
          ["HK4PBV","HK4SSI","HJ4YZA","HK4MBO"],
          ["HK4ACB","HK4IFF","HK4MBO","HK4MBO"],
          ["HK4PBV","HK4SSI","HJ4YZA","HK4MBO"],          
          ["HK4PBV","HK4SSI","HJ4YZA","HK4MBO"],
          ["HK4ACB","HK4IFF","HK4MBO","HK4MBO"],
          ["HK4PBV","HK4SSI","HJ4YZA","HK4MBO"],          
          ["HK4PBV","HK4SSI","HJ4YZA","HK4MBO"],
        ]
      },
      {
        "tipo": "parrafo",
        "texto": "89 asociados de número (incluyendo miembros de la Junta Directiva)"
      },
    ],
    "tarifasPagos": [
      {
        "tipo": "parrafo",
        "texto": "estatutos aprobados en Asamblea Extraordinaria de 2 de febrero de 2023"
      },
      {
        "tipo": "parrafo",
        "texto": "A partir de agosto 1 de 2023, y mediante resolución 2023000015 de 23 de junio de 2023, la Junta Directiva ha fijado los valores de las tarifas de aportes para los asociados, de la siguiente manera:"
      },
      {
        "tipo": "tabla1",
        cabeceras: ['Tipo de asociado', 'Costo mensual'],
        datos: [
          ['Asociado de Número Corresponsal (que no residen en el departamento de Antioquia)', '$ 20.000'],
          ['Asociado de Número HJ', '$ 30.000'],
          ['Asociado de Número HK', '$ 35.000'],
        ]
      },
      {
        "tipo": "titulo",
        "texto": "Descuentos por pronto pago"
      },
      {
        "tipo": "parrafo",
        "texto": "Descuento del 10% para los asociados que paguen 12 meses."
      },
      {
        "tipo": "parrafo",
        "texto": "Descuento del 5% para los asociados que paguen 6 meses."
      },
      {
        "tipo": "titulo",
        "texto": "Medios de pago"
      },
      {
        "tipo": "parrafo",
        "texto": "La única cuenta oficial para realizar los aportes mensuales es la Cuenta de Ahorros de Bancolombia No. 108-728361-55."
      },
      {
        "tipo": "parrafo",
        "texto": "Una vez se haya efectuado el pago, por favor envíar el soporte de la transferencia/consignación al número de WhatsApp de la Liga: +57 311 2160031"
      },
      {
        "tipo": "parrafo",
        "texto": "Pronto, este código podrá ser utilizado en otras plataformas y bancos diferentes a Bancolombia."
      },
    ],
    "bureau": [
      {
        "tipo": "parrafo",
        "texto": "El QSL Buró es un sistema de mensajería, correo postal interno aplicado por las Asociaciones de Radioaficionados en todo el mundo para el intercambio de las tarjetas de QSL. Estas tarjetas son la cortesía de todo radioaficionado para confirmar uno o más contactos con estaciones de otros países y/o continentes y al interior de su propio país. Reglamentariamente deben tener una dimensión de 9X14 centímetros y contener como mínimo la siguiente información:"
      },
      {
        "tipo":"lista1",
        "texto":"Estación Contactada (Indicativo).; Fecha.;Hora.;Banda o Frecuencia.;Modo.;Reporte RST."
      },
      {
        "tipo": "parrafo",
        "texto": "La mayoría de radioaficionados diseñan su propia QSL con vistosas y coloridas imágenes que referencian su país, ciudad o localidad, otros su misma estación de radio, panorámicas, etc."
      },
      {
        "tipo": "parrafo",
        "texto": "La confirmación del contacto a través de la tarjeta de QSL es muy importante para el radioaficionado ya que le permite demostrar aspectos tales como la distancia, la potencia de transmisión, condiciones de propagación, eficiencia de la estación y su misma experiencia e idoneidaden su apasionante ejercicio de la radiocomunicación."
      },
      {
        "tipo": "parrafo",
        "texto": "El acuse de recibo de las QSL le permiten así mismo al radioaficionado obtener el ascenso de su categoría, sin el lleno de otros requisitos en caso de no poseerlas, ingresar al Cuadro de Honor Roll del DX a nivel de su país e internacionalmente certificado por las Asociaciones locales, nacionales o internacionales ante los organismos rectores de la actividad a nivel mundial."
      },
      {
        "tipo": "parrafo",
        "texto": "Este servicio es prestado por las Asociaciones de carácter nacional y reconocidas por los organismos internacionales, una por país. En nuestro caso esta representación la tiene la Liga Colombiana de Radioaficionados de la cual nuestra Entidad es miembro en calidad de asociada."
      },
    ],
}

  setValorDiccionario(diccionario:any): void {
    this.valorDiccionario = diccionario;
  }

  async getValorDiccionario() {
    let result = await this.textData[this.valorDiccionario];
    return result;
  }

  setValorBanner(valor: boolean[]): void {
    this.valorBanner = valor;
  }

  getValorBanner(): boolean[] {
    return this.valorBanner;
  }

  setValorCard(valor: boolean[]): void {
    this.valorCard = valor;
  }

  getValorCard(): boolean[] {
    return this.valorCard;
  }

  generarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  obtenerNumeroAleatorio(): number {
    return this.generarNumeroAleatorio(1, 4);
  }
}
