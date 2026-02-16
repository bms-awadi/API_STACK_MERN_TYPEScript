## Créer un nouveau dossier et acceder
```bash
mkdir nom_dossier
cd nom_dossier
```

## Initialiser le projet
```bash
npm init -y
```

## Installer TypeScript et les outils
```bash
npm install -D typescript ts-node @types/node
```

## Génerer le tsconfig.json
```bash
npx tsc --init
```

- Ensuite dans `tsconfig.json`, on vérifie que ces options sont actives :
```json
"target": "es2020",
"module": "commonjs",
"strict": true,
"esModuleInterop": true
```

- Puis dans `package.json`, on ajoute le script :
```json
"scripts": {
    "start": "ts-node src/index.ts"
}
```

- Enfin créer le dossier `src` et le fichier `index.ts` et une fois prêt, lancer :
```bash
npm start
```