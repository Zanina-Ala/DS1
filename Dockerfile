# ---------- STAGE 1 : BUILD REACT APP ----------
FROM node:20 AS build

# Dossier de travail dans le container
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Build Vite (dist/)
RUN npm run build


# ---------- STAGE 2 : SERVE AVEC NGINX ----------
FROM nginx:alpine

# Copier le build React vers Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port HTTP
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
