import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: `article.component.html`,
})
export class ArticleComponent {

  showArticle(article: string): void {
    
    console.log("Vous avez sélectionné cet article : " + article);
  }

  resultForm(form: string): void {
    
    console.log("Vous avez écrit dans le formulaire suivant : " + form);
  }

  articles: string[] = [
    "Pokémon Article 1",
    "Pokémon Article 2",
    "Pokémon Article 3",
    "Pokémon Article 4"
  ]


}
