# Portfolio
Portfolio made at the end of the Open Classrooms program.


# gh-pages dependency, Deployment & Caveats:

previous commit 762f7b7c15f7b7fe920f452c37b4a76e1985a339 had an older version with readme indications and tutorial followed.

Changes made after some reading of vite documentation, different script in package.json indicate now the base required (/ or /Portfolio/), and "basename" for Router gets the value import.meta.env.BASE_URL => it works in both development and two build options: local and gh-pages.
in script predeploy: "&& cp ./dist/index.html ./dist/404.html" is neaded since refreshing the page on gh-pages gives you a 404 message.
in case of problems deploying: commit sha e1f41d1cca39d9f92591ffa9d45b56d7fe9cbd72

