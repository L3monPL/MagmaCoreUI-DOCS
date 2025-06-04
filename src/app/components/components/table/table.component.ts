import { Component } from '@angular/core';
import { MagmaCardModule, MagmaTableModule } from 'magma-core';
import { CodeTemplateComponent } from '../../../templates/code-template/code-template.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MagmaCardModule,
    CodeTemplateComponent,
    MagmaTableModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  // --- Import --- //
  codeImport = `import { MagmaInputModule } from 'magma-core';`

  // --- Basic --- //
  codeBasicExamp: string = `<magma-table [loading]="isLoading">
    <thead>
      <tr>
        <th class="m-col-s m-mobile-hide">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
            <path d="M22.943,5.265c-1.213-1.688-2.331-2.865-3.917-4.095-2.43-1.872-5.831-1.479-7.744,.898l-3.31,4.118c-1.059,1.317-1.247,3.066-.604,4.532L.879,17.207C.312,17.773,0,18.527,0,19.328v2.672c0,1.103,.897,2,2,2h2c1.103,0,2-.898,2-2.001v-.999h1c.552,0,1-.447,1-1v-1h2c.262,0,.514-.103,.701-.286l2.291-2.253c.639,.336,1.338,.525,2.048,.525,.954,0,1.911-.307,2.711-.932l4.086-3.188c2.354-1.836,2.84-5.176,1.105-7.602Zm-13.353,11.736h-2.59c-.537-.012-1.011,.461-1,.999v1h-1c-.552,0-1,.447-1,1v1.999H2s0-2.671,0-2.671c0-.263,.107-.521,.293-.707l6.276-6.275,2.854,2.854-1.832,1.801Zm11.017-5.711l-4.086,3.188c-.959,.746-2.329,.662-3.188-.196l-3.627-3.627c-.872-.872-.947-2.255-.174-3.216l3.31-4.118c1.236-1.536,3.426-1.758,4.963-.567,1.431,1.109,2.413,2.144,3.512,3.674h0c1.109,1.552,.798,3.687-.708,4.862Zm-1.923-4.01c.391,.391,.391,1.023,0,1.414-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293l-2-2c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2,2Z"/>
          </svg>
          id
        </th>
        <th class="m-col-m m-mobile-hide">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M21,0H3c-1.308,.005-1.307,1.995,0,2H11V23c.005,1.308,1.995,1.307,2,0V2h8c1.308-.005,1.307-1.995,0-2Z"/></svg>
          name
        </th>
        <th class="m-col-m m-mobile-hide">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M21,0H3c-1.308,.005-1.307,1.995,0,2H11V23c.005,1.308,1.995,1.307,2,0V2h8c1.308-.005,1.307-1.995,0-2Z"/></svg>
          surname
        </th>
        <th class="m-col-xl">
          <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"/></svg>
          email
        </th>
        <th class="m-col-m m-mobile-hide">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m19,4h-4v-1c0-1.654-1.346-3-3-3s-3,1.346-3,3v1h-4C2.243,4,0,6.243,0,9v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-10c0-2.757-2.243-5-5-5Zm-8-1c0-.552.449-1,1-1s1,.448,1,1v1.995s0,.003,0,.005,0,.003,0,.005v.995s-2.001,0-2.001,0v-3Zm11,16c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3v-10c0-1.654,1.346-3,3-3h4c0,1.103.897,2,2,2h2c1.103,0,2-.897,2-2h4c1.654,0,3,1.346,3,3v10Zm-12.5-6.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm7.468,7.251c.138.534-.184,1.08-.719,1.218-.538.139-1.08-.185-1.218-.72-.331-1.282-1.634-2.249-3.032-2.249s-2.702.967-3.032,2.249c-.116.451-.522.751-.968.751-.082,0-.166-.01-.25-.031-.535-.138-.857-.683-.719-1.218.559-2.174,2.648-3.751,4.968-3.751s4.409,1.577,4.968,3.751Z"/></svg>
          role
        </th>
        <th class="m-col-m">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M17,10.039c-3.859,0-7,3.14-7,7,0,3.838,3.141,6.961,7,6.961s7-3.14,7-7c0-3.838-3.141-6.961-7-6.961Zm0,11.961c-2.757,0-5-2.226-5-4.961,0-2.757,2.243-5,5-5s5,2.226,5,4.961c0,2.757-2.243,5-5,5Zm1.707-4.707c.391,.391,.391,1.023,0,1.414-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293l-1-1c-.188-.188-.293-.442-.293-.707v-2c0-.552,.447-1,1-1s1,.448,1,1v1.586l.707,.707Zm5.293-10.293v2c0,.552-.447,1-1,1s-1-.448-1-1v-2c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v1H11c.552,0,1,.448,1,1s-.448,1-1,1H2v9c0,1.654,1.346,3,3,3h4c.552,0,1,.448,1,1s-.448,1-1,1H5c-2.757,0-5-2.243-5-5V7C0,4.243,2.243,2,5,2h1V1c0-.552,.448-1,1-1s1,.448,1,1v1h8V1c0-.552,.447-1,1-1s1,.448,1,1v1h1c2.757,0,5,2.243,5,5Z"/></svg>
          created at
        </th>
        <th class="m-col-action">
          <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><circle cx="2" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="22" cy="12" r="2"/></svg>
        </th>
      </tr>
    </thead>
    <tbody>
      @for (user of usersList; track $index) {
        <tr>
          <td class="m-col-s m-mobile-hide">{{user.id}}</td>
          <td class="m-col-m m-mobile-hide">{{user.name}}</td>
          <td class="m-col-m m-mobile-hide">{{user.surname}}</td>
          <td class="m-col-xl">{{user.email}}</td>
          <td class="m-col-m m-mobile-hide">{{user.role}}</td>
          <td class="m-col-m">{{user.createdAt}}</td>
          <td class="m-col-action">
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z"/></svg>
          </td>
        </tr>
      }
    </tbody>
</magma-table>`

  usersList = [
    {
      id: 0,
      name: 'Testowy',
      surname: 'Tester',
      email: 'testowy@gmail.com',
      role: 'admin',
      createdAt: '10/04/2025'
    },
    {
      id: 1,
      name: 'Mikołaj',
      surname: 'Andrzejewski',
      email: 'mikolaj@gmail.com',
      role: 'admin',
      createdAt: '10/04/2025'
    },
    {
      id: 2,
      name: 'Anna',
      surname: 'Kowalska',
      email: 'anna.kowalska@gmail.com',
      role: 'user',
      createdAt: '10/04/2025'
    },
    {
      id: 3,
      name: 'Jan',
      surname: 'Nowak',
      email: 'jan.nowak@gmail.com',
      role: 'user',
      createdAt: '10/04/2025'
    },
    {
      id: 4,
      name: 'Katarzyna',
      surname: 'Wiśniewska',
      email: 'katarzyna.w@gmail.com',
      role: 'user',
      createdAt: '10/04/2025'
    },
    {
      id: 5,
      name: 'Piotr',
      surname: 'Zieliński',
      email: 'piotr.zielinski@gmail.com',
      role: 'user',
      createdAt: '10/04/2025'
    },
    {
      id: 6,
      name: 'Aleksandra',
      surname: 'Mazur',
      email: 'aleksandra.mazur@gmail.com',
      role: 'user',
      createdAt: '10/04/2025'
    },
    {
      id: 7,
      name: 'Tomasz',
      surname: 'Krawczyk',
      email: 'tomasz.krawczyk@gmail.com',
      role: 'user',
      createdAt: '10/04/2025'
    },
    {
      id: 8,
      name: 'Magdalena',
      surname: 'Wójcik',
      email: 'magdalena.wojcik@gmail.com',
      role: 'user',
      createdAt: '10/04/2025'
    },
    {
      id: 9,
      name: 'Kamil',
      surname: 'Dąbrowski',
      email: 'kamil.dabrowski@gmail.com',
      role: 'user',
      createdAt: '10/04/2025'
    },
    {
      id: 10,
      name: 'Natalia',
      surname: 'Kaczmarek',
      email: 'natalia.kaczmarek@gmail.com',
      role: 'user',
      createdAt: '10/04/2025'
    }
  ]

}
