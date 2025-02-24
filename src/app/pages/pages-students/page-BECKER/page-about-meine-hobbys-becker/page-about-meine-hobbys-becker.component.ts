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
      story: 'Motorräder haben mich schon früh fasziniert – meine Eltern und mein Bruder fuhren selbst, und ich war oft als Sozius dabei. Auch mein Cousin und mein Onkel fahren, sodass ich schon mit 10 Jahren den Wunsch hatte, einen Motorradführerschein zu machen. Mit 16 Jahren erfüllte ich mir diesen Traum und machte den 125er-Führerschein. ' +
        'Ich kaufte mir meine erste Maschine, eine Yamaha R125 – mein absolutes Traum-Bike. Dank meines Samstagjobs mit 15 konnte ich mir das finanzieren. Nun, mit meinem frisch bestandenen A2-Führerschein, spare ich auf ein stärkeres Motorrad!'
    },
    {
      name: 'Fitness',
      images: [
        'assets-BECKER/gym1.jpeg',
        'assets-BECKER/gym2.jpeg',
        'assets-BECKER/gym3.jpeg'
      ],
      description: 'Ich gehe gerne ins Gym trainieren. Ich will stärker werden und an meine Grenzen kommen',
      story: 'Ich habe ursprünglich mit dem Training begonnen, um einfach fitter zu werden. Doch mittlerweile liegt mein Fokus viel stärker auf Kraft und Muskelaufbau. ' +
        'Ich setze mir feste Ziele – eines davon war, Liegestütze zu meistern, was ich seit Anfang letzten Jahres erreicht habe. Natürlich arbeite ich weiterhin daran, mich zu verbessern. Mein nächstes Ziel: Bis Ende dieses Jahres möchte ich fünf Klimmzüge schaffen'
    }
  ];
}
