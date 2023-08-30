# Projeto Prático 2  
Universidade Federal de São Carlos - Campus Sorocaba <br>
Bacharelado em Ciência da Computação <br>
Processamento Gráfico <br>
Prof. Dr. Mario Lizier <br>

### Integrantes
Cinthia Costa <br>
Felipe Ottoni Pereira <br>
Letícia Almeida Paulino de Alencar Ferreira <br>
Mateus de Nuzzi Bragatto <br>

## Descrição do Projeto
**Tema escolhido:** Astronomia (Sol, Mercúrio, Venus, Terra e Marte); <br>

Esse projeto tem como objetivo criar a visualização de uma cena 3D que representa parte do sistema solar, com objetos 3D posicionados e dimensionados de modo a simbolizar os planetas (Mercúrio, Venus, Terra e Marte) e o Sol, mapeando os conceitos estudados em Processamento Gráfico. Nesse sentido, cada astro possui seu posicionamento e movimentação (Rotação e Translação) junto a sua textura, além disso, a cena possui três câmeras com vistas distintas, sendo elas a vista superior (de frente para o eixo y), vista frontal ( de frente para o eixo z) e diagonal (visão dos 3 eixos).

### Modo de interação
Para interagir com o projeto:
1. Clonar o repositório<br>
```git clone https://github.com/Leticia-4lm31d4/PP2.git```
2. Executar o arquivo:<br> 
``` 1. index.html``` <br>
``` 2. Para abrir: Utilizamos o Live server com o VSCode```<br>
``` 3. http://127.0.0.1:5500/index.html```


3. Para mudar de camêra:<br>
```Utilizar as teclas de direção, esquerda (<) ou direita (>), do teclado para mudar a camera atual da cena.```

Camera Superior<br>
![Eixo Y](/imagens/eixoy.png)

Camera Frontal<br>
![Eixo Z](/imagens/eixoz.png)

Camera Diagonal<br>
![Eixos X,Y,Z](/imagens/eixoxyz.png)


### Descrição das principais características implementadas
<p>Cinco objetos 3D foram criados, suas dimensões buscam respeitar o sistema solar, assim como seus posicionamentos de acordo com os eixos, logo, o Sol está no centro (0,0,0), é o maior objeto em cena e sua movimentação é a rotação em seu eixo y. Dessa maneira, os planetas estão na ordem real de proximidade com a estrela e suas dimensões procuram simular as proporções de cada um em comparação com a terra, para melhor visualização, pois se comparadas ao Sol visualmente seria complicado enxergar mercúrio, por exemplo. Então, também possuem suas rotações com eixo y e translações, para definir as velocidades usamos as infromações da terra como base de proporção, porém os dados da terra não são os reais, também para melhor visualização e processamento.</p>
<p>Para implementar as camêras, escolhemos três visões diferentes que podem ser alternadas, sendo uma para vizualizar do eixo z, outra do eixo y e uma que permite ver os 3 eixos. Nesse sentido, percebe-se que na cena estão presentes os eixos para guiar o espectador da cena.</p>
A iluminação

## Fontes 
https://threejs.org/ <br>
https://adolfoguimaraes.github.io/threejs/ <br>
https://sketchfab.com/