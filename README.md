## What to do?

- download pdf
- Уменьшить ширину контейнера с 970 до 940
 

## Docs
* [A BitBucket CI/CD Pipeline to Sync Branches With GitHub](https://betterprogramming.pub/a-bitbucket-ci-cd-pipeline-to-sync-branches-with-github-1c885cefe202)
* [Конвейер BitBucket CI/CD для синхронизации веток с GitHub](https://medium.com/nuances-of-programming/%D0%BA%D0%BE%D0%BD%D0%B2%D0%B5%D0%B9%D0%B5%D1%80-bitbucket-ci-cd-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-%D0%B2%D0%B5%D1%82%D0%BE%D0%BA-%D1%81-github-9d216b42d27d)
* [Remove git commit history without removing repo](https://www.willandskill.se/en/deleting-your-git-commit-history-without-removing-repo-on-github-bitbucket/)
* [Adding a project to GitHub without GitHub CLI](https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line)


## Bitbucket pipeline

Алгоритм действий с репозиторием

1. Синхронизировать удаленной репозиторий  
   `git remote add sync <github_repo>`
2. Скинуть все файлы, сделать как не затреканые  
   `git rm -r --cached .`
3. Добавляем в стейдж только папку `dist`  
    `git add dist/ -f` 
4. Перемещаем добавленные файлы на уровень выше  
   `git mv dist/* ./`
5. Удаляем все не затреканые файлы  
   `git clean -f -d`
6. Делаем коммит  
    `git commit -m "My commit"`
7. Пушим в нужную ветку  
    `git push --force sync branch_name`






