# Exercice de test UI

## Prérequis 
NPM : installer et sur la dernière version

## Création du projet
Cloner le dépot sur votre bureau

Passé la commande pour installer les package :
```Bash
npm i
```

Test que le serveur se lance correctement :
```Bash
npm run dev
```

## Des tests unitaire (Par component)
### Théorie
Nous utilison Vitest un framework de test pour les application vite. Vitest ressemble grandement a Jest. Vitest permet de créer des environements pour tester les componants.
#### Créer une suite de tests
Les suites de tests sert a classer les tests et il serve à se retrouver dans ses tests
```js
describe('<nom de la suite de test>', () => {
  ...
})
```

#### Créer un test
Le `it` permet d'initier des test
```js
it('renders properly', () => {
    ...
  })
```

#### Créer un environement pour tester des componant
Le wrapper permet de créer des environement où le componant peut être tester.
```js
const wrapper = mount(<nom du coponant>, ...)
```

##### Option de Mount
Nous pouvons mettre en paramètre des props spécisifque dont le componant à besoin.
```js
const wrapper = mount(<nom du coponant>, { props: { <nom du props>: <valeur du props> } })
```

#### Vérifier les valeurs
Pour valider les testes if faut savoir si le test est validé ou pas
```js
expect(...)
```

##### Verifier le contenu du text d'un component
```js
expect(wrapper.text()).toContain('<le contenu attendu>')
```

### Exercice
#### 1) Entré un props dans HelloWorld 
```
.
└── test-ui-exercice
    └── src
        └── components
            └── __test__
                └── HelloWorld.spec.js
```

Dans cette exercice vous allez créer un environement avec `Mount` pour créer le compnant `HelloWord`. 
Ce componant a un props `msg` qui va s'affichier dans le component. **But**: Entré le message `Hello Vitest` en props et qu'il s'affiche dans le componant.

## Des tests unitaire (Par component)
### Théorie de Playwright
Playwright est un framwork pour faire des test e2e (des tests d'utilisateur final automatique). Il va lancer le site web et va tester sur différant navigateur en même temps.
Cela fait un peux peur car il ouvre des pages sur votre pc automatiquement. Puis il va réaliser des tests sur ses navigateur et rendre un compte-rendu sur un site internet lancer automatique.

#### Création d'un test
La fonction `Test` permet a playwright de passé le test sur l'application. Nous créer un fonction async car certaine des action permene du temps. 
Le `page` permet de naviguer et de retrouver les 
```js
test('<nom du test>', async ({ page }) => {
  ...
})
```

#### Aller sur une page du site
Avec cette commande nous pouvons nous déplacer dans le site en entrant les URL des page.
```js
await page.goto('/<url de la page>');
```

#### Trouver un élément de la page
Pour faire des actions sur certain élément du site il faut trouver l'élément. Pour cela il existe plusieur fonction :

##### Trouver par la balise
```js
page.locator('<balise à trouver>')
```

##### Trouver par le rôle
```js
await page.getByRole('<rôle>')
```

##### Trouver grace au label (formulaire)
```js
await page.getByLabel('<nom du label')
```

#### Action sur la page
Pour réaliser certain action les utilisateurs doivent cliquer, entrez des données, etc... 

##### Clicker sur un bouton
```js
await page.getByRole('button').click()
```

##### Remplir un formulaire
```js
await page.getByLabel('<nom du label>').fill(<donnée>);
```

#### Verification
//TODO
