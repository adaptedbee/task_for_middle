import { FlatAddress } from './flat-address';
import { FlatAgent } from './flat-agent';

export class Flat {
  public id: number;

  public title: string;
  public rooms: number;
  public area: number;
  public areaUnit: string;

  public address: FlatAddress;
  public agent: FlatAgent;

  deserialize(data: Object): Flat {
    if (data['id'] !== undefined) {
      this.id = data['id'];
    }

    if (data['attributes'] !== undefined) {
      if (data['attributes']['title'] !== undefined) {
        this.title = data['attributes']['title'];
      }
      if (data['attributes']['rooms'] !== undefined) {
        this.rooms = data['attributes']['rooms'];
      }
      if (data['attributes']['area'] !== undefined) {
        this.area = data['attributes']['area'];
      }
      if (data['attributes']['unit'] !== undefined) {
        this.areaUnit = data['attributes']['unit'];
      }

      if (data['attributes']['address'] !== undefined) {
        this.address =new FlatAddress().deserialize(data['attributes']['address']);
      }
    }

    if (data['relationships'] !== undefined && data['relationships']['type'] === 'agent') {
      this.agent = new FlatAgent().deserialize(data['relationships']);
    }

    return this;
  }
}
