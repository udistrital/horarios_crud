export const environment = {
    USER: process.env.HORARIOS_CRUD_USER,
    PASS: process.env.HORARIOS_CRUD_PASS,
    HOST: process.env.HORARIOS_CRUD_HOST,
    PORT: process.env.HORARIOS_CRUD_PORT,
    DB: process.env.HORARIOS_CRUD_DB,
    HTTP_PORT: process.env.HORARIOS_CRUD_HTTP_PORT,
    AUTH_DB: process.env.HORARIOS_CRUD_AUTH_DB,
    RUNMODE: process.env.HORARIOS_CRUD_RUNMODE||'prod',
    PARAMETER_STORE: process.env.PARAMETER_STORE
};