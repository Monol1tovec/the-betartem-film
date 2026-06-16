# 🚀 Инструкция по деплою на Vercel

## Быстрый деплой (рекомендуется)

### Вариант 1: Через Vercel CLI

1. Установите Vercel CLI глобально:
```bash
npm install -g vercel
```

2. Перейдите в папку проекта:
```bash
cd C:\Users\dimas\the-betartem-film
```

3. Запустите деплой:
```bash
vercel
```

4. Следуйте инструкциям в терминале:
   - Войдите в аккаунт Vercel (или создайте новый)
   - Подтвердите настройки проекта
   - Дождитесь завершения деплоя

5. После успешного деплоя вы получите URL вашего сайта!

### Вариант 2: Через GitHub + Vercel Dashboard

1. Создайте репозиторий на GitHub:
   - Перейдите на https://github.com/new
   - Создайте новый репозиторий (например, "the-betartem-film")

2. Инициализируйте Git в проекте:
```bash
cd C:\Users\dimas\the-betartem-film
git init
git add .
git commit -m "Initial commit: THE BETARTEM film website"
```

3. Подключите удалённый репозиторий:
```bash
git remote add origin https://github.com/YOUR_USERNAME/the-betartem-film.git
git branch -M main
git push -u origin main
```

4. Деплой на Vercel:
   - Перейдите на https://vercel.com
   - Нажмите "Add New Project"
   - Выберите "Import Git Repository"
   - Выберите ваш репозиторий "the-betartem-film"
   - Vercel автоматически определит настройки Vite
   - Нажмите "Deploy"

5. Готово! Ваш сайт будет доступен по URL от Vercel

### Вариант 3: Прямая загрузка на Vercel

1. Соберите проект:
```bash
cd C:\Users\dimas\the-betartem-film
npm run build
```

2. Перейдите на https://vercel.com
3. Нажмите "Add New Project"
4. Перетащите папку `dist` в окно загрузки
5. Vercel автоматически задеплоит статические файлы

## ⚙️ Настройки проекта

Файл `vercel.json` уже настроен и включает:
- Автоматическую сборку через Vite
- Правильную настройку роутинга для SPA

## 🔧 Проверка перед деплоем

Убедитесь, что проект работает локально:

1. Установите зависимости:
```bash
npm install
```

2. Запустите dev-сервер:
```bash
npm run dev
```

3. Проверьте сборку:
```bash
npm run build
```

4. Просмотрите собранный проект:
```bash
npm run preview
```

## 📝 Полезные команды

- `npm run dev` — запуск dev-сервера (http://localhost:5173)
- `npm run build` — сборка для продакшена
- `npm run preview` — предварительный просмотр собранного проекта
- `vercel` — деплой на Vercel
- `vercel --prod` — деплой в продакшен (минуя preview)

## 🌐 После деплоя

После успешного деплоя вы получите:
- Production URL (например, `the-betartem-film.vercel.app`)
- Автоматическое обновление при push в репозиторий (если используете GitHub)
- HTTPS сертификат (автоматически)
- CDN для быстрой загрузки по всему миру

## 💡 Рекомендации

- Используйте **Вариант 2** (GitHub + Vercel) для автоматических обновлений
- После деплоя можно настроить собственный домен в настройках Vercel
- Vercel автоматически создаёт preview для каждого pull request

## 🆘 Поддержка

Если возникли проблемы:
1. Проверьте, что все зависимости установлены: `npm install`
2. Убедитесь, что проект собирается локально: `npm run build`
3. Проверьте логи деплоя в Vercel Dashboard

---

**Удачи с деплоем! 🎬**
