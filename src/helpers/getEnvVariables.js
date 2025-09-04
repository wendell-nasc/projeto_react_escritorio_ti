


export const getEnvVariables = () => {

    //import.meta.env;//Comentado por causa do erro no heroku

    return {
        //...import.meta.env//Comentado por causa do erro no heroku
        VITE_API_URL: import.meta.env.VITE_API_URL

    }
}

