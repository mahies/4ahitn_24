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
      description: 'Motorradfahren bedeutet für mich Freiheit und Abenteuer. Egal ob auf kurvigen Landstraßen oder in der Stadt, jede Fahrt ist ein Erlebnis.'
    },
    {
      name: 'Fitness',
      images: [
        'assets/hobbies/gym1.jpg',
        'assets/hobbies/gym2.jpg',
        'assets/hobbies/gym3.jpg'
      ],
      description: 'Ich gehe gerne ins Gym trainieren. Ich will stärker werden und an meine Grenzen im Gym kommen'
    }
  ];
}
