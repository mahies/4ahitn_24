import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-about-me-becker',
  imports: [CommonModule],
  templateUrl: './page-about-meine-hobbys-becker.component.html',
  styleUrl: './page-about-meine-hobbys-becker.component.scss'
})
export class PageAboutMeineHobbysBeckerComponent {
  hobbies = [
    {
      name: 'Motorradfahren',
      images: [
        'assets-BECKER/gruppe.jpeg',
        'assets-BECKER/gruppe2.jpeg',
        'assets-BECKER/MesseM.jpeg',
        'assets-BECKER/MotorradIch.jpeg',
        'assets-BECKER/r125.jpeg',
        'assets-BECKER/regenM.jpeg',
        'assets-BECKER/teesdorf.jpeg'
      ],
      description: ''
    },
    {
      name: 'Gym & Fitness',
      images: [
        'assets/hobbies/gym1.jpg',
        'assets/hobbies/gym2.jpg',
        'assets/hobbies/gym3.jpg'
      ],
      description: ''
    }
  ];
}
