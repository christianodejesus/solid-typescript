import('dotenv').then(dotenv =>
  dotenv.config({ path: '.env' })
).then(() => {
  import('./app').then(appImport =>
    appImport.app.listen(Number(process.env.API_PORT))
  );
});
