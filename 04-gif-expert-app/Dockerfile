# https://www.youtube.com/watch?v=CV_Uf3Dq-EU amazing tutorial
# imagen que queremos (para este proyecto necesitamos node)
# asi tendremos todo lo que necesitamos ya instalado
# <nombre_imagen:version>
# la version suele usar el S.O. alpine que pesa solo 5MB por 
# es muy bueno 
FROM node:16-alpine3.11

# el directorio que se crea dentro de mi imagen node
WORKDIR /04-GIF-EXPERT-APP


ENV PATH="./node_modules/.bin:$PATH"

# copiar el directotio en el que estoy .
# a el directorio dentro del contenedor(dentro de 04-GIF-EXPERT-APP) .
COPY . .

# compilar todo lo que esta en nuestro codigo node
RUN npm run build

# al final de dockerfile, especificamos el comando a correr
# cuando se inicia el contenedor correra el comando dentro de CMD
CMD [ "npm","start" ]

