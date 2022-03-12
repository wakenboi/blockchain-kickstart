import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x71F4DB8f5e7116B12a728d10fda66a17EB464016'
);

export default instance;
