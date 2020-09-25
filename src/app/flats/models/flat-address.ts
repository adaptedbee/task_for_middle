export class FlatAddress {
  public city: string;
  public street: string;
  public house: string;
  public room: string;

  deserialize(data: Object): FlatAddress {
    if (data['city'] !== undefined) {
      this.city = data['city'];
    }
    if (data['street'] !== undefined) {
      this.street = data['street'];
    }
    if (data['house'] !== undefined) {
      this.house = data['house'];
    }
    if (data['room'] !== undefined) {
      this.room = data['room'];
    }

    return this;
  }
}
