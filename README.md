## What to do?

- download pdf
- Уменьшить ширину контейнера с 970 до 940
 

## Docs
* [A BitBucket CI/CD Pipeline to Sync Branches With GitHub](https://betterprogramming.pub/a-bitbucket-ci-cd-pipeline-to-sync-branches-with-github-1c885cefe202)
* [Конвейер BitBucket CI/CD для синхронизации веток с GitHub](https://medium.com/nuances-of-programming/%D0%BA%D0%BE%D0%BD%D0%B2%D0%B5%D0%B9%D0%B5%D1%80-bitbucket-ci-cd-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-%D0%B2%D0%B5%D1%82%D0%BE%D0%BA-%D1%81-github-9d216b42d27d)
* [Remove git commit history without removing repo](https://www.willandskill.se/en/deleting-your-git-commit-history-without-removing-repo-on-github-bitbucket/)
* [Adding a project to GitHub without GitHub CLI](https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line)

## Github/Bitbucket SSH keys
[Статья как это сделать](https://medium.com/nuances-of-programming/%D0%BA%D0%BE%D0%BD%D0%B2%D0%B5%D0%B9%D0%B5%D1%80-bitbucket-ci-cd-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-%D0%B2%D0%B5%D1%82%D0%BE%D0%BA-%D1%81-github-9d216b42d27d)
1. Проверить или есть ssh ключи
    открыть терминал и написать `ls ~/.ssh` (если нет, надо сгенерировать новый)
2. Теперь войдите в репозиторий GitHub(Github/RepositoryName/Settings/Add deploy key) и создайте новый ключ развертывания. Введите открытый ключ из файла id_ed25519.pub. Выберите “Разрешить доступ на запись”. Нажмите кнопку “Добавить ключ”
3. Войдите в репозиторий BitBucket и нажмите “Настройки репозитория”. Нажмите “Ключи SSH” и “Использовать мои собственные ключи” (как уже говорилось, вы можете вместо этого создавать закрытые и открытые ключи через кнопку “Генерировать ключи”). Добавьте закрытый ключ из файла id_ed25519, потом открытый ключ из файла id_ed25519.pub и сохраните пару ключей.
4. Все можно пушить.

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






