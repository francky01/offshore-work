import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {DockModule} from 'primeng/dock';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayTerminal: boolean = false;

  displayFinder: boolean = false;

  displayGalleria: boolean = false;

  dockBasicItems: MenuItem[] = [];

  dockItems: MenuItem[] = [];

  menubarItems: any[] = [];

  responsiveOptions: any[] = [];

  images: any[] = [
    {
      "previewImageSrc": "demo/images/galleria/galleria4.jpg",
      "thumbnailImageSrc": "demo/images/galleria/galleria4s.jpg",
      "alt": "Description for Image 4",
      "title": "Title 4"
  },
  {
      "previewImageSrc": "demo/images/galleria/galleria5.jpg",
      "thumbnailImageSrc": "demo/images/galleria/galleria5s.jpg",
      "alt": "Description for Image 5",
      "title": "Title 5"
  },
  {
      "previewImageSrc": "demo/images/galleria/galleria6.jpg",
      "thumbnailImageSrc": "demo/images/galleria/galleria6s.jpg",
      "alt": "Description for Image 6",
      "title": "Title 6"
  },
  ];

  nodes: any[] = [];

  subscription!: Subscription;

  constructor( ) { }


  ngOnInit(): void {
    this.dockItems = [
      {
          label: 'Finder',
          tooltipOptions: {
              tooltipLabel: "Finder",
              tooltipPosition: 'top',
              positionTop: -15,
              positionLeft: 15
          },
          icon: "assets/finder.svg",
          command: () => {
              this.displayFinder = true;
          }
      },
      {
          label: 'Terminal',
          tooltipOptions: {
              tooltipLabel: "Terminal",
              tooltipPosition: 'top',
              positionTop: -15,
              positionLeft: 15
          },
          icon: "assets/terminal.svg",
          command: () => {
              this.displayTerminal = true;
          }
      },
      {
          label: 'App Store',
          tooltipOptions: {
              tooltipLabel: "App Store",
              tooltipPosition: 'top',
              positionLeft: 15,
              positionTop: -15
          },
          icon: "assets/appstore.svg",
          command: () => {
              window.alert("COMMANDE");
          }
      },
      {
          label: 'Safari',
          tooltipOptions: {
              tooltipLabel: "Safari",
              tooltipPosition: 'top',
              positionTop: -15,
              positionLeft: 15
          },
          icon: "assets/safari.svg",
          command: () => {
            window.alert("SAFARI");
          }
      },
      {
          label: 'Photos',
          tooltipOptions: {
              tooltipLabel: "Photos",
              tooltipPosition: 'top',
              positionTop: -15,
              positionLeft: 15
          },
          icon: "assets/photos.svg",
          command: () => {
              this.displayGalleria = true
          }
      },
      {
          label: 'GitHub',
          icon: "assets/github.svg",
      },
      {
          label: 'Trash',
          icon: "assets/trash.png",
          command: () => {
            window.alert("TRASH");
          }
      }
  ];

  this.menubarItems = [
      {
          label: 'Finder',
          className: 'menubar-root'
      },
      {
          label: 'File',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {
                          label: 'Bookmark',
                          icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                          label: 'Video',
                          icon: 'pi pi-fw pi-video'
                      },

                  ]
              },
              {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-trash'
              },
              {
                  separator: true
              },
              {
                  label: 'Export',
                  icon: 'pi pi-fw pi-external-link'
              }
          ]
      },
      {
          label: 'Edit',
          items: [
              {
                  label: 'Left',
                  icon: 'pi pi-fw pi-align-left'
              },
              {
                  label: 'Right',
                  icon: 'pi pi-fw pi-align-right'
              },
              {
                  label: 'Center',
                  icon: 'pi pi-fw pi-align-center'
              },
              {
                  label: 'Justify',
                  icon: 'pi pi-fw pi-align-justify'
              },

          ]
      },
      {
          label: 'Users',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-fw pi-user-plus',

              },
              {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-user-minus',

              },
              {
                  label: 'Search',
                  icon: 'pi pi-fw pi-users',
                  items: [
                      {
                          label: 'Filter',
                          icon: 'pi pi-fw pi-filter',
                          items: [
                              {
                                  label: 'Print',
                                  icon: 'pi pi-fw pi-print'
                              }
                          ]
                      },
                      {
                          icon: 'pi pi-fw pi-bars',
                          label: 'List'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Events',
          items: [
              {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                      {
                          label: 'Save',
                          icon: 'pi pi-fw pi-calendar-plus'
                      },
                      {
                          label: 'Delete',
                          icon: 'pi pi-fw pi-calendar-minus'
                      }
                  ]
              },
              {
                  label: 'Archieve',
                  icon: 'pi pi-fw pi-calendar-times',
                  items: [
                      {
                          label: 'Remove',
                          icon: 'pi pi-fw pi-calendar-minus'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Quit'
      }
  ];

  this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  // this.subscription = this.terminalService.commandHandler.subscribe((command: any) => this.commandHandler(command));

  // this.galleriaService.getImages().then((data: any[]) => this.images = data);
  // this.nodeService.getFiles().then((data: any[]) => this.nodes = data);
  }

  commandHandler(text: string) {
    let response;
    let argsIndex = text.indexOf(' ');
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch (command) {
        case 'date':
            response = 'Today is ' + new Date().toDateString();
            break;

        case 'greet':
            response = 'Hola ' + text.substring(argsIndex + 1) + '!';
            break;

        case 'random':
            response = Math.floor(Math.random() * 100);
            break;

        case 'clear':
            response = null;
            break;

        default:
            response = 'Unknown command: ' + command;
            break;
    }

    if (response) {
        // this.terminalService.sendResponse(response);

    }
    else {
        // this.terminalService.sendResponse(response);
    }
}

ngOnDestroy() {

}

}
