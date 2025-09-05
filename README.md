# pacotes instalados
npm install @reduxjs/toolkit axios date-fns dotenv emailjs-com react react-big-calendar react-dom react-redux react-router-dom react-slick slick-carousel sweetalert2


…or create a new repository on the command line
echo "# projeto_react_escritorio_ti" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:wendell-nasc/projeto_react_escritorio_ti.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin git@github.com:wendell-nasc/projeto_react_escritorio_ti.git
git branch -M main
git push -u origin main


git pull -u origin main



# DOCKER COMPOSE UBUNTU
3. Alternativa: Usar o restart policy do Docker (Mais Simples)
No seu arquivo docker-compose.yml, adicione a política de restart:

yaml
version: "3.9"

services:
  web:
    build: .
    ports:
      - "5000:80"
    restart: unless-stopped  # Ou use 'always'
E depois execute:

bash
# Dar permissão para o Docker iniciar na boot
sudo systemctl enable docker

# Configurar o Docker Compose para iniciar automaticamente
sudo crontab -e
Adicione esta linha ao crontab:


@reboot sleep 30 && cd /home/wendell/projeto_react_escritorio_ti && docker compose up -d

4. Verificar se está funcionando
bash
# Verificar se os containers estão rodando
docker ps

# Verificar logs dos containers
docker compose logs

# Verificar se o serviço systemd está ativo
sudo systemctl status docker-compose-app.service
5. Comandos úteis para gerenciamento
bash
# Parar os containers
sudo systemctl stop docker-compose-app.service

# Reiniciar os containers
sudo systemctl restart docker-compose-app.service

# Ver logs do serviço
journalctl -u docker-compose-app.service -f
Escolha o método que melhor se adapta às suas necessidades. O método com systemd (opção 1) é geralmente mais robusto para produção.