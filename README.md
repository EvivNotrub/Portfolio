# Portfolio
Portfolio made at the end of the Open Classrooms program.


# gh-pages Deployment & Caveats:

used this tutorial: 
https://github.com/gitname/react-gh-pages
and this one:
https://blog.devgenius.io/how-to-deploy-your-vite-react-app-to-github-pages-with-and-without-react-router-b060d912b10e
To simplify github pages deployment, but it means local build and preview (and deployment on other platforms) my pose a problem.
Solutions for other deployments:
 - revert the changes from commit 762f7b7c15f7b7fe920f452c37b4a76e1985a339. 
 - OR simply change vite.config.js to have a path "/" when command === "build" and delete/change basename={import.meta.env.DEV ? '/' : '/Portfolio/'} for the react-router