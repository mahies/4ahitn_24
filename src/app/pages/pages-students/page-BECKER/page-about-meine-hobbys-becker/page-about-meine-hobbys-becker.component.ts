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
      description: 'Motorradfahren bedeutet für mich Freiheit und Abenteuer. Egal ob auf kurvigen Landstraßen oder in der Stadt, jede Fahrt ist ein Erlebnis.',
      story: 'Meine Eltern und mein Bruder sind Motorrad gefahren und ich bin immer als Sozius mitgefahren und habe das immer sehr cool gefunden. Auch mein Cousin und mein Onkel fahren Motorrad, deswegen hatte ich bereits mit 10 Jahren Interesse daran einen Motorrad Führerschein zu machen. ' +
        'Ich habe mit 15,5 Jahren den 125er Führerschein gemacht und jetzt 2 Jahre später hab ich meinen A2 Führerschein gemacht. Mein erstes Motorrad habe ich mir mit 16 gekauft, eine Yamaha R125. Finanziell hätte ich nie gedacht das ich mir mit 16 eine Yamaha also mein Traummotorrad kaufen kann, aber daher ich mit 15 Jahren schon einen Samstagjob hatte, konnte ich mir diesen Traum erfüllen.' +
        'Daher ich jetzt meinen A2 Führerschein gemacht hab, also die nächsthöhere Motorradklasse, spare ich auf ein stärkeres Motorrad'
    },
    {
      name: 'Fitness',
      images: [
        'assets/hobbies/gym1.jpg',
        'assets/hobbies/gym2.jpg',
        'assets/hobbies/gym3.jpg'
      ],
      description: 'Ich gehe gerne ins Gym trainieren. Ich will stärker werden und an meine Grenzen im Gym kommen',
      story: 'Ich habe begonnen trainieren zu gehen, nur um bisschen fitter zu werden, jetzt fokussiere ich mich noch viel mehr auf Kraft und Muskelaufbau. ' +
        'Ich hab begonen wir feste Ziele zu setzen wie zB. habe ich mir vorgenommen Liegestütz zu können, seit Anfang letzten Jahres habe ich dies Ziel erreicht, natürlich arbeite ich daran mich darin zu steigern und habe neue Ziele wie, dass ich bis Ende diesen Jahren 5 KLimmzüge schaffen will'
    }
  ];
}
