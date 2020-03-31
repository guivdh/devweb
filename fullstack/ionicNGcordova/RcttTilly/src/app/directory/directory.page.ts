import { Component } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: 'directory.page.html',
  styleUrls: ['directory.page.scss']
})
export class directoryPage {

  constructor() {}


  keyword = 'name';
  public titles = [
    {
      id: 1,
      name: 'Match - Division2A_N',
    },
    {
      id: 2,
      name: 'Match - Division1B_P',
    },
    {
      id: 3,
      name: 'Match - Division3C_P',
    },
    {
      id: 4,
      name: 'Match - Division3D_P',
    },
    {
      id: 5,
      name: 'Match - Division4E_P',
    },
    {
      id: 6,
      name: 'Match - Division5F_P',

    },
    {
      id: 7,
      name: 'Match - Division6G_P',
    },
    {
      id: 8,
      name: 'Match - Division7_debutant',
    },
    {
      id: 9,
      name: 'Entrainement libre',
    },
    {
      id: 10,
      name: 'Entrainement dirigé',
    },
    {
      id: 11,
      name: 'Souper du club',
    },
    {
      id: 12,
      name: 'Réunion - capitaine',
    },
    {
      id: 13,
      name: 'Réunion - responsable',
    }
  ];
    selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }


}
