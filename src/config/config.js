import Env from './env';

let config = {
    env: Env,
};
if(config.env==='development'){
    config.apiPath='http://localhost:5601'
}else{
    config.apiPath='http://119.29.57.210:5601';
}
export default config;
